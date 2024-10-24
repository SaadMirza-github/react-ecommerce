import React from 'react';

const AnalyticsDashboard = () => {
  // Example data (You might want to fetch this data from your backend)
  const totalSales = 150;
  const totalRevenue = 12000;
  const totalOrders = 45;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Analytics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Sales</h3>
          <p className="text-3xl">{totalSales}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Revenue</h3>
          <p className="text-3xl">${totalRevenue}</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Orders</h3>
          <p className="text-3xl">{totalOrders}</p>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Sales Over Time</h3>
        {/* Here you can integrate a chart library like Chart.js or Recharts */}
        <div className="bg-gray-200 h-32 rounded-lg flex justify-center items-center">
          <p className="text-gray-600">[Chart Placeholder]</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
