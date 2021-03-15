import { useState } from "react";

const Filter = ({ tableItems, formFilterList }) => {
  const [filterValue, setFilterValue] = useState("");
 

  const filterChange = (e) => setFilterValue(e.target.value);
  console.log(filterValue);

  const filterItems = tableItems.filter(
    (item) => item.value.includes(filterValue) === true
  );
  console.log(filterItems);
  return (
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        onChange={filterChange}
        value={filterValue}
        placeholder="что-нибудь отфитруем..."
      />

      <button
        onClick={() => formFilterList(filterItems)}
        className="btn btn-success"
      >
        Go!
      </button>
    </div>
  );
};
export default Filter;
