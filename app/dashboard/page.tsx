// app/dashboard/page.tsx
import Link from 'next/link';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default function Dashboard() {
  const stats = [
    { title: 'Total Employees', value: '156', color: 'text-blue-600' },
    { title: 'Active', value: '142', color: 'text-green-600' },
    { title: 'Departments', value: '8', color: 'text-purple-600' },
    { title: 'New This Month', value: '12', color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to Employee Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="text-center">
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Quick Actions">
          <div className="space-y-3">
            <Link href="/dashboard/employees/add">
              <Button title="Add Employee" classname="w-full bg-blue-600 text-white" />
            </Link>
            <Link href="/dashboard/employees">
              <Button title="View Employees" classname="w-full bg-green-600 text-white" />
            </Link>
          </div>
        </Card>

        <Card title="Recent Activity">
          <div className="space-y-2">
            <p className="text-sm">John Doe joined IT department</p>
            <p className="text-sm">Sarah Smith updated profile</p>
            <p className="text-sm">Mike Johnson promoted to Manager</p>
          </div>
        </Card>
      </div>
    </div>
  );
}