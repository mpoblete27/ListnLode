import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="navbar" color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Muse</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

            {/* This will direct users to their profile page */}
            <MDBNavItem>
              <MDBNavLink to="#!">Profile</MDBNavLink>
            </MDBNavItem>

            {/* active sets the highlight to show which page user is in*/}
            <MDBNavItem active> 
              <MDBNavLink to="#!">Chat</MDBNavLink>
            </MDBNavItem>

            {/* <MDBNavItem>
              <MDBNavLink to="#!">Muse</MDBNavLink>
            </MDBNavItem> */}

            {/* This will direct users to the Forum Page */}
            <MDBNavItem>
              <MDBNavLink to="#!">Forum</MDBNavLink>
            </MDBNavItem>

            {/* This will direct users to their account settings */}
            <MDBNavItem>
              <MDBNavLink to="#!">Settings</MDBNavLink>
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
} //end of Navbar class

export default Navbar;