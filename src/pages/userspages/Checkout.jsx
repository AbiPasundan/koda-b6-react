import { Nav, Footer } from "@/App"



export default function Checkout(){
    return (
        <>
            <Nav bg="bg-red-400" />
            <header className="m-10 text-[#0B0909] text-5xl">
                <h1>Payment Detail</h1>
            </header>
            <main>
                <section></section>
                <section className="flex flex-col">
                    <div className="flex justify-center gap-10">
                        <section className="w-[50%] bg-sky-100">
                            <header className="flex items-center justify-between">
                                <h4>Your Order</h4>
                                <h4 className="bg-[#FF8906] p-2 rounded-xl"> + Add Menu</h4>
                            </header>
                            <main>
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
                        </section>
                        <table className="bg-green-100 w-[40%]">
                            <tbody>
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
                                <tr>
                                    <span>Submit</span>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <section></section>
            <Footer />
        </>
    )
}