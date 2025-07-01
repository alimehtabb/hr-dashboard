const TopPerformers = () => {
  const performers = [
    {
      name: 'Fatima Khan',
      initials: 'FK',
      points: 250,
      department: 'Sales',
      color: 'bg-green-500'
    },
    {
      name: 'Mehtab Ali',
      initials: 'MA',
      points: 180,
      department: 'HR',
      color: 'bg-red-500'
    },
    {
      name: 'Ahmed Rahman',
      initials: 'AR',
      points: 150,
      department: 'IT',
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
          <span className="text-yellow-600 text-lg">🏆</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Top Performers of the Month</h2>
      </div>

      <div className="space-y-4">
        {performers.map((performer) => (
          <div key={performer.name} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`w-12 h-12 ${performer.color} rounded-full flex items-center justify-center text-white font-semibold`}>
              {performer.initials}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{performer.name}</h3>
              <p className="text-sm text-gray-500">{performer.department}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-lg text-gray-900">{performer.points}</p>
              <p className="text-sm text-gray-500">points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;
