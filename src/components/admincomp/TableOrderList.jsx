import TableHeader from './TableHeader';
import TableOrder from './TableOrder';

export default function TableOrderList() {
    return (
        <div className="p-8 bg-white min-h-screen relative font-sans text-gray-800">
            <TableHeader />
            <TableOrder />
        </div>
    )
}