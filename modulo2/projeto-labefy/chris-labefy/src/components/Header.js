import React from "react";

const  Header = (props) => {

    return(
        <div>
            <button onClick={props.choosePageHome}>Home</button>
            <button onClick={props.choosePageCreate}>Create a Playlist</button>
            <button onClick={props.choosePageDisplay}>Check your Playlists</button>
        </div>
    )
}
   

export default Header;