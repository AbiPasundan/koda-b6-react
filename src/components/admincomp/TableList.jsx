import { useState } from 'react';
import TableHeader from './TableHeader';
import TableUsers from './TableUsers';

export default function TableList() {
    return (
        <div className="p-8 bg-white min-h-screen relative font-sans text-gray-800">
            <TableHeader />
            <TableUsers />
        </div>
    )
}