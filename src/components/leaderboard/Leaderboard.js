import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Reward from "../../images/reward.png";

const LeaderboardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LeaderboardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LeaderboardListItem = styled.li`
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgb(220, 220, 220);
  display: flex;
  position: relative;
  transition: 0.3s;

  &:hover {
    box-shadow: 5px 5px 10px rgb(220, 220, 220);
  }
`;

const LeaderboardListItemContent = styled.div``;

const LeaderboardListItemTitle = styled.p`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  font-size: 28px;
`;

const LeaderboardListItemDetail = styled.p`
  margin: 15px 0px;
  padding: 0px;
  font-size: 20px;
  color: grey;
`;

const RewardIcon = styled.img`
  height: 45px;
  position: absolute;
  top: 85%;
  left: 90%;
`;

const ScoreBlock = styled.div`
  display: inline-block;
  font-size: 40px;
  color: green;

  & > div:first-child {
    font-size: 16px;
    color: black;
  }
`;

class Leaderboard extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <LeaderboardContainer>
        <LeaderboardList>
          {users.map((user, index) => {
            return (
              <LeaderboardListItem key={user.id}>
                <img src={user.avatarURL} alt="user avatar" height="200" />
                <LeaderboardListItemContent>
                  <LeaderboardListItemTitle>
                    {user.name}
                  </LeaderboardListItemTitle>
                  <LeaderboardListItemDetail>
                    Answered questions: {user.numAnswered}
                  </LeaderboardListItemDetail>
                  <LeaderboardListItemDetail>
                    Created questions: {user.numAsked}
                  </LeaderboardListItemDetail>
                  <ScoreBlock>
                    <div>Score</div>
                    <div>{user.numAnswered + user.numAsked}</div>
                  </ScoreBlock>
                </LeaderboardListItemContent>
                {index === 0 && <RewardIcon src={Reward} alt="ribbon icon" />}
              </LeaderboardListItem>
            );
          })}
        </LeaderboardList>
      </LeaderboardContainer>
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
