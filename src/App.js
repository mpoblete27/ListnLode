import React, { Component } from "react";
import ReactPlayer from "react-player";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render () {
    return (
      <div>
        <div className="welcomePage">
          <Jumbotron />
        </div> {/* End of Welcome Page*/}

      {/* Planning to have a switch case to display different website pages */}
        <div className="profilePage">
          
        </div> {/* End of Profile Page*/}
        
        <div className="chatPage">
          {/* <Navbar />
          <MDBContainer>
            <MDBRow>
              <MDBCol>Chat Directory</MDBCol>
              <MDBCol><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /></MDBCol>
              <MDBCol>Chat Playlist Queue</MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol></MDBCol>
              <MDBCol>Live chat goes here!</MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
          </MDBContainer> */}
        </div> {/* End of Chat Page*/}

        <div className="forumPage">
        
        </div> {/* End of Forum Page*/}

      </div>
    )
  }
}

export default App;
