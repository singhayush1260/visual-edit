import { useState } from "react";
const useFeColorMatrix = () => {
  const [customFilterMatrix, setCustomFilterMatrix] = useState([
    ".","R","G","B","A","Offset",
    "R",1,1,1,1,1,
    "G",1,1,1,1,1,
    "B",1,1,1,1,1,
    "A",1,1,1,1,1,
  ]);
  const getMatrixValue = (index, value) => {
    const updatedMatrix = [...customFilterMatrix];
    updatedMatrix[index] = value;
    setCustomFilterMatrix(updatedMatrix);
    const values = customFilterMatrix
      .slice(1)
      .map((value) => (value === "." ? "1" : value))
      .join(" ");
      console.log(`matrix(${values})`);
    return `matrix(${values})`;
  };
  return {getMatrixValue}
};
export default useFeColorMatrix;
