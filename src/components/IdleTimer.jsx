import { FiClock, FiActivity } from 'react-icons/fi';

/**
 * IdleTimer Component
 * Displays idle time counter and idle status banner
 * 
 * @param {number} idleTime - Remaining seconds before idle
 * @param {boolean} isIdle - Whether user is currently idle
 * @param {boolean} darkMode - Dark mode state
 */
const IdleTimer = ({ idleTime, isIdle, darkMode }) => {
  return (
    <>
      {/* Idle time counter */}
      <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <FiClock className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Idle: {idleTime}s
        </span>
      </div>

      {/* Idle status banner */}
      {isIdle && (
        <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg flex items-center gap-3">
          <FiActivity className="text-yellow-600 text-xl" />
          <p className="text-yellow-800 font-medium">
            You're currently idle. Move your mouse to continue!
          </p>
        </div>
      )}
    </>
  );
};

export default IdleTimer;