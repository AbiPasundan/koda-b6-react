import { Nav, Footer } from "@/App"
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
function CheckoutProduct() {
    return (
        <main className="my-5">
            <div className="flex justify-between justify-self-center gap-5 p-3 bg-sky-700">
                <div>
                    <img src="/src/assets/img/userimg/home.png" alt="kopik" width="150" />
                </div>
                <div className="flex flex-col gap-3 w-[70%]">
                    <div>
                        <span className="bg-[#D00000] rounded-full text-[#FFFFFF] p-1">Flash Sale</span>
                    </div>
                    <div>
                        <h2 className="text-[#0B0909] font-bold">Hazelnut Latte</h2>
                    </div>
                    <div className="text-[#4F5665]">
                        <span>2pcs | </span>
                        <span>Regular | </span>
                        <span>Ice | </span>
                        <span>Dine in </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-[#D00000] line-through text-[12px]">Idr 10.000</span>
                        <span className="text-[#FF8906] text-[22px]">Idr 20.000</span>
                    </div>
                </div>
                <div className="my-auto">X</div>
            </div>
        </main>
    )
}

function CheckoutInput({children, value, text, placeholder}) {
    return (
        <label htmlFor={value} className="w-full [&>span]:w-full [&>div]:w-full [&>div>input]:w-full">
            <span>{text}</span>
            <div className="flex items-center p-3 border">
                {/* <MdOutlineEmail size="30" /> */}
                {children}
                <input className="mx-5 outline-none" type={value} name={value} id={value} placeholder={placeholder} />
            </div>
        </label>
    )
}

export default function Checkout(){
    return (
        <>
            <Nav bg="bg-black" padding="pb-[100px]" />
            <header className="m-10 text-[#0B0909] text-5xl">
                <h1>Payment Detail</h1>
            </header>
            <main>
                <section className="flex flex-col">
                    <div className="flex justify-center gap-10">
                        <section className="w-[50%] bg-sky-100">
                            <header className="flex items-center justify-between">
                                <h4>Your Order</h4>
                                <h4 className="bg-[#FF8906] p-2 rounded-xl"> + Add Menu</h4>
                            </header>
                            <CheckoutProduct />
                            <CheckoutProduct />
                            <CheckoutProduct />
                        </section>
                        <table className="my-5 bg-green-100 w-[40%]">
                            {/* <h1 className="my-auto">Total</h1> */}
                            <tr><h1>hallow</h1></tr>
                            <tbody className="[&>tr]:bg-red-100 [&>tr]:flex [&>tr]:justify-between [&>tr]:w-full [&>tr]:py-5 [&>tr>td]:mx-5 [&>tr>span]:mx-5">
                                <tr>
                                    <span>Order</span>
                                    <td>Idr 40.000</td>
                                </tr>
                                <tr>
                                    <span>Delivery</span>
                                    <td>Idr 0</td>
                                </tr>
                                <tr>
                                    <span>Tax</span>
                                    <td>4000</td>
                                </tr>
                                <tr className="border-t-1 pt-2">
                                    <span>Sub Total</span>
                                    <td>44.000</td>
                                </tr>
                                <tr className="text-center bg-green-100">
                                    <span className="text-center bg-green-100 w-full py-2 rounded">Submit</span>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <section className="m-10 w-[50%]">
                <h1>Payment info & Delivery</h1>
                <form className="w-full my-5 flex flex-col gap-5">
                    <CheckoutInput value="email" text="Email" placeholder="Enter Your Email">
                        <MdOutlineEmail size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="name" text="Full Name" placeholder="Enter Your Full Name">
                        <IoPersonOutline size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="address" text="Address" placeholder="Enter Your Address">
                        <HiOutlineLocationMarker size="30" />
                    </CheckoutInput>
                    <label htmlFor="delivery" className="flex gap-5 justify-between items-center [&>span]:text-center [&>span]:bg-red-100 [&>span]:px-10 [&>span]:py-1 [&>span]:border [&>span]:rounded ">
                        <span>Dine In</span>
                        <span>Door Delivery</span>
                        <span>Pick Up</span>
                    </label>
                </form>
            </section>
            <Footer />
        </>
    )
}