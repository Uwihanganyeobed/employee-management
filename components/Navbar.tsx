'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/button'
import { LogOut } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='flex text-white items-center justify-between bg-green-600 m-2 p-2 flex-row'>
      <div className='flex items-center justify-evenly'>
        <Image src={'/ems.jpg'} width={50} height={50} alt='Logo' />
      </div>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>about</Link>
      <Link href={'/sign-in'}>Account</Link>
      <Button
      title='Logout'
      classname='text-white bg-red-600 cursor-pointer border-none'
      icon={LogOut}
      onPress={()=>alert('Logged Out')}
      />
    </nav>
  )
}
