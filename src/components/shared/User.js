import React from "react";

export function User(props) {
  const { user, onSelect } = props;
  return (
    <div onClick={onSelect}>
      {user.name} ({user.id})
    </div>
  );
}
