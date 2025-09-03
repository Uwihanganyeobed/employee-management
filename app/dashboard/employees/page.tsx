// app/dashboard/employees/page.tsx
import Link from 'next/link';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default function EmployeesPage() {
  // Mock data based on Employee interface
  const employees = [
    { _id: '1', first_name: 'John', last_name: 'Doe', email: 'john@company.com', role: 'admin', department: 'IT' },
    { _id: '2', first_name: 'Jane', last_name: 'Smith', email: 'jane@company.com', role: 'staff', department: 'HR' },
    { _id: '3', first_name: 'Mike', last_name: 'Johnson', email: 'mike@company.com', role: 'staff', department: 'Finance' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600">Manage your team members</p>
        </div>
        <Link href="/dashboard/employees/add">
          <Button title="Add Employee" icon="plus" classname="bg-blue-600 text-white" />
        </Link>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left">
                <th className="pb-3 font-semibold">Name</th>
                <th className="pb-3 font-semibold">Email</th>
                <th className="pb-3 font-semibold">Role</th>
                <th className="pb-3 font-semibold">Department</th>
                <th className="pb-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id} className="border-b">
                  <td className="py-4 font-medium">{emp.first_name} {emp.last_name}</td>
                  <td className="py-4 text-gray-600">{emp.email}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      emp.role === 'admin' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {emp.role}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600">{emp.department}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Link href={`/dashboard/employees/${emp._id}`}>
                        <Button title="" icon="eye" classname="p-2 text-blue-600 hover:bg-blue-50" />
                      </Link>
                      <Link href={`/dashboard/employees/${emp._id}/edit`}>
                        <Button title="" icon="edit" classname="p-2 text-green-600 hover:bg-green-50" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}