import React from "react";

function withTemperature(OriginalComponent) {
  return (props) => {
    const temperatures = props.weathers.map((weathers) => {
      const country = weathers.country;
      const celcius = weathers.temp;

      const temp = {
        ct: country,
        celcius,
        reamur: (4 / 5) * celcius,
        fahrenheit: (9 / 5) * celcius + 32,
        kelvin: celcius + 273,
      };

      return temp;
    });

    return <OriginalComponent temperatures={temperatures} />;
  };
}

export default withTemperature;
