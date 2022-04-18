import React from "react";
import axios from "axios";
import styled from "styled-components";
import PlayPage from "./PlayPage";


const CardPlaylist = styled.div`
border: 1px solid blueviolet;
padding: 5px;
margin: auto;
width: 50vw;
display: flex;
justify-content: space-between;
`


class DisplayAllPage extends React.Component {

    state = {
        playlists: [],
        whatToShow: true,
        playlistName: "",
        playlistID: 0
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "christian-cardeal-silveira"
            }
        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                alert("There was a problem trying to load your playlists")
            })
    };


    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "christian-cardeal-silveira"
            }
        })

            .then(() => {
                alert("Playlist deleted")
                this.getPlaylists()
            })
            .catch((err) => {
                alert("Error")
            })
    }

    editPlaylist = (name, id) => {
        this.setState({ playlistName: name })
        this.setState({ playlistID: id })
        this.setState({ whatToShow: false })
    }

    goBack = () => {
        this.setState({ whatToShow: true })
    }


    render() {

        const listPlaylist = this.state.playlists.map((play) => {
            return (
                <CardPlaylist key={play.id} >
                    {play.name}
                    <button onClick={() => this.editPlaylist(play.name, play.id)}>Info</button>
                    <button onClick={() => this.deletePlaylist(play.id)}>X</button>
                </CardPlaylist>
            )
        })

        switch (this.state.whatToShow) {
            case true:
                return (
                    <div>
                        <h3>Chreck you playlists bellow</h3>
                        <h3>Click on 'info' to see more details</h3>
                        <h3>Click on 'delete' to delete the list</h3>
                        {listPlaylist}
                    </div>
                );
            case false:
                return (
                    <div>
                        {/* <PlayPage
                            playlistName={this.state.playlistName}
                            playlistID={this.state.playlistID}
                        /> */}

                        <button onClick={() => this.goBack()}>Go back to all lists</button>
                    </div>

                )
            default:
                break;
        }
    }
}

export default DisplayAllPage