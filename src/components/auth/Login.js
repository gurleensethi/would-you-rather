import React from "react";
import { connect } from "react-redux";
import { User } from "../shared/User";
import { handleLoginUser } from "../../actions/authUser";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  handleUserSelect = user => {
    const { dispatch } = this.props;
    dispatch(handleLoginUser(user.id));
  };

  render() {
    const { users, isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <User user={user} onSelect={() => this.handleUserSelect(user)} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.authUser,
    users: Object.values(state.users)
  };
};

export default connect(mapStateToProps)(Login);
