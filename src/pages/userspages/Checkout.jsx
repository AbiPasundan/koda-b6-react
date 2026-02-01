import { Nav, Footer } from "@/App"
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
function CheckoutProduct({name, newPrice, oldPrice, image}) {
    return (
        <main className="my-5">
            <div className="flex justify-between justify-self-center gap-5 p-3 bg-[#F5F5F5]">
                <div>
                    <img src={`${image}`} alt="kopik" width="150" />
                </div>
                <div className="flex flex-col gap-3 w-[70%]">
                    <div>
                        <span className="bg-[#D00000] rounded-full text-[#FFFFFF] p-1">Flash Sale</span>
                    </div>
                    <div>
                        <h2 className="text-[#0B0909] font-bold">{name}</h2>
                    </div>
                    <div className="text-[#4F5665]">
                        <span>2pcs | </span>
                        <span>Regular | </span>
                        <span>Ice | </span>
                        <span>Dine in </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-1">
                        <span className="text-[#D00000] line-through text-[8px]">{oldPrice}</span>
                        <span className="text-[#FF8906] text-[18px]">{newPrice}</span>
                    </div>
                </div>
                <div className="my-auto -mx-5 md:mx-10">X</div>
            </div>
        </main>
    )
}

function CheckoutInput({children, value, text, placeholder}) {
    return (
        <label htmlFor={value} className="w-full [&>span]:w-full [&>div]:w-full [&>div>input]:w-full">
            <span>{text}</span>
            <div className="flex items-center p-3 border">
                {children}
                <input className="mx-5 outline-none" type={value} name={value} id={value} placeholder={placeholder} />
            </div>
        </label>
    )
}

export default function Checkout(){
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    // console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += item.newPrice;
    });
    let totalTax = 0
    cart.forEach(item => {
        totalTax += item.tax;
    });
    const total = (totalTax + totalPrice).toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})
    // console.log(totalTax.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',}))
    return (
        <>
            <Nav bg="bg-black" padding="pb-[100px]" />
            <header className="m-10 text-[#0B0909] text-5xl">
                <h1>Payment Detail</h1>
            </header>
            <main className="flex flex-col">
                <section className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        
                            <section className="md:w-[50%] w-[80%] mx-auto ">
                                <header className="flex items-center justify-between">
                                    <h4 className="text-xl">Your Order</h4>
                                    <h4 className="bg-[#FF8906] p-2 rounded-xl"> + Add Menu</h4>
                                </header>
                                {cart.map((data, i) => (
                                    <div key={data.id} >
                                        <CheckoutProduct name={data.name} image={data.image} oldPrice={data.oldPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})} newPrice={data.newPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})} />
                                    </div>
                                ))}
                            </section>
                        <table className="my-5 md:w-[40%] w-[80%] mx-auto">
                            <thead>
                                <tr><td>Total</td></tr>
                            </thead>
                            <tbody className="[&>tr]:bg-[#F5F5F5] [&>tr]:flex [&>tr]:justify-between [&>tr]:w-full [&>tr]:py-5 [&>tr>td]:mx-5 [&>tr>span]:mx-5">
                                <tr>
                                    <td>Order</td>
                                    <td>{totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})}</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td>Idr 0</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>{totalTax.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})}</td>
                                </tr>
                                <tr className="border-t-1 pt-2">
                                    <td>Sub Total</td>
                                    <td>{total}</td>
                                </tr>
                                <tr className="text-center ">
                                    <td className="text-center bg-[#FF8906] w-full py-2 rounded">Submit</td>
                                </tr>
                                <tr className="text-center ">
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BANK_BRI_logo_%28vertical%29.svg/120px-BANK_BRI_logo_%28vertical%29.svg.png" alt="bri" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/960px-Logo_dana_blue.svg.png?20200124191307" alt="dana" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/960px-Bank_Central_Asia.svg.png?20200318082802" alt="bca" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/120px-Gopay_logo.svg.png?20251006142655" alt="gopay" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/960px-Logo_ovo_purple.svg.png?20210603100330" alt="ovo" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/250px-PayPal.svg.png?20241230110020" alt="paypal" />
                                    </td>
                                </tr>
                                <tr className="text-center ">
                                    <td className="text-center w-full py-2 rounded">Get discount if you pay with bank central asia</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <section className="m-10 w-[50%] mx-auto md:mx-10">
                <h1>Payment info & Delivery</h1>
                <form className="w-full my-5  flex flex-col gap-5">
                    <CheckoutInput value="email" text="Email" placeholder="Enter Your Email">
                        <MdOutlineEmail size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="name" text="Full Name" placeholder="Enter Your Full Name">
                        <IoPersonOutline size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="address" text="Address" placeholder="Enter Your Address">
                        <HiOutlineLocationMarker size="30" />
                    </CheckoutInput>
                    <label htmlFor="delivery" className="flex flex-col md:flex-row gap-5 justify-between items-center [&>span]:text-center [&>span]:px-10 [&>span]:py-1 [&>span]:border [&>span]:rounded ">
                        <span className="border-[#FF8906]">Dine In</span>
                        <span className="border-[#f0f0f0f]">Door Delivery</span>
                        <span className="border-[#f0f0f0f]">Pick Up</span>
                    </label>
                </form>
            </section>
            <Footer />
        </>
    )
}