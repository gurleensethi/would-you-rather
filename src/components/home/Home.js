import React from "react";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";
import styled, { css } from "styled-components";
import Divider from "../shared/Divider";

const HomeConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionList = styled.div`
  display: flex;
  align-items: center;
`;

const SectionItem = styled.div`
  padding: 10px 40px;
  font-size: 24px;
  color: grey;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: red;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: red;
    `}
`;

class Home extends React.Component {
  state = {
    selectedSection: "unanswered"
  };

  switchSection = section => {
    this.setState(() => {
      return { selectedSection: section };
    });
  };

  render() {
    return (
      <HomeConatiner>
        <SectionList>
          <SectionItem
            isActive={"unanswered" === this.state.selectedSection}
            onClick={() => this.switchSection("unanswered")}
          >
            Unanswered
          </SectionItem>
          <Divider height={30} width={1} />
          <SectionItem
            isActive={"answered" === this.state.selectedSection}
            onClick={() => this.switchSection("answered")}
          >
            Answered
          </SectionItem>
        </SectionList>
        {this.state.selectedSection === "answered" && (
          <QuestionList answered={true} />
        )}
        {this.state.selectedSection === "unanswered" && (
          <QuestionList answered={false} />
        )}
      </HomeConatiner>
    );
  }
}

export default connect()(Home);
