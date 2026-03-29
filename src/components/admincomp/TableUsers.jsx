import { FiTrash } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import React from 'react'

const dummyUsers = [
    { id: 1, name: 'Eleanor Pena', phone: '(205) 555-0100', address: '3517 W. Gray St. Utica, Pennsylvania 57867', email: 'cikaracak@gmail.com', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Ronald Richards', phone: '(205) 555-0100', address: '1901 Thornridge Cir. Shiloh, Hawaii 81063', email: 'cikaracak@gmail.com', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Darlene Robertson', phone: '(209) 555-0104', address: '4140 Parker Rd. Allentown, New Mexico 31134', email: 'cikaracak@gmail.com', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Kristin Watson', phone: '(252) 555-0126', address: '2972 Westheimer Rd. Santa Ana, Illinois 85486', email: 'cikaracak@gmail.com', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Dianne Russell', phone: '(201) 555-0124', address: '4517 Washington Ave. Manchester, Kentucky 39495', email: 'cikaracak@gmail.com', avatar: 'https://i.pravatar.cc/150?img=5' },
];

function TableUsers(props) {
    return (
        <>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white text-gray-600 text-sm border-b border-gray-200">
                            <th className="p-4 w-12 text-center"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" /></th>
                            <th className="p-4 font-semibold">Image</th>
                            <th className="p-4 font-semibold">Full Name</th>
                            <th className="p-4 font-semibold">Phone</th>
                            <th className="p-4 font-semibold">Address</th>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyUsers.map((user, index) => (
                            <tr key={user.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 hover:bg-gray-100 transition-colors`}>
                                <td className="p-4 text-center"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" /></td>
                                <td className="p-4">
                                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-md object-cover" />
                                </td>
                                <td className="p-4">{user.name}</td>
                                <td className="p-4 text-gray-600">{user.phone}</td>
                                <td className="p-4 text-gray-600 text-sm max-w-xs">{user.address}</td>
                                <td className="p-4 text-gray-600">{user.email}</td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-1.5 bg-orange-50 text-orange-700 rounded hover:bg-orange-100"><AiFillProfile size={16} /></button>
                                        <button className="p-1.5 bg-orange-50 text-orange-500 rounded hover:bg-orange-100"><AiOutlineEdit size={16} /></button>
                                        <button className="p-1.5 bg-red-50 text-red-500 rounded hover:bg-red-100"><FiTrash size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
                <p>Show 5 user of 100 user</p>
                <div className="flex items-center gap-3">
                    <button className="hover:text-orange-500">Prev</button>
                    <div className="flex gap-2">
                        <button className="text-orange-500 font-medium">1</button>
                        <button className="hover:text-orange-500">2</button>
                        <button className="hover:text-orange-500">3</button>
                        <button className="hover:text-orange-500">4</button>
                        <button className="hover:text-orange-500">5</button>
                        <span>...</span>
                    </div>
                    <button className="font-medium hover:text-orange-500">Next</button>
                </div>
            </div>
        </>
    )
}

export default TableUsers