//!  1. buat komponen memiliki hasil penambahan masing-masing.
//!  2. buat & gunakan Higher Order Component (HOC).
import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Weather from "./components/Weather";

function App() {
  const [nomor, setNomor] = useState(0);

  const handlerNomor = () => {
    setNomor(nomor + 1);
  };

  return (
    <>
      <Increment counter={1} />
      <Increment counter={2} />

      <Weather weathers={[{ country: "ID", temp: 20 }]} />
    </>
  );
}

export default App;
