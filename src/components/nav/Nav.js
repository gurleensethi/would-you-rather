import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { handleLogoutUser } from "../../actions/authUser";
import styled, { css } from "styled-components";
import Avatar from "../shared/Avatar";
import Button from "../shared/Button";
import Divider from "../shared/Divider";

const NavContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 20px;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline;
`;

const NavListItem = styled.li`
  display: inline;
  margin: 20px;
`;

const NavLink = styled(({ className, children, isActive, ...rest }) => (
  <Link className={className} {...rest}>
    {children}
  </Link>
))`
  border: none;
  text-decoration: none;
  ${({ isActive }) => {
    return css`
      color: ${isActive ? "red" : "grey"};
    `;
  }}

  &:focus {
    border: none;
  }
`;

const ProfileBlock = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Nav extends React.Component {
  render() {
    const { user, logout, pathname } = this.props;
    return (
      <NavContainer>
        <NavList>
          <NavListItem>
            <NavLink to="/" isActive={"/" === pathname}>
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/add" isActive={"/add" === pathname}>
              New Question
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/leaderboard" isActive={"/leaderboard" === pathname}>
              Leader Board
            </NavLink>
          </NavListItem>
        </NavList>
        <ProfileBlock>
          {user && (
            <React.Fragment>
              <ProfileDetails>
                <Avatar src={user.avatarURL} size={30} />
                Hello {user.name}
              </ProfileDetails>
              <Divider width={1} height={40} hMargin={20} />
              <Button onClick={logout}>Logout</Button>
            </React.Fragment>
          )}
        </ProfileBlock>
      </NavContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[state.authUser],
    pathname: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(handleLogoutUser())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
