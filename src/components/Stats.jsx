/**
 * Stats Component
 * Displays task statistics including total, completed, pending, and completion rate
 * 
 * @param {Array} tasks - Array of task objects
 */
const Stats = ({ tasks }) => {
  // Calculate statistics
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {/* Total tasks card */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white">
        <div className="text-3xl font-bold">{total}</div>
        <div className="text-sm opacity-90">Total Tasks</div>
      </div>
      
      {/* Completed tasks card */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white">
        <div className="text-3xl font-bold">{completed}</div>
        <div className="text-sm opacity-90">Completed</div>
      </div>
      
      {/* Pending tasks card */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl text-white">
        <div className="text-3xl font-bold">{pending}</div>
        <div className="text-sm opacity-90">Pending</div>
      </div>
      
      {/* Completion rate card */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-white">
        <div className="text-3xl font-bold">{completionRate}%</div>
        <div className="text-sm opacity-90">Completion</div>
      </div>
    </div>
  );
};

export default Stats;