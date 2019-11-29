import React, {Component} from "react";
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from "./components/ProjectTask/AddProjectTask";
import {Provider} from "react-redux";
import store from "./store";


class App extends Component{
  render() {
    return (
        <Provider store = {store}>
        <Router>
          <div className="App">
            <Navbar/>
            <ProjectBoard/>
            <Route export path="/projectBoard" component={ProjectBoard}/>
            <Route export path="/addProjectTask" component={AddProjectTask}/>
          </div>
        </Router>
        </Provider>
    );
  }

}

export default App;
