import { useState } from "react";

const Filter = ({ tableItems, formFilterList, showAll }) => {
  const [filterValue, setFilterValue] = useState("");

  const filterChange = (e) => setFilterValue(e.target.value);

  console.log(filterValue);

  const filterItems = tableItems.filter(
    (item) => item.value.includes(filterValue)
  );

  const dis = () => (tableItems.length < 2 ? true : false);

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
        disabled={dis()}
        className="btn btn-success"
      >
        Filtered
      </button>
      <button onClick={showAll} className="btn btn-warning">git push
        ALL
      </button>
    </div>
  );
};
export default Filter;
