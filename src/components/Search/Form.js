import React,{ useState } from 'react';

const Form  = () => {
  return (

    <div className="row">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Select ISBN No</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Select Email Address No</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <button type="button" className="btn btn-primary">Search</button>
      </div>

    </div>

  )
}

export default Form;
