"use Client"
import Link from 'next/link'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/fontawesome-svg-core";



export default function SignupPage() {
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center gap-3">
            <div className="w-1/3 h-3/4 border border-purple-600 rounded-md flex flex-col items-center p-5 gap-2">
                <h1 className="font-bold text-4xl font-sans text-purple-600">Sign Up</h1>
                <p className="text-lg font-sans">Sign up to continue</p>
                <form className="w-3/4 h-3/4 flex flex-col gap-3 ">
                    <div className="flex flex-col gap-1 text-lg font-sans">
                        <label htmlFor="name">Name</label>
                        <input id='name' type='text' className="w-full py-3 px-5 border border-gray-500"></input>
                    </div>
                    <div className="flex flex-col gap-1 text-lg font-sans">
                        <label htmlFor="email">Email</label>
                        <input id='email' type='email' className="w-full py-3 px-5 border border-gray-500"></input>
                    </div>
                    <div className="flex flex-col gap-1 text-lg font-sans">
                        <label htmlFor="password">Password</label>
                        <input id='password' type='password' className="w-full py-3 px-5 border border-gray-500"></input>
                    </div>
                    <div className="w-full">
                        <button className="bg-purple-600 w-full text-white text-center text-xl py-3 p">Sign Up</button>
                    </div>
                    {/* <div>
                        <hr/>
                        Or
                        <hr/>
                    </div>
                    <div>
                        <div><FontAwesomeIcon icon={faGoogle} /></div>
                    </div> */}
                </form>
                
            </div>
            <div className='w-full flex items-center justify-center gap-2'>
                <p>Already have an Account?</p>
                <Link href='/login' className='text-purple-600 text-xl font-sans font-semibold'>Log In</Link>
            </div>
        </div>
    );
  }