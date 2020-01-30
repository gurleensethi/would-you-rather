import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

class Home extends React.Component {
  render() {
    return (
      <div>
        Unanswered Questons:
        <QuestionList answered={false} />
        Answered Questons:
        <QuestionList answered={true} />
      </div>
    );
  }
}

export default connect()(Home);
