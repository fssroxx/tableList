import "./App.css";
import "../bootstrap.min.css";
import { useState } from "react";
import Row from "../row";

function App() {
  const [tableItems, setTableItems] = useState([]);
  const [targetValue, setTargetValue] = useState("");

  const addItem = () => {
    setTableItems([...tableItems, targetValue]);
    setTargetValue("");
  };
  const handleChange = (e) => setTargetValue(e.target.value);
  console.log(tableItems);
  const view = tableItems.map((item, index) => (
    <tr>
      <Row tableItems={item} key={index} />
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
            <tr>
              <th>#</th>
              <th>Значение Поля</th>
            </tr>
          </thead>
          <tbody>{view}</tbody>
        </table>
      </div>

      <div className="badge badge-primary total">
        <span className='total-span'>Всего строк: {tableItems.length}</span>
      </div>
    </>
  );
}

export default App;
