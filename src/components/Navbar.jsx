
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <header className="bg-black text-white border-b border-gray-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 w-fit"
                    >
                        <div>
                            <p className="bg-white px-2.5 py-1.5 text-center text-black rounded-lg font-bold text-sm">
                                IP
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-white leading-tight">
                                Interview Preparation
                            </p>

                            <p className="text-xs text-gray-400 leading-tight mt-1">
                                Preparation Tracker
                            </p>
                        </div>
                    </Link>


                    {/* Navigation */}
                    <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">

                        <Link
                            to="/"
                            className="px-3 py-2 rounded-lg text-sm text-gray-300
                            hover:text-white hover:bg-gray-800
                            transition-colors whitespace-nowrap"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/questions"
                            className="px-3 py-2 rounded-lg text-sm text-gray-300
                            hover:text-white hover:bg-gray-800
                            transition-colors whitespace-nowrap"
                        >
                            Questions
                        </Link>

                    </div>


                    {/* Add Question */}
                    <div className="sm:ml-2">

                        <Link
                            to="/add"
                            className="flex items-center justify-center gap-2
                            bg-white text-black
                            px-4 py-2.5
                            rounded-lg
                            text-sm font-semibold
                            hover:bg-gray-200
                            transition-colors
                            w-full sm:w-auto"
                        >
                            <span className="text-lg leading-none">
                                +
                            </span>

                            Add Question
                        </Link>

                    </div>

                </div>

            </nav>
        </header>
    )
}

export default Navbar
