import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogoutUser } from "../../actions/authUser";

class Nav extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div>
        {user && (
          <div>
            {" "}
            Hello {user.name}{" "}
            <img
              src={user.avatarURL}
              alt="user avatar"
              width="30"
              height="30"
            />
          </div>
        )}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">New Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leader Board</Link>
          </li>
          {user && <button onClick={logout}>Logout</button>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users[state.authUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(handleLogoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
