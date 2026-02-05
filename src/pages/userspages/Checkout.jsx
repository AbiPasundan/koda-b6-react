import { Nav, Footer } from "@/App"
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
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

function CheckoutInput({children, value, text, placeholder, registerInput}) {
    return (
        <label htmlFor={value} className="w-full [&>span]:w-full [&>div]:w-full [&>div>input]:w-full">
            <span>{text}</span>
            <div className="flex items-center p-3 border">
                {children}
                <input {...registerInput} className="mx-5 outline-none" type={value} name={value} id={value} placeholder={placeholder} />
            </div>
        </label>
    )
}

export default function Checkout(){
    const navigate = useNavigate()
    const [selectDelivery, setSelectDelivery ] = useState()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const options = ['Dine In', 'Door Delivery', 'Pick Up'];
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += item.newPrice;
    });
    let totalTax = 0
    cart.forEach(item => {
        totalTax += item.tax;
    });
    const total = (totalTax + totalPrice).toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})
    
    function generateNoOrder(){
        const date = Date.now()
        const year = new Date(date).getFullYear();
        const month = new Date(date).getMonth();
        const hour = new Date(date).getHours()
        const second = new Date(date).getSeconds()
        const ml = new Date(date).getMilliseconds()
        const monthyear = (String(month)+String(year))
        const id = (String(hour)+String(second)+String(ml))

        const uniqueId = String(`${monthyear}-${id}`)
        return uniqueId
    }
    console.log(generateNoOrder())


    const onClick = e => {
        console.log(123)
    }
    const onSubmit = data => {
        const date = new Date
        console.log(date)
        const localData = JSON.parse(localStorage.getItem("orders")) || []
        const tokenAuthUser = JSON.parse(localStorage.getItem("token_auth_user")) || null
        if (tokenAuthUser === null) {
            navigate("/login")
        } else {
            const dataOrder = {
                no: generateNoOrder(),
                date: date.toLocaleDateString(),
                total: total,
                status: "done",
                detail:
                {
                    name: data.name,
                    email: data.email,
                    address: data.address,
                    phone: 628123456789,
                    payment: "Cash",
                    delivery: data.delivery,
                }
            }
            localData.push(dataOrder)
            localStorage.setItem("orders", JSON.stringify(localData))
            localStorage.removeItem("cart")
            navigate("/detailorder", dataOrder)
        }
        // navigate("/login")
    }
    return (
        <>
            <header className="m-10 text-[#0B0909] text-5xl">
                <h1>Payment Detail</h1>
            </header>
            <main className="flex flex-col">
                <section className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        <section className="md:w-[50%] w-[80%] mx-auto ">
                            <header className="flex items-center justify-between">
                                <h4 className="text-xl">Your Order</h4>
                                <Link to="/product" className="bg-[#FF8906] p-2 rounded-xl"> + Add Menu</Link>
                            </header>
                            { cart.length == 0 ? (
                                <>
                                <main className="my-5">
                                    <div className="flex justify-between justify-self-center gap-5 p-3 bg-[#F5F5F5]">
                                        <h1>Belum ada apa-apa</h1>
                                    </div>
                                </main>
                                </>
                            ) : (
                                <>
                                {cart.map((data, i) => (
                                    <div key={data.id} >
                                        <CheckoutProduct name={data.name} image={data.image} oldPrice={data.oldPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})} newPrice={data.newPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR',})} />
                                    </div>
                                ))}
                            </>
                            ) }
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
                                <tr className="border-t pt-2">
                                    <td>Sub Total</td>
                                    <td>{total}</td>
                                </tr>
                                <tr className="text-center ">
                                    <td onClick={() => onClick()} className="text-center bg-[#FF8906] w-full py-2 rounded cursor-pointer">Submit</td>
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
                <form className="w-full my-5  flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <CheckoutInput value="email" text="Email" placeholder="Enter Your Email" registerInput={register("email")} >
                        <MdOutlineEmail size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="name" text="Full Name" placeholder="Enter Your Full Name" registerInput={register("name")}>
                        <IoPersonOutline size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="address" text="Address" placeholder="Enter Your Address" registerInput={register("address")}>
                        <HiOutlineLocationMarker size="30" />
                    </CheckoutInput>
                    <div  className="flex flex-col md:flex-row gap-5 justify-between items-center [&>label]:text-center [&>label]:px-10 [&>label]:py-1 [&>label]:border [&>label]:rounded ">
                        {options.map(option => (
                            <label onClick={() => setSelectDelivery(option)} key={option} className={` cursor-pointer ${selectDelivery === option ? "border-[#FF8906]" : "border-black" }`}>
                                <input type="radio" name="delivery" id="delivery" value={option} hidden {...register("delivery")} />{option}
                            </label>
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}