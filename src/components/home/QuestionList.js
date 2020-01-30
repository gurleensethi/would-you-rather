import React from "react";
import { connect } from "react-redux";
import { Question } from "../shared/Question";

class QuestionList extends React.Component {
  render() {
    const { users, questions } = this.props;
    return (
      <ul>
        {questions.map(question => {
          return (
            <li key={question.id}>
              <Question user={users[question.author]} question={question} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  console.log("Questions", Object.values(state.questions));
  return {
    questions: Object.values(state.questions),
    users: state.users
  };
};

export default connect(mapStateToProps)(QuestionList);
