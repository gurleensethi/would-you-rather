import React from "react";
import { connect } from "react-redux";
import { User } from "../shared/User";
import { loginUser } from "../../actions/authUser";

class Login extends React.Component {
  handleUserSelect = user => {
    const { dispatch } = this.props;
    dispatch(loginUser(user.id));
  };

  render() {
    const { users } = this.props;
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
    users: Object.values(state.users)
  };
};

export default connect(mapStateToProps)(Login);
