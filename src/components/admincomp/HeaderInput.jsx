import { LuPlus } from "react-icons/lu";
import { GrSearch } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { Children } from "react";

function Left(props) {
    return (
        <section className="flex flex-col  justify-between gap-3">
            <h2 className="font-normal text-2xl">{props.title}</h2>
            <button className="flex flex-row p-1 rounded-xl bg-[#ff8906] items-center gap-1">
                <LuPlus/> <span className="text-sm font-normal">{props.text}</span>
            </button>
        </section>
    )
}


function TextInputSearch(props) {
    return <span className="text-sm">{props.text}</span>;
}

function InputSearch(props) {
    return (
        <label htmlFor="search" className="flex flex-col justify-center"> 
            <TextInputSearch text={props.text} />
            <div className="flex items-center p-1 mx-3 rounded border-2 border-[#787878] ">
                <input type="text" className="w-[140px] md:w-[220px] px-3" name="search" id="search" placeholder="Enter Product Name" />
                <GrSearch />
            </div>
        </label>
    )
}


function Right({children}) {
    return (
        <form className="flex items-start items-center flex-row gap-5 md:items-end">
            {children}
            <label htmlFor="filter" className="border-none flex flex-row p-2 rounded-xl bg-[#ff8906] items-center gap-1 ">
                <HiFilter />
                <span >Filter</span>
            </label>
        </form>
    )
}



function HeaderInputProduct() {
    return (
        <main className="flex justify-between items-start flex-col md:flex-row md:items-end">
            <Left title="Product List" text="Add Product"/>
            <section>
                <Right> 
                    <InputSearch text="Search Product" />
                </Right>
            </section>
        </main>
    )
}
function HeaderInputOrder() {
    return (
        <main className="flex justify-between items-start flex-col md:flex-row md:items-end">
            <Left title="Product List" text="Add Product"/>
            <section>
                <Right> 
                    <InputSearch text="Status" />
                    <InputSearch text="Search Order" />
                </Right>
            </section>
        </main>
    )
}
function HeaderInputUser() {
    return (
        <main className="flex justify-between items-start flex-col md:flex-row md:items-end">
            <Left title="Product List" text="Add Product"/>
            <section>
                <Right> 
                    <InputSearch text="Search User" />
                </Right>
            </section>
        </main>
    )
}

export { HeaderInputProduct, HeaderInputOrder, HeaderInputUser}