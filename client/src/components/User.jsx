import React from "react";

function User(props) {
  const { userId, userName, phoneNumber, address } = props.user;
  const { num } = props;
  return (
    <tr>
      <th scope="row">{num + 1}</th>
      <td>{userId}</td>
      <td>{userName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
    </tr>
  );
}

export default User;
