import React, { useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FormRandom from "./components/FormRandom";
import TableUsers from "./components/TableUsers";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("en_US");
  const [rangeMistake, setRangeMistake] = useState(0);
  const [seed, setSeed] = useState(0);

  return (
    <div className="bg-dark min-vh-100">
      <div className="container">
        <Header />
        <FormRandom
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          rangeMistake={rangeMistake}
          setRangeMistake={setRangeMistake}
          seed={seed}
          setSeed={setSeed}
        />
        <TableUsers
          selectedCountry={selectedCountry}
          rangeMistake={rangeMistake}
          seed={seed}
        />
      </div>
    </div>
  );
}

export default App;
