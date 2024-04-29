const App = () => {

const itemList =[]

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
            <li>{task}</li>
          ))
        }
       
      </ul>
    </div>
  );
};

export default App;
