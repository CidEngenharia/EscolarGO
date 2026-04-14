/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { AdminDashboard } from './views/AdminDashboard';
import { DriverDashboard } from './views/DriverDashboard';
import { ParentDashboard } from './views/ParentDashboard';
import { LandingPage } from './views/LandingPage';

function DashboardContent() {
  const { role } = useAppContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderDashboard = () => {
    switch (role) {
      case 'ADMIN':
        return <AdminDashboard />;
      case 'DRIVER':
        return <DriverDashboard />;
      case 'PARENT':
        return <ParentDashboard />;
      default:
        return <AdminDashboard />;
    }
  };

  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <DashboardContent />
    </AppProvider>
  );
}


