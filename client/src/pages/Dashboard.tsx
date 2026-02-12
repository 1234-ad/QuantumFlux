import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [layout, setLayout] = useState([
    { i: 'a', x: 0, y: 0, w: 6, h: 4 },
    { i: 'b', x: 6, y: 0, w: 6, h: 4 },
    { i: 'c', x: 0, y: 4, w: 12, h: 4 },
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your data today.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">2,543</p>
            </div>
            <div className="rounded-full bg-primary-100 p-3">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">↑ 12%</span>
            <span className="ml-2 text-sm text-gray-600">from last month</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Streams</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
            </div>
            <div className="rounded-full bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">↑ 8%</span>
            <span className="ml-2 text-sm text-gray-600">from last week</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Data Points</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">1.2M</p>
            </div>
            <div className="rounded-full bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">↑ 24%</span>
            <span className="ml-2 text-sm text-gray-600">from yesterday</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Dashboards</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">8</p>
            </div>
            <div className="rounded-full bg-purple-100 p-3">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-green-600">↑ 2</span>
            <span className="ml-2 text-sm text-gray-600">new this week</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-4 text-xl font-semibold">Your Dashboards</h2>
        <p className="text-gray-600">
          Drag and drop widgets to customize your dashboard layout.
        </p>
        <div className="mt-6">
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            onLayoutChange={setLayout}
          >
            <div key="a" className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <h3 className="text-lg font-semibold">Real-time Analytics</h3>
              <p className="mt-2 text-sm opacity-90">Live data streaming</p>
            </div>
            <div key="b" className="card bg-gradient-to-br from-green-500 to-green-700 text-white">
              <h3 className="text-lg font-semibold">Performance Metrics</h3>
              <p className="mt-2 text-sm opacity-90">System health</p>
            </div>
            <div key="c" className="card bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <h3 className="text-lg font-semibold">Data Visualization</h3>
              <p className="mt-2 text-sm opacity-90">Interactive charts</p>
            </div>
          </GridLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;