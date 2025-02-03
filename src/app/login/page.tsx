import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="h-[80vh] flex items-center justify-center">
        <div className="w-1/3 h-3/4 border border-purple-600 rounded-md flex flex-col items-center justify-center p-5 gap-2">
            <h1 className="font-bold text-4xl font-sans text-purple-600">Log In</h1>
            <form className="w-3/4 h-3/4 flex flex-col gap-3 ">
                <div className="flex flex-col gap-1 text-lg font-sans">
                    <label htmlFor="email">Email</label>
                    <input id='email' type='email' className="w-full py-3 px-5 border border-gray-500"></input>
                </div>
                <div className="flex flex-col gap-1 text-lg font-sans">
                    <label htmlFor="password">Password</label>
                    <input id='password' type='password' className="w-full py-3 px-5 border border-gray-500"></input>
                </div>
                <div className="w-full">
                    <button className="bg-purple-600 w-full text-white text-center text-xl py-3 p">Log In</button>
                </div>
                
            </form> 
            <div className='w-full flex items-center justify-center gap-2'>
                <p>Don't have an Account?</p>
                <Link href='/signup' className='text-purple-600 text-xl font-sans font-semibold'>Sign Up</Link>
            </div>
        </div>
        
    </div>
    );
  }