import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./User";
import { mistake } from "../utilities/mistakes";

const client = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

function TableUsers(props) {
  const { selectedCountry, rangeMistake, seed } = props;
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [feed, setFeed] = useState(20);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    if (fetching) {
      client
        .get(
          `?page=${currentPage}&lang=${selectedCountry}&seed=${seed}&feed=${feed}`
        )
        .then((res) => {
          setUsers([...users, ...res.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setFetching(false);
        });
    }
  }, [currentPage, fetching, users, selectedCountry, seed, feed]);

  useEffect(() => {
    client
      .get(`?feed=20`)
      .then((res) => {
        setUsers(res.data);
        setCurrentPage(2);
      })
      .catch((error) => console.log(error))
      .finally(() => setFeed(10));
  }, []);

  useEffect(() => {
    client
      .get(`?feed=20&lang=${selectedCountry}&seed=${seed}`)
      .then((res) => {
        setUsers(res.data);
        setCurrentPage(2);
      })
      .catch((error) => console.log(error))
      .finally(() => setFeed(10));
  }, [selectedCountry, seed]);

  useEffect(() => {
    document.addEventListener("scroll", scrollFunc);

    return () => {
      document.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  useEffect(() => {
    setMistakes(rangeMistake);
  }, [rangeMistake]);

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
          {mistakes === 0
            ? users.map((user, i) => {
                return <User user={user} key={i} num={i} />;
              })
            : users.map((user, i) => {
                const userWithMistakes = mistake(mistakes, user);
                return <User user={userWithMistakes} key={i} num={i} />;
              })}
        </tbody>
      </table>
    </div>
  );
}

export default TableUsers;
