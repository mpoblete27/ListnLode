import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, } from "mdbreact";
// import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar className="navbar" color="indigo" dark expand="md">
        <MDBNavbarBrand><Link to ={"/"}>
          <strong className="white-text">Muse</strong></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />

        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

            {/* This will direct users to their profile page */}
            <MDBNavItem>
              <Link to="/Profile"
              className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}>
                Profile
              </Link>
              </MDBNavItem>

            {/* active sets the highlight to show which page user is in*/}
            <MDBNavItem> 
            <Link to="/Chat"
              className={window.location.pathname === "/Chat" ? "nav-link active" : "nav-link"}>
                Chat
              </Link>
            </MDBNavItem>

            {/* This will direct users to the Forum Page */}
            <MDBNavItem> 
              <Link to="/Forum"
              className={window.location.pathname === "/Forum" ? "nav-link active" : "nav-link"}>
                Forum
              </Link>
            </MDBNavItem>

            {/* This will direct users to their account settings */}
            <MDBNavItem> 
              <Link to="/About"
              className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                About
              </Link>
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
} //end of Navbar class

export default Navbar;