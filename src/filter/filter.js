import { useState } from "react";

const Filter = ({ tableItems, formFilterList, showAll }) => {
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
      {/* <select>
        <option>all</option>
        <option>filtered</option>
      </select> */}
      <button
        onClick={() => formFilterList(filterItems)}
        className="btn btn-success"
      >
        Filtered
      </button>
      <button
        onClick={showAll}
        className="btn btn-warning"
      >
        ALL
      </button>
    </div>
  );
};
export default Filter;
