'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const segment = useSelectedLayoutSegment()
  return (
    <div className='w-full h-[10vh] flex bg-purple-600 text-white font-sans font-semibold text-lg items-center justify-between py-5 px-10'>
      <Link href='/' className='w-20 py-2 px-3 rounded-md bg-white text-center text-purple-600'>Home</Link>
      <div className='flex gap-4 text-xl items-center justify-center'>
        <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>Login</Link>
        <Link href='/signup' className={segment == 'signup' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>Signup</Link>
        <Link href='/blog' className={segment == '' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>Blog</Link>
        {/* <Link href='' className=''>Dashboard</Link> */}
        
      </div>
    </div>
  )
}


