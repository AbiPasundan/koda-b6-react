import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProductFetchContext } from '@/components/hook/ProductFetchContext';
import { ProductCard } from '@/components/usercomp/Card';

import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

function ProductHero() {
    return (
        <main className="flex items-center justify-center h-[40vh] mx-auto bg-[url('/src/assets/img/userimg/heroproduct.png')] bg-no-repeat bg-cover">
            <h1 className="mx-10 font-bold text-white md:text-5xl text-3xl text-center">
                We Provide Good Coffee and Healthy Meals
            </h1>
        </main>
    );
}

function MobileFilter({ onOpen, setFilters }) {
    return (
        <div className='flex items-center justify-center my-10 gap-5 md:hidden px-5'>
            <label htmlFor="search-mob" className='flex items-center p-3 gap-5 border rounded-xl flex-1'>
                <IoMdSearch />
                <input type="text" id="search-mob" placeholder='Find Product' className="outline-none w-full" onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))} />
            </label>
            <button onClick={onOpen} className='bg-[#FF8906] p-2 rounded-lg'>
                <PiSlidersHorizontalBold color='black' size="32" />
            </button>
        </div>
    );
}

function ProductCarousel() {
    return (
        <section className="w-full mb-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className='md:text-5xl text-3xl font-medium'>Today's <span className='text-[#8E6447]'>Promo</span></h2>
                <div className="flex gap-3">
                    <FaCircleArrowLeft size="30" className="cursor-pointer text-gray-400 hover:text-black" />
                    <FaCircleArrowRight size="30" className="cursor-pointer text-gray-400 hover:text-black" />
                </div>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-5 no-scrollbar">
                <PromoCard bg="bg-[#88B788] text-[14px] " img="/src/assets/img/userimg/women.png" title="Happy Mother Days" text="Get one of our menu for free" />
                <PromoCard bg="bg-[#88B788] text-[14px] " img="/src/assets/img/userimg/women.png" title="Happy Mother Days" text="Get one of our menu for free" />
                <PromoCard bg="bg-[#88B788] text-[14px] " img="/src/assets/img/userimg/women.png" title="Happy Mother Days" text="Get one of our menu for free" />
                <PromoCard bg="bg-[#F5C361] text-[14px]" img="/src/assets/img/userimg/man.png" title="Sunday Morning" text="Only at 7 to 9 AM" />
            </div>
        </section>
    );
}

function PromoCard({ img, title, text, bg }) {
    return (
        <div className={`flex p-4 gap-4 ${bg} rounded-2xl min-w-75 md:min-w-87.5`}>
            <img src={img} alt={title} className="w-20 h-20 object-cover" />
            <div>
                <h4 className='font-bold text-sm'>{title}</h4>
                <p className='text-xs my-1'>{text}</p>
                <span className="text-[10px] font-bold underline cursor-pointer">Klaim Kupon</span>
            </div>
        </div>
    );
}

function ProductFilter({ isVisible, setFilters, setCurrentPage }) {
    const defaultValues = {
        search: "",
        category: [],
        sort: [],
        range: {}
    }
    const { register, handleSubmit, reset } = useForm({ defaultValues });


    const onSubmit = (data) => {

        const formattedData = {
            ...data,
            category: Array.isArray(data.category) ? data.category : (data.category ? [data.category] : []),
            // sort: Array.isArray(data.sort) ? data.sort : (data.sort ? [data.sort] : [])
        };

        setFilters(formattedData);
        setCurrentPage(1);
    };
    const handleReset = () => {
        reset(defaultValues);
        setFilters(defaultValues);
        setCurrentPage(1);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${isVisible ? 'flex' : 'hidden'} md:flex flex-col gap-6 p-6 bg-black text-white rounded-2xl h-fit sticky top-5 w-full md:max-w-70 z-999`}>
            <div className='flex justify-between items-center'>
                <h4 className="text-xl font-bold">Filter</h4>
                <button type="button" onClick={() => handleReset} className="text-sm text-gray-400">Reset</button>
            </div>

            <div className='hidden md:flex flex-col gap-2'>
                <span className="font-semibold text-orange-400">Search</span>
                <input {...register("search")} className='p-2 rounded-lg text-black bg-[#FCFDFE] outline-none' placeholder='Search...' />
            </div>

            <div className='flex flex-col gap-4'>
                <FilterGroup title="Category" register={register} name="category"
                    options={['Favorite', 'Coffe', 'Non-Coffee', 'Foods', 'Add-on']} />
                <FilterGroup title="Sort By" register={register} name="sort"
                    options={['Buy1 Get1', 'Flash Sale', 'Cheap']} />
            </div>

            <button type="submit" className='w-full py-3 bg-[#FF8906] text-black font-bold rounded-xl mt-4'>Apply Filter</button>
        </form>
    );
}

function FilterGroup({ title, options, register, name }) {
    return (
        <div className="flex flex-col gap-2">
            <h5 className="font-semibold text-orange-400">{title}</h5>
            {options.map(opt => (
                <label key={opt} className="flex items-center gap-3 text-sm cursor-pointer">
                    <input type="checkbox" {...register(name)} value={opt.toLowerCase()} className="accent-[#FF8906]" />
                    {opt}
                </label>
            ))}
        </div>
    );
}

function MainProductList({ currentPage, setCurrentPage, itemsPerPage, filters }) {
    const { dataApi, isLoading, error } = useContext(ProductFetchContext);
    console.log(filters.category)

    const products = dataApi || [];


    if (isLoading) return <div className="text-center py-10">Loading products...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error loading data.</div>;

    // const filteredProducts = dataApi.filter(product => {
    //     const matchSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
    //     console.log(matchSearch)

    //     // const matchCategory = filters.category.length === 0 || filters.category.includes(product.category?.toLowerCase())
    //     const matchCategory = filters.category.length === 0 || (product.category && filters.category.includes(String(product.category).toLowerCase()));
    //     // console.log(matchCategory)

    //     console.log(filters.category.includes(product.category?.toLowerCase()));
    //     const res = matchSearch + matchCategory
    //     // console.log(res);


    //     return matchSearch && matchCategory;
    // });

    // const filteredProducts = dataApi.filter(product => {
    //     console.log(`Item: ${product.name}, Category:`, product.category, "Type:", typeof product.category);

    //     const matchSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());

    //     const productCat = product.category ? String(product.category).toLowerCase() : "";
    //     const matchCategory = filters.category.length === 0 || filters.category.includes(productCat);

    //     return matchSearch && matchCategory;
    // });


    let filteredProducts = products.filter(product => {
        // Search Match
        const matchSearch = product.name.toLowerCase().includes((filters.search || "").toLowerCase());

        const activeCategories = Array.isArray(filters.category)
            ? filters.category
            : (filters.category ? [filters.category] : []);

        const productCat = product.category ? String(product.category).toLowerCase() : "";
        const matchCategory = activeCategories.length === 0 || activeCategories.includes(productCat);

        return matchSearch && matchCategory;
    });


    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 500, behavior: 'smooth' });
    };

    return (
        <div className="w-full">
            <div className='flex flex-wrap justify-center gap-5'>
                {currentProducts.length > 0 ? (
                    currentProducts.map(item => <ProductCard key={item.id} {...item} />)
                ) : (
                    <p className="text-gray-500">Product not found.</p>
                )}
            </div>

            {totalPages > 1 && (
                <div className='flex justify-center items-center gap-3 mt-12 mb-10'>
                    {/* Tombol Angka */}
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => paginate(pageNum)}
                                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all
                                ${currentPage === pageNum
                                        ? 'bg-[#FF8906] text-white font-bold shadow-lg'
                                        : 'bg-gray-100 hover:bg-gray-200 text-black'}`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    {/* Tombol Next */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => paginate(currentPage + 1)}
                        className={`ml-2 ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-[#FF8906]'}`}
                    >
                        <FaCircleArrowRight size={28} />
                    </button>
                </div>
            )}

            <p className="text-center text-gray-400 text-sm">
                Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, totalItems)} of {totalItems} Products
            </p>
        </div>
    );
}

export default function Product() {
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ search: "", category: [], sort: [] });
    const itemsPerPage = 8;

    return (
        <div className="min-h-screen bg-white">
            <ProductHero />
            <MobileFilter onOpen={() => setShowFilter(!showFilter)} setFilters={setFilters} />

            <div className="max-w-full mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row gap-10">
                <ProductFilter isVisible={showFilter} setFilters={setFilters} setCurrentPage={setCurrentPage} />

                <div className="flex flex-col gap-5 overflow-x-auto pb-5 no-scrollbar w-full">
                    <ProductCarousel />
                    <MainProductList
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemsPerPage={itemsPerPage}
                        filters={filters}
                    />
                </div>
            </div>
        </div>
    );
}