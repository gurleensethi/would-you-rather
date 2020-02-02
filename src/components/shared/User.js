import React from "react";
import styled from "styled-components";
import Avatar from "../shared/Avatar";
import SizedBox from "../shared/SizedBox";

const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 20px;

  &:hover {
    cursor: pointer;
    background-color: rgb(250, 250, 250);
  }
`;

const Name = styled.p`
  color: grey;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Username = styled.p`
  color: grey;
  margin: 0;
  padding: 0;
`;

export function User(props) {
  const { user, onSelect } = props;
  return (
    <UserBlock onClick={onSelect}>
      <Avatar src={user.avatarURL} size={100} />
      <SizedBox height={10} />
      <Name>{user.name}</Name>
      <Username>({user.id})</Username>
    </UserBlock>
  );
}
