import TableHeaderOrder from './TableHeaderOrder';
import TableOrder from './TableOrder';

export default function TableOrderList() {
    return (
        <div className="p-8 bg-white min-h-screen relative font-sans text-gray-800">
            <TableHeaderOrder />
            <TableOrder />
        </div>
    )
}