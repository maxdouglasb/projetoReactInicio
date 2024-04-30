import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import {Container,TodoList} from './styles.js'





const App = () => {
  const [itemList, setItemList] = useState([{ key: uuid(), task: "Nada" }]);
  const [task, setTask] = useState('');

  const add = (event) => {
    setTask(event.target.value)
  };
  const toAdd = () => {
    setItemList([...itemList, { id: uuid(), task }])
    console.log(itemList)
  };

  return (
    <Container >
      <TodoList>
      <input onChange={add} placeholder="What do I have to do..." />
      <button onClick={toAdd}>To Add</button>

      <ul>
        {itemList.map((task) => (
          <li key={task.key}>{task.task}</li>
        ))}
      </ul>
      </TodoList>
    </Container>
  );
};

export default App;
