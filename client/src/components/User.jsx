import React from "react";

function User(props) {
  const { num, userId, userName, phoneNumber, address } = props.user;
  return (
    <tr>
      <th scope="row">{num}</th>
      <td>{userId}</td>
      <td>{userName}</td>
      <td>
        {address.city}, {address.street}
      </td>
      <td>{phoneNumber}</td>
    </tr>
  );
}

export default User;
