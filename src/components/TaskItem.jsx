import { FiTrash2, FiCheck } from 'react-icons/fi';

/**
 * TaskItem Component
 * Displays individual task with checkbox, priority badge, and delete button
 * 
 * @param {Object} task - Task object containing id, title, description, priority, completed
 * @param {Function} onDelete - Callback function to delete task
 * @param {Function} onToggle - Callback function to toggle task completion
 */
const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div 
      className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
        task.completed 
          ? 'bg-green-50 border-green-200' 
          : 'bg-white border-gray-200 hover:border-blue-300'
      }`}
    >
      {/* Checkbox button */}
      <button
        onClick={() => onToggle(task.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          task.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-blue-500'
        }`}
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.completed && <FiCheck className="text-white text-sm" />}
      </button>
      
      {/* Task content */}
      <div className="flex-1">
        <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </p>
        {task.description && (
          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
        )}
      </div>

      {/* Priority badge and delete button */}
      <div className="flex items-center gap-2">
        <span 
          className={`text-xs px-2 py-1 rounded-full ${
            task.priority === 'high' 
              ? 'bg-red-100 text-red-700'
              : task.priority === 'medium'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-blue-100 text-blue-700'
          }`}
        >
          {task.priority}
        </span>
        
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete task"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;