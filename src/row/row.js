// import { useState } from "react";

function Row({ tableItem }) {
  const {id, value} = tableItem;

  return (
    <>
      <td>{id} </td>
      <td>{value} </td>
    </>
  );
}

export default Row;
