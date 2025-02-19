'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { Home,  ChartPie, Settings, CircleUserRound, HandCoins, LogOut} from 'lucide-react';


export default function Sidebar() {
    const segment = useSelectedLayoutSegment()
  return (
    <div className='w-full h-full flex flex-col py-5 gap-5 justify-between bg-white'>
    <nav className='w-full h-1/2 flex flex-col gap-5 bg-white'>
      <div className='w-full h-10 flex items-start justify-center'>
          <p className='font-bold text-lg'>Logo</p>
      </div>
      <ul className='w-full h-[80%] bg-white flex flex-col items-center gap-4 '>
        <li>
            <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}><Home size='40px'/></Link>
        </li>
        <li>
            <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}><HandCoins size='40px'/></Link>
        </li>
        <li>
            <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}><Settings size='40px'/></Link>
        </li>
        <li>
            <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}><ChartPie size='40px'/></Link>
        </li>       
      </ul>
    </nav>
    <nav>
      <ul className='w-full flex flex-col gap-4 items-center'>
        <li>
            <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}><CircleUserRound size='40px'/></Link>
        </li>
        <li>
            <Link href='/login' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}><LogOut size='40px'/></Link>
        </li>  
      </ul>
    </nav>
    </div>
  )
}


