import React from 'react';

const MainContent = ({ activeMenu }) => {
  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Total Orders</h2>
                <p className="text-3xl font-bold mt-2">150</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Revenue</h2>
                <p className="text-3xl font-bold mt-2">$2,500</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Active Tables</h2>
                <p className="text-3xl font-bold mt-2">8</p>
              </div>
            </div>
          </div>
        );
      case 'kanban':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">To Do</h2>
                {/* Add Kanban items here */}
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">In Progress</h2>
                {/* Add Kanban items here */}
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Done</h2>
                {/* Add Kanban items here */}
              </div>
            </div>
          </div>
        );
      case 'inbox':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Inbox</h1>
            <div className="bg-white rounded-lg shadow">
              <div className="border-b p-4">
                <h2 className="font-semibold">New Order Notification</h2>
                <p className="text-gray-600">Table 5 has placed a new order</p>
              </div>
              <div className="border-b p-4">
                <h2 className="font-semibold">Payment Received</h2>
                <p className="text-gray-600">Payment received for Order #123</p>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="bg-white rounded-lg shadow">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Role</th>
                    <th className="text-left p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">John Doe</td>
                    <td className="p-4">Admin</td>
                    <td className="p-4">Active</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">Staff</td>
                    <td className="p-4">Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'products':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold">Burger</h2>
                <p className="text-gray-600">$10.99</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold">Pizza</h2>
                <p className="text-gray-600">$12.99</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold">Salad</h2>
                <p className="text-gray-600">$8.99</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Select a menu item</h1>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-white">
      {renderContent()}
    </div>
  );
};

export default MainContent;
