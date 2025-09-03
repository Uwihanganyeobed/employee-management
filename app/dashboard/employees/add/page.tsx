// app/dashboard/employees/add/page.tsx
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default function AddEmployeePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role: 'staff' as 'admin' | 'staff',
    department: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple form submission
    console.log('Adding employee:', formData);
    router.push('/dashboard/employees');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button title="" icon="arrow-left" onPress={() => router.push('/dashboard/employees')}
          classname="p-2 text-gray-600 hover:bg-gray-100" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add Employee</h1>
          <p className="text-gray-600">Create a new employee record</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card title="Employee Information">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-4 mt-6">
          <Button title="Cancel" onPress={() => router.push('/dashboard/employees')}
            classname="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50" />
          <Button title="Add Employee" onPress={() => {}}
            classname="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700" />
        </div>
      </form>
    </div>
  );
}