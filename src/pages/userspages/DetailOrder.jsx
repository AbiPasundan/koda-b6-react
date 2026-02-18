import { IoPersonOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useLocation, useParams } from "react-router";

function Left(props) {
    return (
        <div>
            <h2 className="text-xl font-medium mb-6">Order Information</h2>
            <div className="bg-white rounded-lg [&>div>div]:mx-10 ">
                <div className="flex justify-between flex-wrap items-start py-5 border-b border-gray-100">
                    <div className="flex items-center text-gray-500 w-1/3">
                        <IoPersonOutline size="20" />
                        <span className="mx-5 text-sm font-medium">Full Name</span>
                    </div>
                    <div className="text-right font-semibold text-black w-2/3">{props.name}</div>
                </div>

                <div className="flex justify-between flex-wrap items-start py-5 border-b border-gray-100">
                    <div className="flex items-center text-gray-500 w-1/3">
                        <LuMapPin size="20" />
                        <span className="text-sm mx-5 font-medium">Address</span>
                    </div>
                    <div className="text-right font-semibold text-black w-2/3">{props.address}</div>
                </div>

                <div className="flex justify-between flex-wrap items-start py-5 border-b border-gray-100">
                    <div className="flex items-center text-gray-500 w-1/3">
                        <MdOutlinePhoneInTalk size="20" />
                        <span className="text-sm mx-5 font-medium">Phone</span>
                    </div>
                    <div className="text-right font-semibold text-black w-2/3">{props.phone}</div>
                </div>

                <div className="flex justify-between flex-wrap items-start py-5 border-b border-gray-100">
                    <div className="flex items-center text-gray-500 w-1/3">
                        <MdPayment size="28" />
                        <span className="text-sm mx-5 font-medium">Payment Method</span>
                    </div>
                    <div className="text-right font-semibold text-black w-2/3">{props.payment}</div>
                </div>

                <div className="flex justify-between flex-wrap items-start py-5 border-b border-gray-100">
                    <div className="flex items-center text-gray-500 w-1/3">
                        <MdOutlineLocalShipping size="20" />
                        <span className="text-sm mx-5 font-medium">Shipping</span>
                    </div>
                    <div className="text-right font-semibold text-black w-2/3">{props.delivery}</div>
                </div>

                <div className="flex justify-between flex-wrap items-center py-5 border-b border-gray-100">
                    <div className="flex items-center text-gray-500 w-1/3">
                        <BsArrowsFullscreen size="18" />
                        <span className="text-sm mx-5 font-medium">Status</span>
                    </div>
                    <div className="text-right w-2/3">
                        <span className="inline-block bg-green-100 text-green-600 font-bold text-xs px-4 py-1.5 rounded-full">{props.status}</span>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap flex-row items-center py-6 mt-2 mx-10">
                    <div>
                        <span className="text-gray-500 font-medium">Total Transaction</span>
                    </div>
                    <div>
                        <span className="text-xl font-bold text-yellow-600">{props.total}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RightContent(props) {
    return (
        <div className="flex gap-5 mb-8">
            <div className="w-36 h-28 shrink-0">
                <img loading="lazy" src={props.image} alt="Coffee" className="w-full h-full object-cover rounded-lg shadow-sm" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="mb-1">
                    <span className="text-white text-[10px] font-bold px-2 py-1 rounded">FLASH SALE!</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">{props.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{props.quantity} pcs | {props.size} | {props.temp} | {props.delivery}</p>
                <div className="flex items-center gap-2">
                    <span className="text-red-300 line-through text-sm font-medium">{props.oldPrice}</span>
                    <span className="text-yellow-600 font-bold text-lg">{props.newPrice}</span>
                </div>
            </div>
        </div>
    )
}

function Right({ children }) {
    return (
        <div>
            <h2 className=" text-xl font-medium mb-6">Your Order</h2>
            {/* <RightContent /> */}
            <div>
                {children}
            </div>
        </div>
    )
}

function LayoutContent({ children }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {children}
        </div>
    )
}


function HeaderTitle(props) {
    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-1">Order <span>#{props.order}</span></h1>
            <p className="text-gray-400 text-sm">{props.date}</p>
        </div>
    )
}

export default function DetailOrder() {
    const location = useLocation();

    const { id } = useParams();

    const getOrderData = () => {
        if (location.state?.order) {
            return location.state.order;
        }

        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        return savedOrders.find((item) => String(item.no) === String(id));
    };

    const order = getOrderData();
    // console.log(order.cart);
    // order.cart.forEach(element => {
    //     console.log(element.product)
    // });


    if (!order) {
        return <div className="my-80 text-center text-8xl">Order tidak ditemukan atau URL tidak valid.</div>;
    }
    return (
        <>
            <div className="bg-gray-50 text-gray-800 p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <HeaderTitle order={order.no} date={order.date} />
                </div>
                <LayoutContent>
                    <Left name={order.detail.name} address={order.detail.address} phone={order.detail.phone} payment={order.detail.payment} delivery={order.detail.delivery} status={order.status} total={order.total} />
                    <Right>
                        {order.cart.map((e, i) => (
                            <RightContent key={i} image={e.product.image} name={e.product.name} oldPrice={e.product.oldPrice} newPrice={e.product.newPrice} quantity={e.quantity} size={e.selectedSize} temp={e.selectedTemp} />
                        ))}
                    </Right>
                </LayoutContent>
            </div>
        </>
    )
}