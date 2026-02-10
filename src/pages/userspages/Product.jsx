import { ProductCard } from '@/components/usercomp/Card';

import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";

import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductFetchContext } from '@/components/hook/ProductFetchContext';


function ProductHero() {
    return (
        <main className="flex items-center justify-center h-[40vh] mx-auto  bg-[url('/src/assets/img/userimg/heroproduct.png')] bg-no-repeat bg-cover">
            <h1 className="mx-10 font-bold text-[#FFFFFF] md:text-5xl text-3xl">We Provide Good Coffee and Healthy Meals</h1>
        </main>
    )
}

function MobileFilter() {
    return (
        <>
            <main className='flex items-center justify-center my-10 gap-5 md:hidden'>
                <label htmlFor="search" className='flex items-center p-3 gap-5 border rounded '>
                    <IoMdSearch />
                    <input type="text" name="search" id="search" placeholder='Find Product' />
                </label>
                <div>
                    <PiSlidersHorizontalBold color='black' size="40" className=' bg-[#FF8906] rounded' />
                </div>
            </main>
        </>
    )
}

function ProductCarouselComp({ img, title, text, bg = "bg-[#88B788]" }) {
    return (
        <>
            <section className={`flex p-3 gap-5 ${bg} rounded-xl min-w-[400px]`}>
                <div className='w-[30%]'>
                    <img src={img} alt="avatar" />
                </div>
                <div className='flex flex-col [&>p]:my-2 w-[70%] nowrap '>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='font-normal'> {text} </p>
                    <span>klaim kupon</span>
                </div>
            </section>
            <section className={`flex p-3 gap-5 ${bg} rounded-xl min-w-[400px]`}>
                <div className='w-[30%]'>
                    <img src={img} alt="avatar" />
                </div>
                <div className='flex flex-col [&>p]:my-2 w-[70%] nowrap '>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='font-normal'> {text} </p>
                    <span>klaim kupon</span>
                </div>
            </section>
            <section className={`flex p-3 gap-5 ${bg} rounded-xl min-w-100`}>
                <div className='w-[30%]'>
                    <img src={img} alt="avatar" />
                </div>
                <div className='flex flex-col [&>p]:my-2 w-[70%] nowrap '>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='font-normal'> {text} </p>
                    <span>klaim kupon</span>
                </div>
            </section>
        </>

    )
}

function ProductCarousel() {
    return (
        <>
            <div className="flex justify-around items-center mt-10 stikcy w-full">
                <h2 className='md:text-5xl text-3xl'>Today's <span className='text-[#8E6447]'>Promo</span></h2>
                <span className="flex gap-5">
                    <FaCircleArrowLeft size="30" />
                    <FaCircleArrowRight size="30" />
                </span>
            </div>
            <main className=" flex flex-col  justify-start overflow-x-auto gap-5 ">
                <div className="mx-10 my-10 flex flex-row  justify-start gap-5  py-5">
                    <ProductCarouselComp img="/src/assets/img/userimg/women.png" title="Happy Mother Days" text="Get one of our menu for free" />
                    <ProductCarouselComp bg="bg-[#F5C361]" img="/src/assets/img/userimg/man.png" title="Get a cup of coffee for free on sunday morning" text="Only at 7 to 9 AM" />
                </div>
            </main>
        </>
    )
}

function ProductFilter() {
    const defaultValues = {
        search: "",
        category: [],
        sort: [],
        range: {}
    }
    const { register, handleSubmit, reset, } = useForm({ defaultValues })
    const onSubmit = e => {
        console.log("berhas")
        console.log(e)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-10 rounded-xl sticky md:flex flex-col gap-5 p-5 bg-black text-white max-w-[30%] hidden '>
                <header className='flex justify-between'>
                    <h4>Filter</h4>
                    <button onClick={() => reset({ ...defaultValues })}>Reset Filter</button>
                </header>
                <div className='flex gap-3 flex-col'>
                    <span>Search</span>
                    <label htmlFor="search" className='p-3 border border-red-800 rounded-xl bg-white text-red-900 '>
                        <input type="text" {...register("search")} id="search" className='outline-none' placeholder='Search Your Product' />
                    </label>
                </div>
                <div className='flex flex-col gap-10 [&>ul>h4]:text-[18px] [&>form>h4]:font-bold [&>form>label>input]:mr-5 [&>form>label>input]:accent-[#FF8906] '>
                    <div className='flex flex-col gap-2'>
                        <h4>Category</h4>
                        <label htmlFor="favorit">
                            <input type="checkbox" {...register("category")} value="favorite" id="favorit" />
                            <span>Favorit Product</span>
                        </label>
                        <label htmlFor="noncoffe">
                            <input type="checkbox" {...register("category")} value="coffe" id="noncoffe" />
                            <span>Non Coffe</span>
                        </label>
                        <label htmlFor="coffee">
                            <input type="checkbox" {...register("category")} value="foods" id="coffee" />
                            <span>Coffe</span>
                        </label>
                        <label htmlFor="foods">
                            <input type="checkbox" {...register("category")} value="favorit" id="foods" />
                            <span>Foods</span>
                        </label>
                        <label htmlFor="addon">
                            <input type="checkbox" {...register("category")} value="addon" id="addon" />
                            <span>Add On</span>
                        </label>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4>Sort By</h4>
                        <label htmlFor="freeone">
                            <input type="checkbox" {...register("sort")} value="freeone" id="freeone" />
                            <span>Buy1 get1</span>
                        </label>
                        <label htmlFor="flashsale">
                            <input type="checkbox" {...register("sort")} value="flashsale" id="flashsale" />
                            <span>Flash Sale</span>
                        </label>
                        <label htmlFor="birthday">
                            <input type="checkbox" {...register("sort")} value="birthday" id="birthday" />
                            <span>BirthDay Package</span>
                        </label>
                        <label htmlFor="cheap">
                            <input type="checkbox" {...register("sort")} value="cheap" id="cheap" />
                            <span>Cheap</span>
                        </label>
                    </div>
                </div>
                <div className='flex gap-3 flex-col'>
                    <span>Range Price</span>
                    <label htmlFor="search" className='p-3 border border-red-800 rounded-xl bg-white text-red-900 '>
                        <input type="range" name="rangeMin" id="rangeMin" className='outline-none' />
                        <input type="range" name="rangeMax" id="rangeMax" className='outline-none' />
                    </label>
                </div>
                <div className='flex gap-3 flex-col'>
                    <span>Range Price</span>
                    <button type='submit' htmlFor="search" className='p-3 border border-red-800 rounded-xl bg-[#FF8906] text-black '>Apply Filter</button>
                </div>
            </form>
        </>
    )
}

function MainProductFilter() {
    const { dataApi, isLoading, error } = useContext(ProductFetchContext);
    return (
        <>
            {dataApi.length == 0 ?
                (
                    <main className="my-5">
                        <div className="flex justify-between justify-self-center gap-5 p-3 bg-[#F5F5F5]">
                            <h1>Loading</h1>
                        </div>
                    </main>
                )
                :
                (
                    <>
                        {!isLoading && !error && (
                            <>
                                    <>
                                        <div className='flex flex-wrap gap-3'>
                                            <ProductFilter />
                                            <div className='flex flex-row flex-wrap gap-3 flex-1 justify-center'>
                                                {dataApi.map(item => (
                                                    <ProductCard key={item.id} image={item.image} id={item.id} name={item.name} description={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                                                ))}
                                            </div>
                                        </div>
                                        <>
                                            <section className='flex flex-row justify-center items-center gap-5 my-10 [&>span]:py-0.75 [&>span]:px-2.5 [&>span]:bg-[#FF8906] [&>span]:rounded-full '>
                                                <span>1</span><span>2</span><span>3</span><span>3</span><span><FaCircleArrowRight size={24} /></span>
                                            </section>
                                        </>
                                    </>
                            </>
                        )}
                    </>
                )
            }
        </>
    )
}


export default function Product() {
    return (
        <>
            <ProductHero />
            <MobileFilter />
            <ProductCarousel />
            <MainProductFilter />
        </>
    )
}