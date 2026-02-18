import { MdDateRange, MdOutlineDateRange } from "react-icons/md";
import { VscArrowSwap } from "react-icons/vsc";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { useState } from "react";

function FilterByDelivery({
    statusFilter,
    setStatusFilter,
    setCurrentPage
}) {
    const status = ["On Progress", "Sending Goods", "Finish Order"];

    return (
        <div className="bg-gray-100 p-1.5 rounded-lg inline-flex flex-wrap">
            {status.map(e => (
                <button
                    key={e}
                    onClick={() => {
                        setStatusFilter(e);
                        setCurrentPage(1);
                    }}
                    className={`px-5 py-2 rounded-md text-sm transition
                        ${statusFilter === e
                            ? "bg-white text-gray-900 font-semibold"
                            : "text-gray-500 font-medium hover:text-gray-800"
                        }`}
                >
                    {e}
                </button>
            ))}
        </div>
    );
}



export default function HistoryOrder() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];


    orders.forEach(e => {
        console.log(e)
        e.cart.forEach(j => {
            console.log("ini j ciuh abcd")
            console.log(j.product.image)
        });
        // console.log(orders[e])
    });
    // console.log(test)

    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("On Progress");
    const ordersPerPage = 1;

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

    const currentOrders = orders.slice(
        indexOfFirstOrder,
        indexOfLastOrder
    );

    const totalPages = Math.ceil(orders.length / ordersPerPage);


    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-8 mx-3">
                    <h1 className="text-4xl font-bold text-black my-10">History Order</h1>
                    <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm font-bold">{orders.length}</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mx-3 mb-8 gap-4">
                    <FilterByDelivery statusFilter={statusFilter} setStatusFilter={setStatusFilter} setCurrentPage={setCurrentPage} />


                    <div className="relative">
                        <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition">
                            <MdOutlineDateRange />
                            January 2023
                            <MdDateRange />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-4">
                        {currentOrders.map((order, i) => (
                            <div key={i} className="bg-white p-5 mx-3 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="w-full md:w-24 h-24 hidden md:block ">
                                    <img loading="lazy" key={i} src={order.cart?.[0]?.product?.image?.[0]} alt="Coffee" className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                                    <div>
                                        <div className="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                            <PiNotepadBold />
                                            No. Order
                                        </div>
                                        <div className="font-bold text-gray-900 text-sm">{order.no}</div>
                                        <Link to={`/detailorder/${order.no}`} state={{ order }} className="text-yellow-500 text-xs font-medium underline mt-1 block">Views Order Detail</Link>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            Date
                                        </div>
                                        <div className="font-bold text-gray-900 text-sm">{order.date}</div>
                                    </div>

                                    <div>
                                        <div className="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                            <VscArrowSwap />
                                            Total
                                        </div>
                                        <div className="font-bold text-gray-900 text-sm">{order.total}</div>
                                    </div>

                                    <div>
                                        <div className="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                            <FaExpandArrowsAlt />
                                            Status
                                        </div>
                                        <span className="inline-block bg-orange-100 text-orange-400 text-xs font-bold px-3 py-1 rounded-full">{order.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-center items-center gap-2 my-10">
                            {/* <button className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</button>
                            <button className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-300 transition">2</button>
                            <button className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-300 transition">3</button>
                            <button className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-300 transition">4</button> */}
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => prev - 1)}
                                className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center disabled:opacity-50"
                            >
                                <FaArrowRightLong className="rotate-180" />
                            </button>

                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;

                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition
                                                ${currentPage === page
                                                ? "bg-orange-500 text-white"
                                                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center disabled:opacity-50"
                            >
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5 mx-3">
                        <div className="bg-white p-8 rounded-xl border border-gray-100 sticky top-6">
                            <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <CiMail color="red" />
                            </div>

                            <h3 className="font-bold text-lg mb-2">Send Us Message</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                If you unable to find answer or find your product quickly, please describe your problem and tell us. We will give you solution.
                            </p>

                            <a href="https://wa.me/6287753518802" target="_blank">
                                <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                                    Send Message
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}