import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { Container, Input, TodoList, Button, ListItem } from './styles.js'
import { FcFullTrash, FcCheckmark } from 'react-icons/fc'





const App = () => {
  const [itemList, setItemList] = useState([{ key: uuid(), task: "Nada", finished: true }]);
  const [task, setTask] = useState('');

  const add = (event) => {
    setTask(event.target.value)
  };
  const toAdd = () => {
    setItemList([...itemList, { key: uuid(), task, finished: false }])

  };

  const finishTask = (key) => {
    const newList = itemList.map(itemList =>
      itemList.key === key ? { ...itemList, finished: !itemList.finished } : task
    )

    setItemList(newList)

  }

  return (
    <Container >
      <TodoList>
        <Input onChange={add} placeholder="What do I have to do..." />
        <Button onClick={toAdd}>To Add</Button>

        <ul>
          {itemList.map((task) => (
            <ListItem isFinished={task.finished} key={task.key} >
              <FcCheckmark onClick={() => finishTask(task.key)} />
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
