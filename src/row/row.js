// import { useState } from "react";

function Row({ tableItems }) {
  let id = 0;

  return (
    <>
      <td>{id +=1} </td>
      <td>{tableItems} </td>
    </>
  );
}

export default Row;
