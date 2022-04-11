import React from "react";
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import DisplayAllPage from "./pages/DisplayAllPage"
import Header from "./components/Header";


class App extends React.Component {
  state = {
    currentPage: "homepage"
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case "homepage":
        return <HomePage />;
      case "createpage":
        return <CreatePage  />;
      case "displayallpage":
        return <DisplayAllPage />;
    }
  }

  choosePageHome = () => {
    this.setState({ currentPage: "homepage" })
  }
  choosePageCreate = () => {
    this.setState({ currentPage: "createpage" })
  }
  choosePageDisplay = () => {
    this.setState({ currentPage: "displayallpage" })
  }



  render() {
    return (

      <div>        
        <Header
        choosePageHome = {this.choosePageHome} 
        choosePageCreate = {this.choosePageCreate} 
        choosePageDisplay = {this.choosePageDisplay} 
        />
        {this.renderPage()}
      </div>
    )
  }
}

export default App;