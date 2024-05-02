import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import {
  Container,
  Input,
  TodoList,
  Button,
  ListItem,
  Trash,
  Checkmark,
} from "./styles.js";

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [task, setTask] = useState("");

  const add = (event) => {
    setTask(event.target.value);
  };

  const toAdd = () => {
    if (task) {
      setItemList([...itemList, { key: uuid(), task, finished: false }]);
    }
  };

  const finishTask = (key) => {
    const newList = itemList.map((item) =>
      item.key == key ? { ...item, finished: !item.finished } : item
    );

    setItemList(newList);
  };

  const del = (key) => {
    const newList = itemList.filter((itemList) => itemList.key !== key);
    setItemList(newList);
  };

  return (
    <Container>
      <TodoList>
        <Input onChange={add} placeholder="What do I have to do..." />
        <Button onClick={toAdd}>To Add</Button>

        <ul>
          {itemList.length > 0 ? (
            itemList.map((task) => (
              <ListItem isfinished={task.finished} key={task.key}>
                <Checkmark onClick={() => finishTask(task.key)} />
                <li>{task.task}</li>
                <Trash onClick={() => del(task.key)} />
              </ListItem>
            ))
          ) : (
            <h3> No to list items</h3>
          )}
        </ul>
      </TodoList>
    </Container>
  );
};

export default App;
