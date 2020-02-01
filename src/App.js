import React from "react";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Nav from "./components/nav/Nav";
import NotFound from "./components/not-found/not-found";
import NewQuestion from "./components/new-question/NewQuestion";
import QuestionDetail from "./components/question/QuestionDetail";
import ProtectedRoute from "./components/shared/ProtectedRoute";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <HashRouter basename={process.env.PUBLIC_URL + "/"}>
        <Nav />
        {loading ? (
          "Loading..."
        ) : (
          <Switch>
            <Route
              path="/questions/:question_id"
              render={({ match }) => {
                return <QuestionDetail id={match.params.question_id} />;
              }}
              exact
            />
            <Route path="/login" render={() => <Login />} exact />
            <ProtectedRoute path="/" render={() => <Home />} exact />
            <ProtectedRoute path="/new" render={() => <NewQuestion />} exact />
            <Route component={NotFound} />
          </Switch>
        )}
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

export default connect(mapStateToProps)(App);
