// components/Navbar.tsx
'use client'


import React from 'react';
import Link from 'next/link';
import Button from './ui/button';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router= useRouter();
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            EMS
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <Button title="Home" onPress={() => {}} icon="home"
                classname="text-gray-700 hover:text-blue-600 hover:bg-blue-50" />
            </Link>
            <Link href="/dashboard/employees">
              <Button title="Employees" onPress={() => {}} icon="users"
                classname="text-gray-700 hover:text-blue-600 hover:bg-blue-50" />
            </Link>
            <Link href="/dashboard">
              <Button title="Dashboard" onPress={() => {}} icon="settings"
                classname="text-gray-700 hover:text-blue-600 hover:bg-blue-50" />
            </Link>
          </div>

          <Button title="Login" onPress={()=>router.push('/sign-in')} 
            classname="bg-blue-600 text-white hover:bg-blue-700" />
        </div>
      </div>
    </nav>
  );
}