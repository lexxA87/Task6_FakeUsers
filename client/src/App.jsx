import React, { useState } from "react";
// import axios from "axios";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FormRandom from "./components/FormRandom";
import TableUsers from "./components/TableUsers";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("en_US");

  return (
    <div className="bg-dark min-vh-100">
      <div className="container">
        <Header />
        <FormRandom
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <TableUsers selectedCountry={selectedCountry} />
      </div>
    </div>
  );
}

export default App;
