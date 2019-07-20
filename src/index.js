import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

// import Index from "views/Index.jsx";
// import LandingPage from "views/examples/LandingPage.jsx";
// import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/main/ProfilePage.jsx";
import GalleryPage from "views/main/Gallery.jsx";
import VideosPage from "views/main/Videos.jsx";
import HomePage from "views/main/HomePage.jsx";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/about-us" render={props => <ProfilePage {...props} />} />
      <Route path="/gallery" render={props => <GalleryPage {...props} />} />
      <Route path="/videos" render={props => <VideosPage {...props} />} />
      <Route path="/" render={props => <HomePage {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
