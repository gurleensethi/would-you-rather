import React from "react";
import { connect } from "react-redux";
import { User } from "../shared/User";

class Login extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <User user={user} onSelect={() => console.log(user)} />
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
