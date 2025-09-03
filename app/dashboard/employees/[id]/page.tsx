// app/dashboard/employees/[id]/page.tsx
import Link from 'next/link';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default function EmployeeDetail({ params }: { params: { id: string } }) {
  // Mock employee data based on Employee interface
  const employee = {
    _id: params.id,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@company.com',
    role: 'admin' as const,
    department: 'IT',
    created_at: '2023-01-15T10:00:00Z',
    updated_at: '2023-12-01T15:30:00Z'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/employees">
          <Button title="" icon="arrow-left" classname="p-2 text-gray-600 hover:bg-gray-100" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee Details</h1>
          <p className="text-gray-600">View employee information</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Personal Information">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <p className="mt-1 text-gray-900">{employee.first_name} {employee.last_name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900">{employee.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <span className="mt-1 inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {employee.role}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <p className="mt-1 text-gray-900">{employee.department}</p>
            </div>
          </div>
        </Card>

        <Card title="System Information">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Employee ID</label>
              <p className="mt-1 text-gray-900">{employee._id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Created</label>
              <p className="mt-1 text-gray-900">{new Date(employee.created_at).toLocaleDateString()}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Updated</label>
              <p className="mt-1 text-gray-900">{new Date(employee.updated_at).toLocaleDateString()}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Link href={`/dashboard/employees/${params.id}/edit`}>
          <Button title="Edit Employee" icon="edit" classname="bg-blue-600 text-white hover:bg-blue-700" />
        </Link>
        <Button title="Delete Employee" classname="bg-red-600 text-white hover:bg-red-700" />
      </div>
    </div>
  );
}