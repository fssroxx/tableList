import "./App.scss";

import { useState, useEffect } from "react";
import Row from "../row";
import Buttons from "../buttons";

let id = 0;

function App() {
  const [tableItems, setTableItems] = useState([]);
  const [targetValue, setTargetValue] = useState("");
  const [clickCounter, setClickCounter] = useState(1);
  const [btns, setBtns] = useState([{ number: 1, selected: true }]);

  useEffect(() => {
    let n = Math.ceil(tableItems.length / 5);
    console.log(n);
    for (let i = 0; i < n; i++) {
      const newBtn = {
        number: n + 1,
        selected: false,
      };
      setBtns([...btns, newBtn]);
    }
  }, [tableItems]);

  console.log(btns);
  const addItem = () => {
    const newItem = {
      id: ++id,
      value: targetValue,
    };
    setTableItems([...tableItems, newItem]);
    setTargetValue("");
  };

  const handleSort = () => {
    console.log(clickCounter);

    if (clickCounter % 2 === 1) {
      const newTableItems = [...tableItems].sort((a, b) => b.id - a.id);
      setTableItems(newTableItems);
    } else {
      const newTableItems = [...tableItems].sort((a, b) => a.id - b.id);
      setTableItems(newTableItems);
    }
    setClickCounter((s) => s + 1);
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

      <Buttons btns={btns} />
      <div className="badge badge-primary total">
        <span className="total-span">Всего строк: {tableItems.length}</span>
      </div>
    </>
  );
}

export default App;
