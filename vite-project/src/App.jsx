import { v4 as uuid } from "uuid";
import React, { useState } from "react";




const App = () => {
  const [itemList, setItemList] = useState([{ key: uuid(), task: "nada" }]);
  const [task, setTask] = useState('');

  const add = (event) => {
    setTask(event.target.value)
  };
  const toAdd = () => {
    setItemList([... itemList ,{ id: uuid(), task }])
    console.log(itemList)
  };

  return (
    <div>
      <input onChange={add} placeholder="What do I have to do..." />
      <button onClick={toAdd}>To Add</button>

      <ul>
        {itemList.map((task) => (
          <li key={task.key}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
