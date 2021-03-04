import "./App.css";
import { useState } from "react";
import Row from "../row";

function App() {
  const [tableItems, setTableItems] = useState([]);
  const [targetValue, setTargetValue] = useState([]);

  const addItem = (text) => {
  
    setTableItems([...tableItems, text]);
  };
  console.log(tableItems)
  const view = tableItems.map((item) => (
    <tr>
      <Row tableItems={tableItems} />
    </tr>
  ));
  
  
  return (
    <>
      <input
        onChange={(e) => {
          setTargetValue(e.target.value);
          console.log(tableItems);
        }}
        value={targetValue}
      />
      <button onClick={() => {addItem(targetValue);
      setTargetValue('')}}
      >add</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Значение Поля</th>
          </tr>
        </thead>
        <tbody>
          {view}
        </tbody>
      </table>
      
      <div className="total">Всего строк: {tableItems.length}</div>
    </>
  );
}

export default App;
