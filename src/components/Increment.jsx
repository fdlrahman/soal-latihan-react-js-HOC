import React, { useState } from "react";
import withCalculate from "../utils/withCalculate";
withCalculate;

function Increment({ nomor, handleNomor, counter }) {
  return (
    <div>
      <h3>x + {counter}</h3>
      <p>{nomor}</p>
      <button onClick={handleNomor}>tambah</button>
    </div>
  );
}

export default withCalculate(Increment);
