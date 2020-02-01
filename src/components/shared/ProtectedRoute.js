import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends React.Component {
  render() {
    const { path, render, isLoggedIn } = this.props;
    return (
      <Route
        path={path}
        render={history =>
          isLoggedIn ? render(history) : <Redirect to="/login" />
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.authUser
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
