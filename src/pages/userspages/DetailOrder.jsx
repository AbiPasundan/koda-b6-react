import { IoPersonOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";

function Left(props) {
    return (
        <div>
            <h2 class="text-xl font-medium mb-6">Order Information</h2>
            <div class="bg-white rounded-lg">
                <div class="flex justify-between items-start py-5 border-b border-gray-100">
                    <div class="flex items-center text-gray-500 w-1/3">
                        <IoPersonOutline size="20" />
                        <span class="mx-5 text-sm font-medium">Full Name</span>
                    </div>
                    <div class="text-right font-semibold text-black w-2/3">{props.name}</div>
                </div>

                <div class="flex justify-between items-start py-5 border-b border-gray-100">
                    <div class="flex items-center text-gray-500 w-1/3">
                        <LuMapPin size="20" />
                        <span class="text-sm mx-5 font-medium">Address</span>
                    </div>
                    <div class="text-right font-semibold text-black w-2/3">{props.address}</div>
                </div>

                <div class="flex justify-between items-start py-5 border-b border-gray-100">
                    <div class="flex items-center text-gray-500 w-1/3">
                        <MdOutlinePhoneInTalk size="20" />
                        <span class="text-sm mx-5 font-medium">Phone</span>
                    </div>
                    <div class="text-right font-semibold text-black w-2/3">{props.phone}</div>
                </div>

                <div class="flex justify-between items-start py-5 border-b border-gray-100">
                    <div class="flex items-center text-gray-500 w-1/3">
                        <MdPayment size="28" />
                        <span class="text-sm mx-5 font-medium">Payment Method</span>
                    </div>
                    <div class="text-right font-semibold text-black w-2/3">{props.payment}</div>
                </div>

                <div class="flex justify-between items-start py-5 border-b border-gray-100">
                    <div class="flex items-center text-gray-500 w-1/3">
                        <MdOutlineLocalShipping size="20" />
                        <span class="text-sm mx-5 font-medium">Shipping</span>
                    </div>
                    <div class="text-right font-semibold text-black w-2/3">{props.delivery}</div>
                </div>

                <div class="flex justify-between items-center py-5 border-b border-gray-100">
                    <div class="flex items-center text-gray-500 w-1/3">
                        <BsArrowsFullscreen size="18" />
                        <span class="text-sm mx-5 font-medium">Status</span>
                    </div>
                    <div class="text-right w-2/3">
                        <span class="inline-block bg-green-100 text-green-600 font-bold text-xs px-4 py-1.5 rounded-full">{props.status}</span>
                    </div>
                </div>

                <div class="flex justify-between items-center py-6 mt-2">
                    <span class="text-gray-500 font-medium">Total Transaction</span>
                    <span class="text-xl font-bold text-yellow-600">IDR {props.total}</span>
                </div>
            </div>
        </div>
    )
}

function Right(props){
    return (
        <div>
        <h2 class="text-xl font-medium mb-6">Your Order</h2>
            <div class="flex gap-5 mb-8">
                <div class="w-36 h-28 flex-shrink-0">
                    <img src={props.image} alt="Coffee" class="w-full h-full object-cover rounded-lg shadow-sm" />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="mb-1">
                        <span class="bg-red-700 text-white text-[10px] font-bold px-2 py-1 rounded">FLASH SALE!</span>
                    </div>
                    <h3 class="text-lg font-bold text-black mb-1">{props.name}</h3>
                    <p class="text-gray-400 text-sm mb-2">2pcs | Regular | Ice | Dine In</p>
                    <div class="flex items-center gap-2">
                        <span class="text-red-300 line-through text-sm font-medium">IDR {props.oldPrice}</span>
                        <span class="text-yellow-600 font-bold text-lg">IDR {props.newPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LayoutContent({children}) {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {children}
        </div>
    )
}


function HeaderTitle() {
    return(
        <div class="mb-8">
            <h1 class="text-4xl font-bold text-black mb-1">Order <span>#12354-09893</span></h1>
            <p class="text-gray-400 text-sm">21 March 2023 at 10:30 AM</p>
        </div>
    )
}

export default function DetailOrder(){
    return (
        <div  class="bg-gray-50 text-gray-800 p-6 md:p-12">
            <div class="max-w-6xl mx-auto">
                <HeaderTitle />
            </div>
            <LayoutContent>
                <Left name="Galuh Wizard Anggrono" address="Griya bandung indah" phone="082116304338" payment="cash" delivery="Dine In" status="Done" total="40.000" />
                <Right image="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=300&auto=format&fit=crop" name="Hazelnut Latte" oldPrice="40.000" newPrice="20.000" />
            </LayoutContent>
        </div>
    )
}