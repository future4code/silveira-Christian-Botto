import React from "react";
import styled from "styled-components";
import axios from "axios";
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import DisplayAllPage from "./pages/DisplayAllPage"
import DisplayPage from "./pages/DisplayPage"
import SongPage from "./pages/SongPage"
import Header from "./components/Header";

class App extends React.Component {
  state = {
    currentPage: "createpage"
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case "homepage":
        return <HomePage />;
      case "createpage":
        return <CreatePage />;
      case "displayallpage":
        return <DisplayAllPage />;
      case "displaypage":
        return <DisplayPage />;
      case "songpage":
        return <SongPage />;
    }
  }

  choosePage = (event) => {
    this.setState({ currentPage: event })
  }



  render() {
    return (

      <div>
        <header>
        <button onClick={() => this.choosePage("homepage")}>Home</button>
        <button onClick={() => this.choosePage("createpage")}>Create your Playlist</button>
        <button onClick={() => this.choosePage("displayallpage")}>Chrck your Playlists</button>
        </header>
        {this.renderPage()}
      </div>
    )
  }
}

export default App;