// src/pages/Index.tsx
import Sidebar from '../components/Sidebar';
import TopPerformers from '../components/TopPerformers';
import DepartmentProgress from '../components/DepartmentProgress';
import PerformanceChart from '../components/PerformanceChart';
import TaskManager from '../components/TaskManager';
import AIRecap from '../components/AIRecap';
import StatsCard from '../components/StatsCard';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered HR Dashboard</h1>
            <p className="text-gray-600">
              Monitor performance, assign tasks, and boost productivity with AI-based insights.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Employees"
              value="47"
              change="+3 this month"
              changeType="positive"
              icon="👥"
              color="bg-blue-500"
            />
            <StatsCard
              title="Tasks Completed"
              value="156"
              change="+12% this week"
              changeType="positive"
              icon="✅"
              color="bg-green-500"
            />
            <StatsCard
              title="Avg Performance"
              value="87%"
              change="+5% this month"
              changeType="positive"
              icon="📊"
              color="bg-purple-500"
            />
            <StatsCard
              title="Ideas Submitted"
              value="23"
              change="+8 this week"
              changeType="positive"
              icon="💡"
              color="bg-yellow-500"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <PerformanceChart />
              <TaskManager />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <TopPerformers />
              <DepartmentProgress />
              <AIRecap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
