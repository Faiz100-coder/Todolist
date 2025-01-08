import React, { useState, useEffect } from 'react';
import './TodoList.css';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState('Low');
  const [tasks, setTasks] = useState([]); // Store all tasks
  const [taskId, setTaskId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [tbuId, setTbuId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setTaskId(savedTasks.length ? savedTasks[savedTasks.length - 1].id + 1 : 1);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === '') {
      alert('Please enter a task');
      return;
    }

    const isDuplicate = tasks.some((t) => t.description.toLowerCase() === task.toLowerCase());
    if (isDuplicate) {
      alert('Task already exists!');
      return;
    }

    const newTask = {
      id: taskId,
      description: task,
      category,
      priority,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1);
    setTask('');
    setCategory('Work');
    setPriority('Low');
  };

  const handleUpdate = () => {
    if (tbuId !== null) {
      const updatedTasks = tasks.map((t) =>
        t.id === tbuId ? { ...t, description: task, category, priority } : t
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setTbuId(null);
      setTask('');
    }
  };

  const handleDelete = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const handleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask(taskToEdit.description);
    setCategory(taskToEdit.category);
    setPriority(taskToEdit.priority);
    setTbuId(id);
    setIsEditing(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Calculate progress
  const completedCount = tasks.filter((t) => t.isDone).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  // Filter tasks based on search
  const filteredTasks = tasks.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (


    // navbar edited


    //================================================
    <div className={`text-center mt-4 ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light justify-content-between p-2">
        <span className="navbar-brand mb-0 h1 mx-3">Todo List</span>
        <div className="form-check form-switch me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="progress mt-3 mx-auto" style={{ width: '90%' }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {Math.round(progress)}% Completed
        </div>
      </div>

      {/* Search Box */}
      {/* <div className="mt-3">
        <input      
          className="form-control mx-auto"
          style={{ width: '30%' }}
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}

      {/* Task Input */}
      <div className="d-flex justify-content-center mt-3">
        <div className="form-floating" style={{ width: '9000px' }}>
          <input
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <label>Enter your Task</label>
        </div>
        <select
          className="form-select mx-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Work</option>
          <option>Personal</option>
          <option>Shopping</option>
        </select>
        <select
          className="form-select mx-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button
          className="btn btn-primary"
          onClick={isEditing ? handleUpdate : handleAddTask}
        >
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Tasks */}
      <h2 className="fw-bold mt-4">Tasks</h2>
      <ul className="list-group mx-auto" style={{ width: '80%' }}>
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${t.priority === 'High' ? 'priority-high' : t.priority === 'Medium' ? 'priority-medium' : 'priority-low'
              }`}
          >
            <span
              style={{
                textDecoration: t.isDone ? 'line-through' : 'none',
                color: t.isDone ? 'green' : 'black',
              }}
            >
              {t.description} - <small>({t.category}, {t.priority})</small>
            </span>
            <div>
              <button
                className="btn btn-success mx-1"
                onClick={() => handleComplete(t.id)}
              >
                {t.isDone ? 'Undo' : 'Complete'}
              </button>
              <button
                className="btn btn-warning mx-1"
                onClick={() => handleEdit(t.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger mx-1"
                onClick={() => handleDelete(t.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
