import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full h-14 flex bg-purple-600 text-white font-sans font-semibold text-lg items-center justify-between p-5'>
      <Link href='/' className='w-20 h-8 rounded-md bg-white text-center text-purple-600'>Home</Link>
      <div className='flex  gap-3'>
        <Link href='' className=''>Blog</Link>
        <Link href='' className=''>Dashboard</Link>
      </div>
    </div>
  )
}


