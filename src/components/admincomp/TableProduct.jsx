import { FiTrash } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import React from 'react'
import { useDeleteProductMutation, useGetProductQuery } from "@/feature/api";

function TableProducts() {
    const { data, isLoading, error } = useGetProductQuery();
    const [deleteProduct] = useDeleteProductMutation()
    const products = data || [];
    console.log(products);
    

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id).unwrap()
            console.log("Deleted successfully")
        } catch (err) {
            console.error(err)
        }
    }

    if (isLoading) return <p>Loading...</p>
    if (error) return <div>Error <p>{error.message}</p> </div>
    return (
        <>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white text-gray-600 text-sm border-b border-gray-200">
                            <th className="p-4 w-12 text-center"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" /></th>
                            <th className="p-4 font-semibold">Image</th>
                            <th className="p-4 font-semibold">Product Name</th>
                            <th className="p-4 font-semibold">Price</th>
                            <th className="p-4 font-semibold">Desc</th>
                            <th className="p-4 font-semibold">Product Size</th>
                            <th className="p-4 font-semibold">Method</th>
                            <th className="p-4 font-semibold">Stock</th>
                            <th className="p-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 hover:bg-gray-100 transition-colors`}>
                                <td className="p-4 text-center"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" /></td>
                                <td className="p-4">
                                    <img src={product.avatar} alt={product.product_name} className="w-10 h-10 rounded-md object-cover" />
                                </td>
                                <td className="p-4">{product.product_name}</td>
                                <td className="p-4 text-gray-600">{product.price}</td>
                                <td className="p-4 text-gray-600 text-sm max-w-xs">{product.product_desc}</td>
                                <td className="p-4 text-gray-600">{product.product_size}</td>
                                <td className="p-4 text-gray-600">{product.delivery}</td>
                                <td className="p-4 text-gray-600">{product.quantity}</td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-1.5 bg-orange-50 text-orange-500 rounded hover:bg-orange-100"><AiOutlineEdit size={16} /></button>
                                        <button onClick={() => handleDelete(product.id)} className="p-1.5 bg-red-50 text-red-500 rounded hover:bg-red-100"><FiTrash size={16} /></button>
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

export default TableProducts