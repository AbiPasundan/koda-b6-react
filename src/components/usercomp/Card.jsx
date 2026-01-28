import { FiShoppingCart } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

export default function Card() {
    return (
        <>
            <main className="relative flex flex-col max-w-[300px]">
                <section className="">
                    <img src="/src/assets/img/userimg/home.png" width='300px' alt="product" />
                    <span className="absolute left-3 top-5 bg-red-100 p-1 rounded-xl ">Flash Sale</span>
                </section>
                <section className="w-[90%] bg-red-300 relative -top-10 flex flex-col px-3 py-1 mx-auto">
                    <div className="flex flex-col gap-5  ">
                        <h2>Hazelnut Latte</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum delectus porro at repellendus numquam.</p>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>
                            <span>5.0</span>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <span>IDR 10.000</span>
                            <span>IDR 20.000</span>
                        </div>
                        <div className="flex items-center text-center justify-center gap-5 my-2">
                            <button className="w-[80%] bg-blue-100 p-1 rounded">Buy</button>
                            <button className="w-[10%] bg-blue-100 px-1 py-[1px] flex text-center justify-center rounded-md">
                                <FiShoppingCart size={28} color='red' />
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}