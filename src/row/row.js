// import { useState } from "react";
import "./row.scss";
function Row({ tableItem }) {
  const { id, value, value2, value3, value4 } = tableItem;

  return (
    <>
      <td>{id} </td>
      <td>{value} </td>
      <td>{value2} </td>
      <td>{value3} </td>
      <td>{value4} </td>
    </>
  );
}

export default Row;
