const App = () => {

const listItem =[]

  const acrecentar = (event) => {
    console.log(event.target.value);
  };
  const adicionar = () => {};

  return (
    <div>
      <input onChange={acrecentar} placeholder="O que tenho para fazer ..." />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {
          listItem.map(task =>(
            <li>{task}</li>
          ))
        }
       
      </ul>
    </div>
  );
};

export default App;
