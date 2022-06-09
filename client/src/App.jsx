import React from "react";
// import axios from "axios";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FormRandom from "./components/FormRandom";
import TableUsers from "./components/TableUsers";

function App() {
  return (
    <div className="bg-dark min-vh-100">
      <div className="container">
        <Header />
        <FormRandom />
        <TableUsers />
      </div>
    </div>
  );
}

export default App;
