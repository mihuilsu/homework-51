import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';

/**
 * AddTaskForm Component
 * Provides a form interface to add new tasks with title, description, and priority
 * 
 * @param {Function} onAdd - Callback function to add new task
 */
const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [showForm, setShowForm] = useState(false);

  /**
   * Handles form submission
   * Validates input and creates new task object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate title
    if (!title.trim()) {
      toast.error('Task title is required!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    // Create new task object
    onAdd({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setShowForm(false);
    
    // Show success notification
    toast.success('Task added successfully!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Show add button when form is hidden
  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600"
      >
        <FiPlus className="text-xl" />
        <span className="font-medium">Add New Task</span>
      </button>
    );
  }

  // Render form
  return (
    <div className="p-4 bg-white rounded-lg border-2 border-blue-300 shadow-sm">
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        autoFocus
      />
      
      <textarea
        placeholder="Description (optional)..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 resize-none"
        rows="2"
      />
      
      <div className="flex items-center gap-3 mb-3">
        <label className="text-sm font-medium text-gray-700">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Add Task
        </button>
        <button
          onClick={() => setShowForm(false)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;