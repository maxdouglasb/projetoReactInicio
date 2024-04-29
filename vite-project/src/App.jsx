import{v4 as uuid}from 'uuid'
const App = () => {

const itemList =[{key:uuid() , task:add()}]

  const add = (event) => {
    console.log(event.target.value);
  };
  const toAdd = () => {};

  return (
    <div>
      <input onChange={add} placeholder="What do I have to do..." />
      <button onClick={toAdd}>To Add</button>

      <ul>
        {
          itemList.map(task =>(
            <li key={task.key}>{task.task}</li>
          ))
        }
       
      </ul>
    </div>
  );
};

export default App;
