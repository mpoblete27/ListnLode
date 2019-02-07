
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

  class Login extends Component { 
    render () {
      return (
      <div>
      <MDBContainer id="signUpContainer">
      <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Log In:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                  <MDBInput label="Prefered username" icon="envelope" group type="text" validate error="wrong" success="right" />
                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    <MDBInput label="Confirm your password" icon="lock" group type="password" validate />
                  </div>
  
                <div className="text-center mt-4">
                  <MDBBtn color="light-blue" className="mb-3" type="submit">
                    <Link to={"/Profile"}>Log In</Link> 
                  </MDBBtn>
                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Need a profile?<button id = "signUp"><Link to={"/"}>Sign Up</Link></button>></p>
                     
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      )
      }
  };
  
  export default Login;