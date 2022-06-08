import React from "react";
import { useForm } from "react-hook-form";

function FormRandom() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container-fluid bg-dark">
      <form
        className="d-flex row align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select className="col-lg col-6 m-3" {...register("country")}>
          <option value="The United States">The United States</option>
          <option value="Russia">Russia</option>
          <option value="Georgia">Georgia</option>
        </select>

        <div className="col-lg col-6 m-2 text-center">
          <label htmlFor="customRange" className="form-label-sm text-white">
            Mistake from 0 to 10
          </label>
          <input
            type="range"
            className="form-range"
            id="customRange"
            step="0.25"
            min="0"
            max="10"
            {...register("mistakes0_10", { min: 0, max: 10 })}
          />
        </div>

        <div className="col-lg col-6 form-floating m-2">
          <input
            className="form-control"
            id="floatingInputMistakes0_1000"
            type="number"
            {...register("mistakes0_1000", { min: 0, max: 1000 })}
          />
          <label htmlFor="floatingInputMistakes0_1000">
            Mistake from 0 to 1000
          </label>
        </div>

        <div className="col-lg col-6 form-floating m-2">
          <input
            className="form-control"
            id="floatingInputSeed"
            type="number"
            {...register("seed", { min: 1, max: 99 })}
          />
          <label htmlFor="floatingInputSeed">Seed for random</label>
        </div>

        <button
          className="col-lg-1 col-6 btn btn-outline-success m-2"
          type="submit"
        >
          Random
        </button>
      </form>
    </div>
  );
}

export default FormRandom;
