import React, { Component } from "react";
// import ReactPlayer from "react-player";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Universal Website Components  =================================
import Navbar from "./Components/Navbar";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

// Website Pages =================================================
import Welcome from "./Components/Pages/Welcome/Welcome"
import Profile from "./Components/Pages/Profile/Profile";
import Chat from "./Components/Pages/Chat/Chat";
import Forum from "./Components/Pages/Forum/Forum";
import About from "./Components/Pages/About/About";

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Chat" component={Chat} />
            <Route exact path="/Forum" component={Forum} />
            <Route exact path="/About" component={About} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
