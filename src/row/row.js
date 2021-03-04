// import { useState } from "react";

function Row({ tableItems }) {
  const showRows = tableItems.map((item) => item);
  console.log(showRows);
  let id=0;
  
  return (
    <div key={id++}>
      <td>{id+=1} </td>
      <td>{showRows} </td>
    </div>
  );
}

export default Row;
