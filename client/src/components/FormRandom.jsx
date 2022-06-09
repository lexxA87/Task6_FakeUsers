import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormRandom() {
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [rangeMistake, setRangeMistake] = useState(0);
  const [seed, setSeed] = useState(0);
  const { register, handleSubmit } = useForm();
  const onSubmitSeed = (data) => (data.seed ? setSeed(data.seed) : setSeed(0));

  return (
    <div className="container-fluid bg-dark">
      <div className="d-flex row align-items-center">
        <div className="col-lg col-6 m-2 row">
          <select
            className="col-lg p-2"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value={1}>The United States</option>
            <option value={2}>Russia</option>
            <option value={3}>Georgia</option>
          </select>
        </div>

        <div className="col-lg col-6 m-2 text-center">
          <label htmlFor="customRange" className="form-label-sm text-white">
            Mistake from 0 to 10
          </label>
          <input
            value={rangeMistake}
            onChange={(e) => setRangeMistake(e.target.value)}
            type="range"
            className="form-range"
            id="customRange"
            step="0.25"
            min="0"
            max="10"
          />
        </div>

        <div className="col-lg col-6 form-floating  m-2">
          <input
            value={rangeMistake}
            onChange={(e) => setRangeMistake(e.target.value)}
            className="form-control"
            id="floatingInputMistakes0_1000"
            type="number"
          />
          <label htmlFor="floatingInputMistakes0_1000">
            Mistake from 0 to 1000
          </label>
        </div>

        <form
          className="col-lg-4 col-6 form-floating m-2 row"
          onSubmit={handleSubmit(onSubmitSeed)}
        >
          <input
            defaultValue={seed}
            className="form-control col-lg "
            id="floatingInputSeed"
            type="number"
            {...register("seed", { min: 0, max: 99 })}
          />
          <label htmlFor="floatingInputSeed">Seed for random</label>
          <button
            className="col-lg col-6 btn btn-outline-success m-2"
            type="submit"
          >
            Random
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormRandom;
