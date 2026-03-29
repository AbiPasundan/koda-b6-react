import { FiFilter } from "react-icons/fi"; 
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import { BiMap } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillFileImage } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import React, { useState } from 'react'
import { BsKey } from 'react-icons/bs';
import { GoMail } from "react-icons/go";

function TableHeader() {
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);
    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-6">User List</h1>

                <div className="flex justify-between items-end">
                    <button onClick={() => setIsAddUserOpen(true)} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors" >
                        <AiOutlinePlus size={18} />
                        Add User
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-500 mb-1">Search User</label>
                            <div className="relative">
                                <input type="text" placeholder="Enter User Name" className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-orange-500" />
                                <CiSearch size={18} className="absolute right-3 top-2.5 text-gray-400" />
                            </div>
                        </div>

                        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 mt-5 rounded-md font-medium transition-colors">
                            <FiFilter size={18} />
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            {isAddUserOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity"
                    onClick={() => setIsAddUserOpen(false)} >

                </div>
            )}

            <div className={`fixed top-0 right-0 h-full w-112.5 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isAddUserOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

                <div className="flex justify-between items-center p-6 border-b border-gray-100 mt-20">
                    <h2 className="text-xl font-bold">Insert User</h2>
                    <button onClick={() => setIsAddUserOpen(false)} className="text-red-500 hover:bg-red-50 p-1 rounded-full">
                        <CgCloseO color="red" size={20} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-5">

                    <div>
                        <label className="block text-sm font-medium mb-2">Image User</label>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center text-gray-400">
                                <AiFillFileImage size={24} />
                            </div>
                            <input type='file' placeholder='Upload' id='file' name='file' className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm hover:bg-orange-600" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Full Name</label>
                        <div className="relative">
                            <AiOutlineUser size={16} className="absolute left-3 top-3 text-gray-400" />
                            <input type="text" placeholder="Enter Full Name" className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Email</label>
                        <div className="relative">
                            <GoMail size={16} className="absolute left-3 top-3 text-gray-400" />
                            {/* <Mail size={16} className="absolute left-3 top-3 text-gray-400" /> */}
                            <input type="email" placeholder="Enter Your Email" className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Phone</label>
                        <div className="relative">
                            <CgPhone size={16} className="absolute left-3 top-3 text-gray-400" />
                            <input type="tel" placeholder="Enter Your Number" className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium">Password</label>
                            <p className="text-xs text-orange-500 hover:underline">Set New Password</p>
                        </div>
                        <div className="relative">
                            <BsKey size="16" className="absolute left-3 top-3 text-gray-400" />
                            <input type="password" placeholder="Enter Your Password" className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Address</label>
                        <div className="relative">
                            <BiMap size={16} className="absolute left-3 top-3 text-gray-400" />
                            <input type="text" placeholder="Enter Your Address" className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <label className="text-sm font-medium">Type of User</label>
                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                            <button className="flex-1 py-2 text-sm font-medium border-r border-gray-300 text-orange-500 bg-orange-50 shadow-inner">Normal User</button>
                            <button className="flex-1 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">Admin</button>
                        </div>
                    </div>

                </div>

                <div className="p-6 border-t border-gray-100 bg-white">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors">
                        Add User
                    </button>
                </div>

            </div>
        </>
    )
}

export default TableHeader