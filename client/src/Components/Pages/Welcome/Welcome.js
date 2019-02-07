import React from "react";
import { BrowserRouter as  Route } from "react-router-dom";
import Jumbotron from "../../Jumbotron";
import CarouselPage from "../../CarouselPage/CarouselPage";
import Authentication from "./Authentication/Authentication";
import Login from "./Login/Login";

const Welcome = () => {
  // implement user logic in backend doc when signup is complete
  return (
    <div>
      <CarouselPage />
      <div class="container">
        <div class="row">
        <Jumbotron />
          {/* <div class="col-sm-8"><Jumbotron /></div>
          <div class="col-lg-4">

          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Welcome;