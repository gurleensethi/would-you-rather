import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

class Home extends React.Component {
  render() {
    return <QuestionList />;
  }
}

export default connect()(Home);
