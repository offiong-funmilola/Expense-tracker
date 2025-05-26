'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { auth0 } from "@/lib/auth0";


export default async function Navbar() {
    const segment = useSelectedLayoutSegment()
    const session = await auth0.getSession()

    
  return (
    <div className='w-full h-[10vh] flex bg-purple-600 text-white font-sans font-semibold text-lg items-center justify-between py-5 px-10'>
      <Link href='/' className='w-20 py-2 px-3 rounded-md bg-white text-center text-purple-600'>Home</Link>
      <div className='flex gap-4 text-xl items-center justify-center'>
        {/* <Link href='/signup' className={segment == 'signup' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>Signup</Link> */}
        <Link href='/about' className={segment == 'login' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>About</Link>
        <Link href='/blog' className={segment == '' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>Blog</Link>
        <Link href='/dashboard' className=''>Dashboard</Link>
        {!session ? 
          <div className='flex gap-3'>
           <a href="/auth/login?screen_hint=signup" className={segment == 'signup' ? "bg-white border rounded-md text-purple-600 py-2 px-3 font-semibold font-sans" : ""}>
                <button>Sign up</button>
              </a>
              <a href="/auth/login">
                <button>Log in</button>
              </a>
          </div>  
                :
                <a href="/auth/logout">
                 <button>Log out</button>
              </a>
        }
      </div>
    </div>
  )
}


