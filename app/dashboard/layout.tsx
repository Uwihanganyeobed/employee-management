// app/dashboard/layout.tsx
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
        </div>
        
        <nav className="px-4 space-y-2">
          <Link href="/dashboard">
            <Button title="Overview" icon="dashboard"
              classname="w-full justify-start text-gray-700 hover:bg-blue-50 hover:text-blue-600" />
          </Link>
          <Link href="/dashboard/employees">
            <Button title="Employees" icon="users"
              classname="w-full justify-start text-gray-700 hover:bg-blue-50 hover:text-blue-600" />
          </Link>
          <Button title="Reports" icon="reports"
            classname="w-full justify-start text-gray-700 hover:bg-blue-50 hover:text-blue-600" />
          <Button title="Settings" icon="settings"
            classname="w-full justify-start text-gray-700 hover:bg-blue-50 hover:text-blue-600" />
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}