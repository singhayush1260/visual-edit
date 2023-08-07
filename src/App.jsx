import "./App.scss";
import { useState } from "react";
const App = () => {
  const[data]=useState(null)
  return (
    <>
    {data.map((d)=>console.log(d))}
      <h1>gellp</h1>
    </>
  );
};

export default App;
