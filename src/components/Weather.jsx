import React from "react";
import withTemperature from "../utils/withTemperature";

function Weather(props) {
  return (
    <>
      <h1>Cuaca</h1>
      <p>kamu mendapatkan 4 satuan cuaca dari beberapa negara</p>

      <TableWeather temperatures={props.temperatures} />
    </>
  );
}

const TableWeather = ({ temperatures }) => (
  <table border={1}>
    <thead>
      <tr>
        <th>Ct.</th>
        <th>Celcius</th>
        <th>Reamur</th>
        <th>Fahrenheit</th>
        <th>Kelvin</th>
      </tr>
    </thead>
    <tbody>
      {temperatures.map((temp, id) => (
        <tr key={id}>
          <td>{temp.ct}</td>
          <td>{temp.celcius}</td>
          <td>{temp.reamur}</td>
          <td>{temp.fahrenheit}</td>
          <td>{temp.kelvin}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default withTemperature(Weather);
