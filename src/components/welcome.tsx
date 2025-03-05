'use client'

import { Bell, Search} from 'lucide-react';
import {user} from '../utils/data'

export default function Welcome() {

  return (
    <section className='w-full h-full flex items-center justify-between px-5'>
        <div className='w-2/3'>
            <h1 className='text-4xl font-sans '>Hi, {user.name}! Welcome back</h1>
            <p className='text-lg font-sans text-gray-400'>Get a details of your budget for the month</p>
        </div>
        <div className='w-1/3 flex items-center gap-5'>
            <div className='w-4/5 relative'>
              <Search className='absolute top-3 left-3' color='gray' />
              <input type='text' placeholder='Search' className='w-full px-10 py-3 rounded-md bg-gray-100 placeholder:text-lg'/>
            </div>
            <div className='py-3 px-3 bg-gray-100 rounded-md'>
            <Bell/>
            </div>
            
        </div>
    </section>
  )
}


