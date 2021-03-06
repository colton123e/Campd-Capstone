import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LogNavbar from "./components/layout/LogNavbar";
import Landing from "./components/layout/Landing";

import Login from "./components/auth/Login";
import Projects from "./components/layout/Projects";
import Signup from "./components/layout/Signup";
import AddProject from "./components/layout/AddProject";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/layout/Profile";
import ViewProject from "./components/layout/ViewProject"
import ViewProfileProject from "./components/layout/ViewProfileProject"

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            log: (localStorage.jwtToken),

        };

    }


  render() {



    return (
      <Router>
        <div className="App">
          { localStorage.jwtToken ? <LogNavbar /> : <Navbar /> }

          <Route exact path="/" component={Landing} />
          <Route exact path="/viewprofileproject" component={ViewProfileProject} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/addproject" component={AddProject} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/viewproject" component={ViewProject} />

          <Switch>
          <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;
