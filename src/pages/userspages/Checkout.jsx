import { BiX } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useGetAllCartQuery } from "@/feature/api";

function generateNoOrder() {
    const date = Date.now();
    const year = new Date(date).getFullYear();
    // getMonth() dimulai dari 0 (Januari = 0), jadi lebih baik ditambah 1
    const month = new Date(date).getMonth() + 1;
    const hour = new Date(date).getHours();
    const second = new Date(date).getSeconds();
    const ml = new Date(date).getMilliseconds();

    const monthyear = (String(month) + String(year));
    const id = (String(hour) + String(second) + String(ml));

    const uniqueId = String(`${monthyear}-${id}`);
    return uniqueId;
}

function CheckoutProduct({ name, newPrice, oldPrice, image, is_flash_sale, onDelete, quantity, size, temp, delivery }) {
    return (
        <main className="my-5">
            <div className="flex justify-between justify-self-center gap-5 p-3 bg-[#F5F5F5]">
                <div>
                    <img loading="lazy" src={`${image}`} alt="kopik" width="150" />
                </div>
                <div className="flex flex-col gap-3 w-[70%]">
                    <div>
                        <span className="bg-[#D00000] rounded-full text-[#FFFFFF] p-1">{is_flash_sale}</span>
                    </div>
                    <div>
                        <h2 className="text-[#0B0909] font-bold">{name}</h2>
                    </div>
                    <div className="text-[#4F5665]">
                        <span>{quantity} pcs | </span>
                        <span>{size} | </span>
                        <span>{temp} | </span>
                        <span>{delivery} </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-1">
                        <span className="text-[#D00000] line-through text-[8px]">{oldPrice}</span>
                        <span className="text-[#FF8906] text-[18px]">{newPrice}</span>
                    </div>
                </div>
                <div className="my-auto -mx-5 md:mx-10 cursor-pointer">
                    <BiX onClick={onDelete} />
                </div>
            </div>
        </main>
    )
}

function CheckoutInput({ children, value, text, placeholder, registerInput, realValue }) {
    return (
        <label htmlFor={value} className="w-full [&>span]:w-full [&>div]:w-full [&>div>input]:w-full">
            <span>{text}</span>
            <div className="flex items-center p-3 border">
                {children}
                <input {...registerInput} className="mx-5 outline-none" value={realValue} type={value} name={value} id={value} placeholder={placeholder} />
            </div>
        </label>
    )
}

export default function Checkout() {
    const { register, handleSubmit, watch } = useForm();
    const [errors, setError] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    const decodedToken = token ? jwtDecode(token) : null;
    const user_id = decodedToken ? decodedToken.user_id : null;
    const { data: cartItems, isLoading, error } = useGetAllCartQuery(user_id);
    const dataProduct = cartItems || []

    const watchDelivery = watch("delivery");

    const options = ['Dine In', 'Door Delivery', 'Pick Up'];

    const ongkirDoorDelivery = 5000;
    const currentOngkir = watchDelivery === 'Door Delivery' ? ongkirDoorDelivery : 0;

    const taxRate = 0.11;


    const totalDiscountPrice = dataProduct.reduce((total, item) => {
        return total + (item.discount_price * item.quantity);
    }, 0);

    const tax = totalDiscountPrice * taxRate;
    const grandTotal = (totalDiscountPrice + tax) + currentOngkir;

    console.log("Subtotal:", totalDiscountPrice);
    console.log("Pajak:", tax);
    console.log("Total:", grandTotal);

    console.log(totalDiscountPrice);



    const dataLogin = JSON.parse(localStorage.getItem("token_auth_user")) || []  // deprecated
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Terjadi kesalahan</div>;

    return (
        <form>
            <header className="m-10 text-[#0B0909] text-5xl">
                <h1>Payment Detail</h1>
            </header>
            <main className="flex flex-col">
                <section className="flex flex-col">
                    {errors &&
                        (
                            <div onClick={() => setError(null)} className="w-[70%] bg-[whitesmoke] rounded-2xl flex flex-col gap-5 right-0 left-0 top-20 px-20 py-10 mx-auto text-center sticky border border-t-8 shadow-2xl border-t-[#ff8906]">
                                <h1 className="text-3xl"> Warning </h1>
                                <span className="text-left">{errors}</span>
                            </div>
                        )}
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        <section className="md:w-[50%] w-[80%] mx-auto ">
                            <header className="flex items-center justify-between">
                                <h4 className="text-xl">Your Order</h4>
                                <Link to="/product" className="bg-[#FF8906] p-2 rounded-xl"> + Add Menu</Link>
                            </header>
                            {cartItems.length == 0 ? (
                                <>
                                    <main className="my-5">
                                        <div className="flex justify-between justify-self-center gap-5 p-3 bg-[#F5F5F5]">
                                            <h1>Belum ada apa-apa</h1>
                                        </div>
                                    </main>
                                </>
                            ) : (
                                <>
                                    {cartItems.map((data, i) => {
                                        return (
                                            <div key={i}>
                                                <div>
                                                    <CheckoutProduct
                                                        // onDelete={() => handleDelete(data.cart_item_id, data.size_name, data.variant_name)}
                                                        size={data.size_name}
                                                        temp={data.variant_name}
                                                        quantity={data.quantity}
                                                        name={data.product_name}
                                                        image={data.image_path}
                                                        oldPrice={data.base_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                        newPrice={data.discount_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                        // is_flash_sale={data.is_flash_sale == true ? "Flash Sale" : ""}
                                                        is_flash_sale={data.discount_rate > 3 ? "Flash Sale" : ""}
                                                        />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </>
                            )}
                        </section>
                        <table className="my-5 md:w-[40%] w-[80%] mx-auto">
                            <thead>
                                <tr><td>Total</td></tr>
                            </thead>
                            <tbody className="[&>tr]:bg-[#F5F5F5] [&>tr]:flex [&>tr]:justify-between [&>tr]:w-full [&>tr]:py-5 [&>tr>td]:mx-5 [&>tr>span]:mx-5">
                                <tr>
                                    <td>Order</td>
                                    <td>{totalDiscountPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td>
                                        {
                                            currentOngkir.toLocaleString('id-ID', {
                                                style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0
                                            })}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>{tax.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                </tr>
                                <tr className="border-t pt-2">
                                    <td>Sub Total</td>
                                    <td>{grandTotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                </tr>
                                <tr className="text-center ">
                                    <td className="text-center bg-[#FF8906] w-full py-2 rounded cursor-pointer">
                                        <button type="submit" className="w-full">Submit</button>
                                    </td>
                                </tr>
                                <tr className="text-center ">
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BANK_BRI_logo_%28vertical%29.svg/120px-BANK_BRI_logo_%28vertical%29.svg.png" alt="bri" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/960px-Logo_dana_blue.svg.png?20200124191307" alt="dana" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/960px-Bank_Central_Asia.svg.png?20200318082802" alt="bca" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/120px-Gopay_logo.svg.png?20251006142655" alt="gopay" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/960px-Logo_ovo_purple.svg.png?20210603100330" alt="ovo" />
                                    </td>
                                    <td className="text-center vetical-center w-full py-2 rounded">
                                        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/250px-PayPal.svg.png?20241230110020" alt="paypal" />
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
                <div className="w-full my-5  flex flex-col gap-5" >
                    <CheckoutInput value={"email"} text="Email" placeholder={dataLogin.email ?? "Enter Your Email"} registerInput={register("email")} >
                        <MdOutlineEmail size="30" />
                    </CheckoutInput>
                    <CheckoutInput value={"name"} text="Full Name" placeholder={dataLogin.name ?? "Enter Your Name"} registerInput={register("name")}>
                        <IoPersonOutline size="30" />
                    </CheckoutInput>
                    <CheckoutInput value="address" text="Address" placeholder="Enter Your Address" registerInput={register("address")}>
                        <HiOutlineLocationMarker size="30" />
                    </CheckoutInput>
                    <div className="flex flex-col md:flex-row gap-5 justify-between items-center [&>label]:text-center [&>label]:px-10 [&>label]:py-1 [&>label]:border [&>label]:rounded ">
                        {options.map((option, i) => (
                            <label
                                key={i}
                                className={`cursor-pointer ${watchDelivery === option ? "border-[#FF8906]" : "border-black"}`}
                            >
                                <input
                                    type="radio"
                                    id={`delivery-${i}`}
                                    value={option}
                                    hidden
                                    {...register("delivery")}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                </div>
            </section>
        </form>
    )
}