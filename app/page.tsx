// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Users, UserPlus, BarChart3 } from 'lucide-react';
import Button from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Employee Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your workforce management with our comprehensive platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Manage Employees</h3>
          <p className="text-gray-600 mb-4">View and manage all employee records</p>
          <Link href="/dashboard/employees">
            <Button title="View Employees" 
              classname="bg-blue-600 text-white hover:bg-blue-700" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <UserPlus className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Add Employee</h3>
          <p className="text-gray-600 mb-4">Register new team members</p>
          <Button title="Add New" 
            classname="bg-green-600 text-white hover:bg-green-700" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <BarChart3 className="mx-auto mb-4 text-purple-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
          <p className="text-gray-600 mb-4">View analytics and reports</p>
          <Link href="/dashboard">
            <Button title="Open Dashboard" 
              classname="bg-purple-600 text-white hover:bg-purple-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}