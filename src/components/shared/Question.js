import React from "react";
import styled from "styled-components";
import Avatar from "../shared/Avatar";
import Divider from "../shared/Divider";
import SizedBox from "../shared/SizedBox";

const QuestionContainer = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgb(245, 245, 245);
  }
`;

const QuestionTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: bold;
`;

const QuestionDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: grey;
`;

const QuestionDetails = styled.div``;

export function Question(props) {
  const { user, question, onViewPoll } = props;
  return (
    <QuestionContainer onClick={onViewPoll}>
      <Avatar src={user.avatarURL} size={100} />
      <Divider width={1} height={80} hMargin={20} />
      <QuestionDetails>
        <QuestionTitle>{user.name} asks:</QuestionTitle>
        <SizedBox height={5} />
        <QuestionDescription>
          ...{question.optionOne.text}...
        </QuestionDescription>
      </QuestionDetails>
    </QuestionContainer>
  );
}
