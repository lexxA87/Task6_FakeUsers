import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FormRandom from "./components/FormRandom";
import TableUsers from "./components/TableUsers";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-dark min-vh-100">
      <div className="container">
        <Header />
        <FormRandom />
        <TableUsers users={users} />
      </div>
    </div>
  );
}

export default App;
