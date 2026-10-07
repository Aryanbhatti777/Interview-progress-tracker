import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <header className='bg-black text-white'>
                <nav className='flex p-5 justify-between items-center'>
                    <Link className='flex gap-3 align-center justify-center'>
                        <div>
                            <p className='bg-white px-2 py-1 text-center text-black rounded'>IP</p>
                        </div>
                        <div>
                            <p className=' text-sm text-gray-400'>
                                Interview Prepration
                            </p>
                            <p className=' text-sm text-gray-400'>
                                Prepration Tracker
                            </p>
                        </div>
                    </Link>

                    <div className='flex gap-4'>
                        <Link className='p-2 hover:bg-gray-700 rounded' to={"/"}>Dashboard</Link>
                        <Link className='p-2 hover:bg-gray-700 rounded' to={"/questions"}>Questions</Link>
                    </div>

                    <div>
                        <Link to={"/add"} className='bg-gray-600 p-2 rounded hover:bg-gray-700 cursor-pointer'>
                            Add Questions
                        </Link>
                    </div>
                </nav>
            </header>
        </>
  )
}

export default Navbar;