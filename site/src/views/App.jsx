import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  import './App.css'

  import Navbar from "../components/Navbar";
  import Content from "../components/Content";

  const App = props => (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Content></Content>
      </Router>
    </div>
)

export default App