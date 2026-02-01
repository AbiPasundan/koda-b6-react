import { Nav, Footer } from "@/App";
import { MdDateRange, MdOutlineDateRange } from "react-icons/md";
import { VscArrowSwap } from "react-icons/vsc";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";


export default function HistoryOrder(){
    return (
        <>
        <Nav bg="bg-black" padding="pb-[100px]" />
        <div className="max-w-7xl mx-auto">
            <div class="flex items-center justify-center gap-2 mb-8 mx-3">
                <h1 class="text-4xl font-bold text-black">History Order</h1>
                <span class="bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm font-bold">2</span>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mx-3 mb-8 gap-4">
                <div class="bg-gray-100 p-1.5 rounded-lg inline-flex flex-wrap">
                    <button class="bg-white text-gray-900 px-5 py-2 rounded-md text-sm font-semibold transition">On Progress</button>
                    <button class="text-gray-500 px-5 py-2 rounded-md text-sm font-medium hover:text-gray-800 transition">Sending Goods</button>
                    <button class="text-gray-500 px-5 py-2 rounded-md text-sm font-medium hover:text-gray-800 transition">Finish Order</button>
                </div>
                <div class="relative">
                    <button class="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition">
                        <MdOutlineDateRange />
                        January 2023
                        <MdDateRange />
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="lg:col-span-7 space-y-4">
                    <div class="bg-white p-5 mx-3 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div class="w-full md:w-24 h-24 hidden md:block ">
                            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=300&auto=format&fit=crop" alt="Coffee" class="w-full h-full object-cover" />
                        </div>
                        
                        <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                            
                            <div>
                                <div class="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                    <PiNotepadBold />
                                    No. Order
                                </div>
                                <div class="font-bold text-gray-900 text-sm">#12354-09893</div>
                                <a href="#" class="text-yellow-500 text-xs font-medium underline mt-1 block">Views Order Detail</a>
                            </div>

                            <div>
                                <div class="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    Date
                                </div>
                                <div class="font-bold text-gray-900 text-sm">23 January 2023</div>
                            </div>

                            <div>
                                <div class="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                    <VscArrowSwap />
                                    Total
                                </div>
                                <div class="font-bold text-gray-900 text-sm">Idr 40.000</div>
                            </div>

                            <div>
                                <div class="flex items-center text-gray-400 text-xs mb-1 gap-1">
                                    <FaExpandArrowsAlt />
                                    Status
                                </div>
                                <span class="inline-block bg-orange-100 text-orange-400 text-xs font-bold px-3 py-1 rounded-full">On Progress</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center items-center gap-2 mt-8">
                        <button class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</button>
                        <button class="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-300 transition">2</button>
                        <button class="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-300 transition">3</button>
                        <button class="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-300 transition">4</button>
                        
                        <button class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div class="lg:col-span-5 mx-3">
                    <div class="bg-white p-8 rounded-xl border border-gray-100 sticky top-6">
                        <div class="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                            <CiMail color="red" />
                        </div>
                        
                        <h3 class="font-bold text-lg mb-2">Send Us Message</h3>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6">
                            If you unable to find answer or find your product quickly, please describe your problem and tell us. We will give you solution.
                        </p>

                            <a href="https://wa.me/6287753518802" target="_blank">
                        <button class="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                                Send Message
                        </button>
                            </a>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}