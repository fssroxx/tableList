import "./App.scss";

import { useEffect, useState } from "react";
import Row from "../row";
import Pagination from "../pagination";
import Filter from "../filter";

let id = 0;

function createPagination(n) {
  let btns = [];
  for (let i = 0; i < n; i++) {
    const newBtn = {
      number: i + 1,
      selected: false,
    };
    btns = [...btns, newBtn];
    console.log(btns);
  }
  return btns;
}

function App() {
  const [tableItems, setTableItems] = useState([]);
  const [targetValue, setTargetValue] = useState("");
  const [targetValue2, setTargetValue2] = useState("");
  const [targetValue3, setTargetValue3] = useState("");
  const [targetValue4, setTargetValue4] = useState("");
  const [clickCounter, setClickCounter] = useState(1);
  const n = Math.ceil(tableItems.length / 5);
  const [btns, setBtns] = useState(createPagination(n));
  const [buttonNum, setButtonNum] = useState(1);
  const [view, setView] = useState([]);

  const handleClick = (a) => {
    setButtonNum(a);
  };

  useEffect(() => {
    setBtns(createPagination(n));
  }, [n]);

  useEffect(() => {
    setView(tableItems);
  }, [tableItems]);

  const addItem = () => {
    const newItem = {
      id: ++id,
      value: targetValue,
      value2: targetValue2,
      value3: targetValue3,
      value4: targetValue4,
    };
    setTableItems([...tableItems, newItem]);
    setTargetValue("");
  };

  const formFilterList = (list) => {
    setView(list);
  };

  const showAll = () => {
    setView(tableItems);
  };

  const handleSort = () => {
    if (clickCounter % 2 === 1) {
      const newTableItems = [...view].sort((a, b) => b.id - a.id);
      setView(newTableItems);
    } else {
      const newTableItems = [...view].sort((a, b) => a.id - b.id);
      setView(newTableItems);
    }
    setClickCounter((s) => s + 1);
  };

  const handleChange = (e) => setTargetValue(e.target.value);
  const handleChange2 = (e) => setTargetValue2(e.target.value);
  const handleChange3 = (e) => setTargetValue3(e.target.value);
  const handleChange4 = (e) => setTargetValue4(e.target.value);

  const disAdd = () => (targetValue === "" ? true : false);

  const viewTableItems = view
    .slice(buttonNum * 5 - 5, buttonNum * 5)
    .map((item, index) => (
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
        <input
          type="text"
          onChange={handleChange2}
          value={targetValue2}
          class="form-control"
          placeholder="что-нибудь напишем..."
          id="inputDefault"
        />
        <input
          type="text"
          onChange={handleChange3}
          value={targetValue3}
          class="form-control"
          placeholder="что-нибудь напишем..."
          id="inputDefault"
        />
        <input
          type="text"
          onChange={handleChange4}
          value={targetValue4}
          class="form-control"
          placeholder="что-нибудь напишем..."
          id="inputDefault"
        />
        <button
          className="btn btn-primary"
          onClick={addItem}
          disabled={disAdd()}
        >
          Добавить
        </button>
      </div>
      <Filter
        tableItems={tableItems}
        formFilterList={formFilterList}
        showAll={showAll}
      />
      <div className="table-container">
        <table className="table">
          <thead>
            <tr onClick={handleSort}>
              <th>#</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>{viewTableItems}</tbody>
        </table>
      </div>

      <div className="btns">
        <Pagination btns={btns} handleClick={handleClick} />
      </div>
      <div className="badge badge-primary total">
        <span className="total-span">Всего строк: {tableItems.length}</span>
      </div>
    </>
  );
}

export default App;
