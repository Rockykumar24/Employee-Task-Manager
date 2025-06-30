
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (

    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>

      <div className="action-buttons">
        <button 
          className="toggle-btn"
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Completed' : 'In Progress'}
        </button>

        <button 
          className="toggle-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>

  );
};

export default TaskItem;





