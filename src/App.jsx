import { useEffect, useState } from "react";
import  axios from "axios";
import TaskList from "./Components/TaskList.jsx";
import TaskForm from "./Components/TaskForm.jsx";
import Filters from "./Components/Filter.jsx";
import Pagination from "./Components/Pagination.jsx";
import "./styles/main.scss";
import Logo from "./assets/Logo.png";





const App = () => {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const tasksPerPage = 5;

  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20")
    .then(res => setTasks(res.data))
    .catch(error => console.error("Error fetching tasks:", error));
  }, []);

   const addTask = title => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "in-progress") return !task.completed;
    return true;
  });

  const indexOfLast = currentPage * tasksPerPage;
  const indexOfFirst = indexOfLast - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirst, indexOfLast);

  return (
    <div className="app-container">
      
      <img src={Logo} 
      alt="Logo" 
      style={{ height: '80px', width: 'auto', display: 'block', margin: '0 auto',cursor: 'pointer' }}
      />
      
      
      <h1>Employee Onboarding Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <Filters currentFilter={filter} setFilter={setFilter} />
      <TaskList
        tasks={currentTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <Pagination
        totalTasks={filteredTasks.length}
        tasksPerPage={tasksPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
