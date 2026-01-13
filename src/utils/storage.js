/**
 * Storage utility functions for localStorage operations
 */

const STORAGE_KEY = 'tasks';

/**
 * Load tasks from localStorage
 * @returns {Array} Array of task objects
 */
export const loadTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

/**
 * Save tasks to localStorage
 * @param {Array} tasks - Array of task objects to save
 */
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

/**
 * Clear all tasks from localStorage
 */
export const clearTasks = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing tasks from localStorage:', error);
  }
};