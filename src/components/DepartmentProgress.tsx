const DepartmentProgress = () => {
  const departments = [
    { name: 'Sales', progress: 95, color: 'bg-green-500' },
    { name: 'Marketing', progress: 87, color: 'bg-purple-500' },
    { name: 'HR', progress: 90, color: 'bg-red-500' },
    { name: 'Finance', progress: 40, color: 'bg-yellow-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 text-lg">📊</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Department Progress</h2>
      </div>

      <div className="space-y-4">
        {departments.map((dept) => (
          <div key={dept.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{dept.name}</span>
              <span className="text-sm font-semibold text-gray-600">{dept.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${dept.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${dept.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentProgress;
