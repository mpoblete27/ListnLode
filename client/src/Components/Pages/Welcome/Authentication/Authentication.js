import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

  const Authentication = () => {
  
    return (
      <MDBContainer id="signUpContainer">
      <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Sign Up:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                  <MDBInput label="Prefered username" icon="envelope" grouptype="text" validateerror="wrong" success="right" />
                    <MDBInput label="Type your email" icon="envelope" grouptype="email" validateerror="wrong" success="right" />
                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    <MDBInput label="Confirm your password" icon="lock" group type="password" validate />
                  </div>
  
                <div className="text-center mt-4">
                  <MDBBtn color="light-blue" className="mb-3" type="submit"> <Link to={"/Profile"}>Sign Up</Link>
    
                  </MDBBtn>
                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p> Already a muse? <button id = "Login"><Link to ={"/login"}>Log In</Link></button></p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  
  export default Authentication;