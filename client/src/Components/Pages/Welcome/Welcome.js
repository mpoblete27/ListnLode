import React from "react";
import { BrowserRouter as  Route } from "react-router-dom";
import Jumbotron from "../../Jumbotron";
import Authentication from "./Authentication/Authentication";
import Login from "./Login/Login";
import CarouselPage from "./../../CarouselPage/CarouselPage.js"

const Welcome = () => {
  // implement user logic in backend doc when signup is complete
  return (
    <div>
      <CarouselPage/>
      <Jumbotron />
      {/* <CarouselPage/> */}
      <Authentication />
      <Route path="/Login" component={Login} />
      <Route path="*" component={Authentication} />
    </div>
  )
}

export default Welcome;