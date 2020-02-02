import React from "react";
import { connect } from "react-redux";
import { User } from "../shared/User";
import { handleLoginUser } from "../../actions/authUser";
import { Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UserList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
`;

const UserListItem = styled.li`
  width: 50%;
`;

class Login extends React.Component {
  handleUserSelect = user => {
    const { dispatch } = this.props;
    dispatch(handleLoginUser(user.id));
  };

  render() {
    const { users, isLoggedIn, from } = this.props;

    if (isLoggedIn) {
      return <Redirect to={from} />;
    }

    return (
      <LoginContainer>
        Select a user to login with...
        <UserList>
          {users.map(user => {
            return (
              <UserListItem key={user.id}>
                <User
                  user={user}
                  onSelect={() => this.handleUserSelect(user)}
                />
              </UserListItem>
            );
          })}
        </UserList>
      </LoginContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const from = ownProps.location.state ? ownProps.location.state.from : "/";
  return {
    from,
    isLoggedIn: !!state.authUser,
    users: Object.values(state.users)
  };
};

export default withRouter(connect(mapStateToProps)(Login));
