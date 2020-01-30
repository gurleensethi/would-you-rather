import React from "react";

export function Question(props) {
  const { user, question } = props;
  return (
    <div>
      <h2>{user.name} asks:</h2>
      ...{question.optionOne.text}...
    </div>
  );
}
