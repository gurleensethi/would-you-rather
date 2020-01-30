import React from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Nav from "./components/nav/Nav";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL + "/"}>
        <Nav />
        <Route path="/login" render={() => <Login />} exact />
        <Route path="/" render={() => <Home />} exact />
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(App);
