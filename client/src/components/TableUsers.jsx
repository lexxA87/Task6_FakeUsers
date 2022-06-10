import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./User";

function TableUsers(props) {
  const { selectedCountry } = props;
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    if (fetching) {
      axios
        .get(
          `http://localhost:5000/api/users?page=${currentPage}&lang=${selectedCountry}`
        )
        .then((res) => {
          setUsers([...users, ...res.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .catch((error) => console.log(error))
        .finally(() => setFetching(false));
    }
  }, [currentPage, fetching, users, selectedCountry]);

  useEffect(() => {
    console.log("useEffect Select country");

    axios
      .get(`http://localhost:5000/api/users?page=1&lang=${selectedCountry}`)
      .then((res) => {
        setUsers(res.data);
        setCurrentPage(1);
      })
      .catch((error) => console.log(error))
      .finally(() => setFetching(false));
  }, [selectedCountry]);

  useEffect(() => {
    document.addEventListener("scroll", scrollFunc);

    return () => {
      document.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  const scrollFunc = (e) => {
    const n =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);
    if (n < 100) {
      setFetching(true);
    }
  };

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
          {users.map((user, i) => {
            return <User user={user} key={i} num={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableUsers;
