import {useState} from "react";

function App() {

  const [tasks, setTasks] = useState([]) 

  const [newTasks, setNewTask] = useState('')

  const addTask = () => {
    if(newTasks.trim() !=="") {
      setTasks([...tasks, newTasks])
      setNewTask('')
    }
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input type="text" 
      value={newTasks} 
      onChange={(e) => setNewTask(e.target.value)} placeholder="Adicione uma nova tarefa" />

      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
