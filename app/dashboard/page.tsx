'use client';

import { CreditCard, Send, Plus, Eye, EyeOff, Download } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    { name: 'Checking Account', balance: 12450.50, type: 'Checking', accountNumber: '****4242' },
    { name: 'Savings Account', balance: 45320.00, type: 'Savings', accountNumber: '****8456' },
    { name: 'Investment Account', balance: 87650.25, type: 'Investment', accountNumber: '****2919' },
  ];

  const transactions = [
    { id: 1, merchant: 'Starbucks Coffee', amount: -12.50, date: '2024-06-30', type: 'expense' },
    { id: 2, merchant: 'Salary Deposit', amount: 5000.00, date: '2024-06-28', type: 'income' },
    { id: 3, merchant: 'Netflix Subscription', amount: -15.99, date: '2024-06-25', type: 'expense' },
    { id: 4, merchant: 'Transfer from Savings', amount: 1000.00, date: '2024-06-24', type: 'transfer' },
    { id: 5, merchant: 'Whole Foods Market', amount: -87.45, date: '2024-06-23', type: 'expense' },
  ];

  const cards = [
    { name: 'Premium Credit Card', last4: '4242', balance: 2345.00, limit: 10000 },
    { name: 'Business Debit Card', last4: '8456', balance: 0, limit: 0 },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back! Here&apos;s your financial overview.</p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mt-4 text-sm">
            💡 <strong>Demo Notice:</strong> All data shown is fictional for demonstration purposes only.
          </div>
        </div>

        {/* Total Balance Card */}
        <div className="card-premium p-8 mb-8 bg-gradient-to-br from-walltrust-primary/10 to-walltrust-secondary/10 border-2 border-walltrust-primary/30">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Total Balance</p>
              <div className="flex items-center space-x-2">
                <h2 className="text-4xl font-bold">
                  {showBalance ? '$145,420.75' : '••••••'}
                </h2>
                <button onClick={() => setShowBalance(!showBalance)} className="p-2 hover:bg-walltrust-border dark:hover:bg-walltrust-border-dark rounded-lg transition-colors">
                  {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">+12.5%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">vs last month</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 btn-primary flex items-center justify-center">
              <Send className="mr-2" size={20} /> Transfer
            </button>
            <button className="flex-1 btn-secondary flex items-center justify-center">
              <Plus className="mr-2" size={20} /> Add Card
            </button>
            <button className="flex-1 btn-secondary flex items-center justify-center">
              <Download className="mr-2" size={20} /> Statement
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accounts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Your Accounts</h3>
            <div className="space-y-4">
              {accounts.map((account, i) => (
                <div key={i} className="card-premium p-6 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{account.type}</p>
                      <h4 className="text-lg font-bold">{account.name}</h4>
                    </div>
                    <CreditCard className="text-walltrust-primary" size={24} />
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{account.accountNumber}</p>
                      <p className="text-2xl font-bold">
                        {showBalance ? `$${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
                      </p>
                    </div>
                    <button className="text-walltrust-primary hover:text-walltrust-primary-dark font-semibold">
                      Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Your Cards</h3>
            <div className="space-y-4">
              {cards.map((card, i) => (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-walltrust-primary to-walltrust-primary-dark text-white p-6 h-32">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-white/80 text-sm">{card.name}</p>
                    </div>
                    <span className="text-white/60">💳</span>
                  </div>
                  <p className="font-mono text-lg mb-4">•••• •••• •••• {card.last4}</p>
                  <div className="flex justify-between items-center text-sm text-white/80">
                    <span>Balance: ${card.balance.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Recent Transactions</h3>
            <button className="text-walltrust-primary hover:underline font-semibold">See All</button>
          </div>

          <div className="card-premium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-walltrust-border dark:bg-walltrust-border-dark">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Merchant</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => (
                    <tr key={i} className="border-t border-walltrust-border dark:border-walltrust-border-dark hover:bg-walltrust-border/30 dark:hover:bg-walltrust-border-dark/30 transition-colors">
                      <td className="px-6 py-4">{tx.merchant}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{tx.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tx.type === 'income' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : tx.type === 'expense' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'}`}>
                          {tx.type}
                        </span>
                      </td>
                      <td className={`px-6 py-4 text-right font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-900 dark:text-gray-100'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
