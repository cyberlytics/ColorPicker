import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Components
import Home from "./views/Home/home"
import About from "./views/About/about"
import Dashboard from "./views/Dashboard/dashboard"
import ColorWheel from "./components/ColorWheel/index"
import CreatePalette from "./views/CreatePalette"

//Views
import ShowSchemes from "./views/ShowSchemes"

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/schemes">Schemes</Link>
          </li>
          <li>
            <Link to="/wheel">Wheel</Link>
          </li>
          <li>
            <Link to="/createPalette">create Palette</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/schemes">
            <ShowSchemes />
          </Route>
          <Route path="/wheel">
            <ColorWheel />
          </Route>
          <Route path="/createPalette">
            <CreatePalette />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
