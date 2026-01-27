import { LuPlus } from "react-icons/lu";
import { GrSearch } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

export default function HeaderInput() {
    return (
        <main className="flex justify-between items-end">
            <section className="flex flex-col  justify-between gap-3">
                <h2 className="font-normal text-2xl">Product List</h2>
                <button className="flex flex-row p-2 rounded-xl bg-[#ff8906] items-center gap-1">
                    <LuPlus/> <span>Add Product</span>
                </button>
            </section>
            <section>
                <form className="flex items-end  gap-3">
                    <label htmlFor="search" className="flex flex-col justify-center">
                        <span className="text-sm">Search Order</span>
                        <div className="flex p-1 rounded border-2 border-[#787878] ">
                            <input type="text" name="search" id="search" placeholder="Enter Product Name" className=""/>
                            <GrSearch />
                        </div>
                    </label>
                    <label htmlFor="filter" className="border-none flex flex-row p-2 rounded-xl bg-[#ff8906] items-center gap-1 ">
                        <HiFilter />
                        <span >Filter</span>
                    </label>
                </form>
            </section>
        </main>
    )
}