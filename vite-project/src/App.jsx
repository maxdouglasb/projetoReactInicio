import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { Container, Input, TodoList, Button,ListItem } from './styles.js'
import { FcFullTrash, FcCheckmark } from 'react-icons/fc'





const App = () => {
  const [itemList, setItemList] = useState([{ key: uuid(), task: "Nada" ,finished:true }]);
  const [task, setTask] = useState('');

  const add = (event) => {
    setTask(event.target.value)
  };
  const toAdd = () => {
    setItemList([...itemList, { id: uuid(), task, finished:false }])
    console.log(itemList)
  };

  return (
    <Container >
      <TodoList>
        <Input onChange={add} placeholder="What do I have to do..." />
        <Button onClick={toAdd}>To Add</Button>

        <ul>
          {itemList.map((task) => (
            <ListItem key={task.key} isFinished={task.finished}>
              <FcCheckmark />
              <li >{task.task}</li>
              <FcFullTrash />
            </ListItem>
          ))}
        </ul>
      </TodoList>
    </Container>
  );
};

export default App;
