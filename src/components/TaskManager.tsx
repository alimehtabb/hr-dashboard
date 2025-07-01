import { useState } from "react";
import { Check } from "lucide-react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      employee: "Mehtab Ali",
      department: "HR/Admin",
      task: "Prepare July HR report",
      deadline: "2025-07-05",
      completed: false,
      points: 15,
    },
    {
      id: 2,
      employee: "Kamrul Islam",
      department: "Accounts",
      task: "Reconcile bank payments",
      deadline: "2025-07-03",
      completed: true,
      points: 20,
    },
    {
      id: 3,
      employee: "Nayem Hosen",
      department: "IT",
      task: "Design Eid flyer",
      deadline: "2025-06-30",
      completed: false,
      points: 10,
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getDepartmentColor = (department: string) => {
    if (department.includes("HR")) return "bg-red-100 text-red-800";
    if (department.includes("IT")) return "bg-blue-100 text-blue-800";
    if (department.includes("Accounts")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <span className="text-purple-600 text-lg">📋</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Daily Tasks</h2>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                task.completed
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-300 hover:border-green-500"
              }`}
            >
              {task.completed && <Check size={16} />}
            </button>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">
                  {task.employee}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(
                    task.department
                  )}`}
                >
                  {task.department}
                </span>
              </div>
              <p
                className={`text-sm ${
                  task.completed ? "text-gray-500 line-through" : "text-gray-700"
                }`}
              >
                {task.task}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Due: {task.deadline}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-lg text-gray-900">
                {task.points}
              </p>
              <p className="text-xs text-gray-500">points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
