import React from "react";

export function Question(props) {
  const { user, question, onViewPoll } = props;
  return (
    <div onClick={onViewPoll}>
      <h2>{user.name} asks:</h2>
      ...{question.optionOne.text}...
    </div>
  );
}
