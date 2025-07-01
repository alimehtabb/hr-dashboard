// src/components/AIRecap.tsx
import React from 'react';

const AIRecap = () => {
  const suggestions = [
    'Focus on lead conversion rate this week',
    'Add 2 new clients',
    'Follow up on 5 pending proposals'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
          <span className="text-indigo-600 text-lg">🤖</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">AI Suggestions</h2>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
            <p className="text-gray-700 text-sm">{suggestion}</p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
        Generate New Suggestions
      </button>
    </div>
  );
};

export default AIRecap;
