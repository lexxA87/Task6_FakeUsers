import React from "react";

function TableUsers() {
  return (
    <div>
      <table class="table table-dark table-striped caption-top">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@mdo</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableUsers;
