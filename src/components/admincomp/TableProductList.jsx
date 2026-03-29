import TableHeader from './TableHeader';
import TableProducts from './TableProduct';

export default function TableProductList() {
    return (
        <div className="p-8 bg-white min-h-screen relative font-sans text-gray-800">
            <TableHeader />
            <TableProducts></TableProducts>
        </div>
    )
}