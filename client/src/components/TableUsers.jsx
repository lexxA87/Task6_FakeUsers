import React from "react";
import User from "./User";

function TableUsers(props) {
  const { users } = props;

  return (
    <div>
      <table className="table table-dark table-striped caption-top">
        <caption className="bg-dark text-white text-center">
          List of users
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Adress</th>
            <th scope="col">Phone number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <User user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableUsers;
