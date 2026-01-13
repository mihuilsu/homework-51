import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useIdleTimer } from 'react-idle-timer';
import { FiSun, FiMoon, FiCheck, FiAlertCircle } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

// Import components
import TaskItem from './components/TaskItem';
import AddTaskForm from './components/AddTaskForm';
import Stats from './components/Stats';
import IdleTimer from './components/IdleTimer';

// Import utilities
import { loadTasks, saveTasks } from './utils/storage';

/**
 * Main App Component
 * Manages task list, dark mode, and idle detection
 */
const App = () => {
  // Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => loadTasks());
  const [darkMode, setDarkMode] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [idleTime, setIdleTime] = useState(0);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  /**
   * Callback when user becomes idle
   */
  const onIdle = () => {
    setIsIdle(true);
    toast.warning('You have been idle for 30 seconds!', {
      position: 'bottom-right',
      autoClose: 5000,
      icon: <FiAlertCircle className="text-yellow-500" />,
    });
  };

  /**
   * Callback when user becomes active again
   */
  const onActive = () => {
    if (isIdle) {
      setIsIdle(false);
      toast.info('Welcome back! Keep being productive!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  // Configure idle timer
  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    timeout: 30000, // 30 seconds
    throttle: 500,
  });

  // Update idle time display every second
  useEffect(() => {
    const interval = setInterval(() => {
      setIdleTime(Math.floor(getRemainingTime() / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [getRemainingTime]);

  /**
   * Add new task to the list
   */
  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  /**
   * Delete task by id
   */
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.info('Task deleted', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  /**
   * Toggle task completion status
   */
  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const updated = { ...task, completed: !task.completed };
        
        if (updated.completed) {
          toast.success('Task completed! Great job!', {
            position: 'top-right',
            autoClose: 2000,
          });
        }
        
        return updated;
      }
      return task;
    }));
  };

  return (
    <div className={`min-h-screen transition-colors ${
      darkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-4xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Task Manager
            </h1>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Stay productive and organized
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Idle Timer Display */}
            <IdleTimer 
              idleTime={idleTime} 
              isIdle={isIdle} 
              darkMode={darkMode} 
            />
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow-sm`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Statistics */}
        <Stats tasks={tasks} />

        {/* Add Task Form */}
        <div className="mb-6">
          <AddTaskForm onAdd={addTask} />
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className={`text-center py-12 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <FiCheck className="text-6xl mx-auto mb-4 opacity-20" />
              <p className="text-xl font-medium">No tasks yet</p>
              <p className="text-sm mt-2">Add your first task to get started!</p>
            </div>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            ))
          )}
        </div>
      </div>

      {/* Toast Notifications Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? 'dark' : 'light'}
      />
    </div>
  );
};

export default App;