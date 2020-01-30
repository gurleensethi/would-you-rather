import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const { user } = this.props;
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
            <Link to="/new">New Question</Link>
          </li>
          <li>
            <Link to="/">Leader Board</Link>
          </li>
          {user && (
            <li>{!!user ? <button>Logout</button> : <button>Login</button>}</li>
          )}
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

export default connect(mapStateToProps)(Nav);
