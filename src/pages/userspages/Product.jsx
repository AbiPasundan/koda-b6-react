import Nav from '/src/components/usercomp/Nav'
import Footer from '/src/components/usercomp/Footer'
import { ProductCard, Rattings } from '@/components/usercomp/Card';

import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";

import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";


function ProductHero() {
    return (
        <main className="flex items-center justify-center h-[40vh] mx-auto  bg-[url('https://placehold.co/600x400')] bg-no-repeat bg-cover">
            <h1 className="mx-10 font-bold md:text-5xl text-3xl">We Provide Good Coffee and Healthy Meals</h1>
        </main>
    )
}

function MobileFilter() {
    return (
        <>
            <main className='flex items-center justify-center gap-5 md:hidden'>
                <label htmlFor="search" className='flex items-center p-3 gap-5 border rounded '>
                    <IoMdSearch />
                    <input type="text" name="search" id="search" placeholder='Find Product' />
                </label>
                <div>
                    <PiSlidersHorizontalBold color='red' size="40" className=' bg-[#88B788] rounded' />
                </div>
            </main>
        </>
    )
}

function ProductCarousel() {
    return (
        <>
            <div className="flex justify-around mt-10 stikcy w-full">
                <h2>Today's Promo</h2>
                <span className="flex gap-5">
                    <FaCircleArrowLeft />
                    <FaCircleArrowRight />
                </span>
            </div>
            <main className="flex flex-col items-center justify-center overflow-x-scroll gap-5 bg-blue-100 ">
                <div className="flex flex-row items-center justify-center gap-5 bg-green-100 py-5"> 
                    <section className='flex p-3 gap-5 bg-[#88B788] rounded-xl '>
                        <div className='w-[106px] '>
                            <img src="https://placehold.co/600x400" alt="avatar" />
                        </div>
                        <div className='flex flex-col [&>p]:my-2 '>
                            <h2 className='font-bold'>Happy Mother Days</h2>
                            <p className='font-normal'>Get one of our menu for free</p>
                            <span className=''>klaim kupon</span>
                        </div>
                    </section>
                    <section className='flex p-3 gap-5 bg-[#88B788] rounded-xl '>
                        <div className='w-[106px] '>
                            <img src="https://placehold.co/600x400" alt="avatar" />
                        </div>
                        <div className='flex flex-col [&>p]:my-2 '>
                            <h2 className='font-bold'>Happy Mother Days</h2>
                            <p className='font-normal'>Get one of our menu for free</p>
                            <span className=''>klaim kupon</span>
                        </div>
                    </section>
                    <section className='flex p-3 gap-5 bg-[#88B788] rounded-xl '>
                        <div className='w-[106px] '>
                            <img src="https://placehold.co/600x400" alt="avatar" />
                        </div>
                        <div className='flex flex-col [&>p]:my-2 '>
                            <h2 className='font-bold'>Happy Mother Days</h2>
                            <p className='font-normal'>Get one of our menu for free</p>
                            <span className=''>klaim kupon</span>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

function ProductLists() {
    return (
        <>
            <ProductCard />
        </>
    )
}

function ProductFilter() {
    return (
    <>
        <section className='sticky md:flex flex-col gap-5 p-5 bg-black text-white max-w-[30%] hidden '>
            <header className='flex'>
                <h4>Filter</h4>
                <h4>Reset Filter</h4>
            </header>
            <div className='flex gap-3 flex-col'>
                <span>Search</span>
                <label htmlFor="search" className='p-3 border border-red-800 rounded-xl bg-white text-red-900 '>
                    <input type="text" name="search" id="search" className='outline-none' placeholder='Search Your Product'/>
                </label>
            </div>
            <div className='flex flex-col gap-10 [&>ul>h4]:text-[18px] [&>ul>h4]:font-bold '>
                <ul className='flex flex-col gap-2'>
                    <h4>Category</h4>
                    <li>Favorit Product</li>
                    <li>Non Coffe</li>
                    <li>Coffe</li>
                    <li>Foods</li>
                    <li>Add On</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <h4>Sort By</h4>
                    <li>Favorit Product</li>
                    <li>Non Coffe</li>
                    <li>Coffe</li>
                    <li>Foods</li>
                    <li>Add On</li>
                </ul>
            </div>
        </section>
    </>
    )
}

function MainProductFilter() {
    return (
        <>
        <div className='flex flex-wrap gap-3'>
            <ProductFilter />
            <div className='flex flex-row flex-wrap gap-3 flex-1 justify-center'>
                <ProductLists />
                <ProductLists />
                <ProductLists />
                <ProductLists />
                <ProductLists />
                <ProductLists />
            </div>
        </div>
        <section className='flex flex-row justify-center items-center gap-5 my-10 [&>span]:py-[3px] [&>span]:px-[10px] [&>span]:bg-[#FF8906] [&>span]:rounded-full '>
            <span>1</span><span>2</span><span>3</span><span>3</span><span><FaCircleArrowRight color size={24} /></span>
        </section>
        </>
    )
}


export default function Product(){
    return (
        <>
            <Nav bg="bg-red-900" />
            <ProductHero />
            <MobileFilter />
            <ProductCarousel />
            <MainProductFilter />
            {/* <ProductCard /> */}
            <Footer />
        </>
    )
}