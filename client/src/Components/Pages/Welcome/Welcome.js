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
          <div class="col-md-8"><Jumbotron /></div>
          <div class="col-md-4">
            <Authentication />
            <Route path="/Login" component={Login} />
            <Route path="*" component={Authentication} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;