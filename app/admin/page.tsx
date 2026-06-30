'use client';

import { BarChart3, Users, TrendingUp, AlertCircle, Download, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '24,532', change: '+12.5%', icon: Users },
    { label: 'Active Accounts', value: '18,941', change: '+8.2%', icon: BarChart3 },
    { label: 'Total Deposits', value: '$2.4B', change: '+15.3%', icon: TrendingUp },
    { label: 'Transactions', value: '1.2M', change: '+22.1%', icon: AlertCircle },
  ];

  const recentUsers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', joined: '2024-06-30', status: 'Active' },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', joined: '2024-06-29', status: 'Active' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', joined: '2024-06-28', status: 'Verified' },
    { id: 4, name: 'James Wilson', email: 'james@example.com', joined: '2024-06-27', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Platform management and analytics overview</p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mt-4 text-sm">
            💡 <strong>Demo Notice:</strong> This is a fictional admin dashboard with simulated data.
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="card-premium p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                  <Icon className="text-walltrust-primary w-8 h-8" />
                </div>
                <p className="text-green-600 font-semibold text-sm">{stat.change} this month</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Users Table */}
          <div className="lg:col-span-2">
            <div className="card-premium">
              <div className="border-b border-walltrust-border dark:border-walltrust-border-dark p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Recent Users</h2>
                <button className="text-walltrust-primary hover:underline font-semibold">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-walltrust-border dark:bg-walltrust-border-dark">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Joined</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user, i) => (
                      <tr key={i} className="border-t border-walltrust-border dark:border-walltrust-border-dark hover:bg-walltrust-border/30 dark:hover:bg-walltrust-border-dark/30 transition-colors">
                        <td className="px-6 py-4 font-semibold">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                        <td className="px-6 py-4 text-sm">{user.joined}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : user.status === 'Verified' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-walltrust-primary hover:underline text-sm font-semibold">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Admin Tools</h2>
            <div className="space-y-4">
              <button className="w-full card-premium p-6 text-left hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3 mb-2">
                  <Download className="text-walltrust-primary w-5 h-5" />
                  <span className="font-semibold">Export Reports</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Download platform analytics and reports</p>
              </button>

              <button className="w-full card-premium p-6 text-left hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3 mb-2">
                  <Settings className="text-walltrust-primary w-5 h-5" />
                  <span className="font-semibold">System Settings</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Configure platform settings and features</p>
              </button>

              <button className="w-full card-premium p-6 text-left hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3 mb-2">
                  <AlertCircle className="text-walltrust-primary w-5 h-5" />
                  <span className="font-semibold">Security Alerts</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Review security incidents and threats</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
