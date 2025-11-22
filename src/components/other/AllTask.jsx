


import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    if (!userData || userData.length === 0) {
        return (
            <div className="text-center text-gray-400 p-10">
                Loading employee data...
            </div>
        )
    }

    return (
        <div className="bg-[#121212] p-6 rounded-xl mt-6 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                All Employee Tasks
            </h2>

            <div className="bg-[#1f1f1f] rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-4 flex justify-between text-white font-semibold sticky top-0">
                    <h2 className="w-1/5 text-left">Employee Name</h2>
                    <h3 className="w-1/5 text-center">New Task</h3>
                    <h5 className="w-1/5 text-center">Active</h5>
                    <h5 className="w-1/5 text-center">Completed</h5>
                    <h5 className="w-1/5 text-center">Failed</h5>
                </div>

                <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                    {userData.employees.map((elem, index) => (
                        <div
                            key={index}
                            className={`flex justify-between py-3 px-4 text-gray-200 transition-all duration-200 ${index % 2 === 0 ? 'bg-[#2b2b2b]' : 'bg-[#232323]'
                                } hover:bg-[#383838] hover:scale-[1.01]`}
                        >
                            <h2 className="w-1/5 font-medium text-left">{elem.name}</h2>
                            <h3 className="w-1/5 text-blue-400 text-center">{elem.taskCount.newTask}</h3>
                            <h5 className="w-1/5 text-yellow-400 text-center">{elem.taskCount.active}</h5>
                            <h5 className="w-1/5 text-green-400 text-center">{elem.taskCount.completed}</h5>
                            <h5 className="w-1/5 text-red-400 text-center">{elem.taskCount.failed}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllTask
