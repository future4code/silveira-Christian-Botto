import React from "react";
import axios from "axios";

class CreatePage extends React.Component {
    state = {
        playlist: ""
    }

    onChangePlaylist = (event) => {
        this.setState({ playlist: event.target.value })
    }

    addPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }
        axios.post(url, body, {
            headers: {
                Authorization: "christian-cardeal-silveira"
            }
        })
            .then((res) => {
                alert("Success!")
                this.setState({ name: "" })
            })
            .catch((err) => {
                alert("There was a problem trying to create your playlist")
            })
    }

    render() {
        return (
            <div>
                <h3>Create a new playlist bellow:</h3>
                <input
                    value={this.state.playlist}
                    onChange = {this.onChangePlaylist}
                    placeholder = "Playlist name"
                />
                <button onClick={this.addPlaylist}>Create Playlist</button>
            </div>
        )
    }
}

export default CreatePage;