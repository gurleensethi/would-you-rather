import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends React.Component {
  render() {
    const { path, render, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        path={path}
        render={history =>
          isLoggedIn ? (
            render(history)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.path }
              }}
            />
          )
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
