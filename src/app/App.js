import "./App.scss";

import { useState } from "react";
import Row from "../row";

let id = 0;

function App() {

  const [tableItems, setTableItems] = useState([]);
  const [targetValue, setTargetValue] = useState("");

  const addItem = () => {
    const newItem = {
      id: ++id,
      value: targetValue,
    };
    setTableItems([...tableItems, newItem]);
    setTargetValue("");
  };

  const handleSort = () => {
    const newTableItems = [...tableItems].sort((a, b) => b.id - a.id);
    setTableItems(newTableItems);
  };

  const handleChange = (e) => setTargetValue(e.target.value);
  console.log(tableItems);

  const view = tableItems.map((item, index) => (
    <tr>
      <Row tableItem={item} key={index} />
    </tr>
  ));

  return (
    <>
      <div class="form-group">
        <input
          type="text"
          onChange={handleChange}
          value={targetValue}
          class="form-control"
          placeholder="что-нибудь напишем..."
          id="inputDefault"
        />
        <button className="btn btn-primary" onClick={addItem}>
          Добавить
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr onClick={handleSort}>
              <th>#</th>
              <th>Значение Поля</th>
            </tr>
          </thead>
          <tbody>{view}</tbody>
        </table>
      </div>

      <div className="badge badge-primary total">
        <span className="total-span">Всего строк: {tableItems.length}</span>
      </div>
    </>
  );
}

export default App;
