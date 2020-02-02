import React from "react";
import { connect } from "react-redux";

class Leaderboard extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        <ul>
          {users.map(user => {
            return (
              <li key={user.id}>
                <div>
                  <img src={user.avatarURL} alt="user avatar" height="100" />
                  <h3>{user.name}</h3>
                  <p>Answered questions: {user.numAnswered}</p>
                  <p>Created questions: {user.numAsked}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const users = Object.values(state.users)
    .map(user => {
      return {
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        numAnswered: Object.keys(user.answers).length,
        numAsked: Object.keys(user.questions).length
      };
    })
    .sort((user1, user2) => {
      return (
        user2.numAnswered +
        user2.numAsked -
        (user1.numAnswered + user1.numAsked)
      );
    });

  return {
    users
  };
};

export default connect(mapStateToProps)(Leaderboard);
