import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import { useAddProductMutation } from "@/feature/api";

export default function TableHeaderProduct() {
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);
    const [addProduct, { isLoading, error }] = useAddProductMutation();

    const [formData, setFormData] = useState({
        product_name: '',
        product_desc: '',
        price: '',
        quantity: '',
        discount: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            product_name: formData.product_name,
            product_desc: formData.product_desc,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
            discount: Number(formData.discount)
        };

        try {
            await addProduct(payload).unwrap();
            setIsAddUserOpen(false);
            setFormData({ product_name: '', product_desc: '', price: '', quantity: '', discount: 0 }); // Reset
            console.log("Product added successfully!");
        } catch (err) {
            console.error("Failed to add product:", err);
        }
    };

    if (isLoading) return <p className="p-10">Processing...</p>;

    return (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-6">Product Management</h1>

                <div className="flex justify-between items-end">
                    <button onClick={() => setIsAddUserOpen(true)} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors" >
                        <AiOutlinePlus size={18} />
                        Add Product
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-500 mb-1">Search</label>
                            <div className="relative">
                                <input type="text" placeholder="Search products..." className="pl-4 pr-10 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-orange-500" />
                                <CiSearch size={18} className="absolute right-3 top-2.5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isAddUserOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" onClick={() => setIsAddUserOpen(false)} />
            )}

            <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isAddUserOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

                <div className="flex justify-between items-center p-6 border-b border-gray-100 mt-20">
                    <h2 className="text-xl font-bold">Insert Product</h2>
                    <button onClick={() => setIsAddUserOpen(false)} className="text-red-500 hover:bg-red-50 p-1 rounded-full">
                        <CgCloseO size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 flex flex-col gap-5">
                    {error && <p className="text-red-500 text-sm">Error: {error.data?.message || "Something went wrong"}</p>}

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Product Name</label>
                        <input type="text" name="product_name" required value={formData.product_name} onChange={handleChange} placeholder="e.g. Awesome Sneakers" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Price</label>
                        <input type="number" name="price" required value={formData.price} onChange={handleChange} placeholder="1000" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Quantity (Stock)</label>
                        <input type="number" name="quantity" required value={formData.quantity} onChange={handleChange} placeholder="1234" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Description</label>
                        <textarea name="product_desc" required value={formData.product_desc} onChange={handleChange} placeholder="Enter product details..." className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-orange-500 outline-none h-24" />
                    </div>

                    <div className="mt-auto pt-6">
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors" >
                            Save Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}