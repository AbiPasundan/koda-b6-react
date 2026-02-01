import { FiShoppingCart } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";

function ImageCard({children, img, link}) {
    return (
    <Link to={`/detailproduct/${link}`} className="w-[300px]" >
        <img src={img} alt="product" className="w-full" />
        {children}
    </Link >)
}

function CardHeader({productName, desc}){
    return (
        <>
            <h2 className="text-[#0B132A] text-[22px] ">{productName}</h2>
            <p className="text-[#4F5665] text-[14px]">{desc}</p>
        </>
    )
}

function Rattings(){
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="flex gap-1">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <span className="text-[#4F5665] text-sm">5.0</span>
            </div>
        </>
    )
}

function Price({children, currentPrice}){
    return(
        <div className="flex flex-wrap items-center gap-5">
            {children}
            <span className="text-[#FF8906] font-medium text-[22px]">IDR {currentPrice}</span>
        </div>
    )
}
function ButtonCard({children, link}){
    return(
        <div className="flex items-center text-center justify-center gap-5">
            <Link to={`/detailproduct/${link}`} className="w-[70%] bg-[#FF8906] p-1 rounded">Buy</Link>
            <button className="w-[15%] p-1 border flex text-center justify-center rounded-md">
                {children}
            </button>
        </div>
    )
}
function CardWrapper({children}){
    return(
        <section className="w-[90%] bg-white relative -top-10 flex flex-col px-3 py-1 mx-auto">
            <div className="flex flex-col gap-5 ">
                {children}
            </div> 
        </section>
    )
}

function Card() {
    const [dataApi, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getData() {
            try {
                const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
                console.log(api)
                const { menu } = await api.json()
                setData(menu)
                console.log(menu[0].name)
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        getData()
    }, [])    
    return (
        <>
            <main className="relative flex flex-col max-w-[300px]">
                <ImageCard />
                <CardWrapper>
                    <CardHeader />
                    <Rattings />
                    <Price />
                    <ButtonCard />
                </CardWrapper>
            </main>
        </>
    )
}
function HomeCard() {
    const [dataApi, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const limit = 4
    async function getData() {
        try {
            const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
            const { menu } = await api.json()
            setData(menu)
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    
    const onClick = e => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        cart.push(e)
        console.log(cart)
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return (
     <>
        {!isLoading && !error && (
        <>
        {dataApi.slice(0, limit).map((item, index) => (
        <main key={item.id ? item.id :index} className="relative flex justify-items-start justify-center justify-self-start self-start flex-col max-w-[300px]">
            <ImageCard img={item.image} link={item.id} />
            <CardWrapper>
                <CardHeader productName={item.name} desc={item.description} />
                <Rattings />
                <Price currentPrice={item.newPrice} />
                <ButtonCard link={item.id}>
                    <FiShoppingCart onClick={() => onClick(item) } className="z-10" size={22} color='#FF8906' />
                </ButtonCard>
            </CardWrapper>
        </main>
        ))}
        </>
        )}
     </>
    )
}

function ProductCard() {
    const [dataApi, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getData() {
            try {
                const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
                console.log(api)
                const { menu } = await api.json()
                setData(menu)
                console.log(menu[0].name)
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        getData()
    }, [])
    const onClick = e => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        cart.push(e)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return (
     <>
        {!isLoading && !error && (
        <>
        {dataApi.map((item, index) => (
        <main key={item.id ? item.id :index} className="relative flex flex-col max-w-[300px]">
            <ImageCard img={item.image} link={item.id} >
                <span className="absolute left-3 top-5 p-1 rounded-xl text-white bg-[#D00000] ">Flash Sale</span>
            </ImageCard>
            <CardWrapper>
                <CardHeader productName={item.name} desc={item.description} />
                <Rattings />
                <Price currentPrice={item.newPrice}>
                    <span className="text-[#D00000] line-through font-medium text-[12px]">{item.oldPrice}</span>
                </Price>
                <ButtonCard link={item.id}>
                    <FiShoppingCart onClick={() => onClick(item) } className="z-10" size={22} color='#FF8906' />
                </ButtonCard>
            </CardWrapper>
        </main>
        ))}
        </>
        )}
     </>
    )
}
function DetailProductCard() {
    const onClick = e => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        cart.push(e)
        console.log(cart)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    const [dataApi, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const limit = 3
    useEffect(() => {
        async function getData() {
            try {
                const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
                console.log(api)
                const { menu } = await api.json()
                // setData(menu)
                // console.log(menu.sort().reverse())
                const menuName = []
                menu.forEach(e => {
                    // console.log(e.name)
                    menuName.push(e.name)
                });
                // console.log(menuName.sort(() => 0.5 - Math.random()).slice(0, 4))
                setIsLoading(false);
                // const shuffled = menu.sort(() => 0.5 - Math.random());
                // const limited = shuffled.slice(0, limit);
                const result = menu.sort(() => 0.5 - Math.random()).slice(0, 3)
                // console.log(result)
                setData(result)
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        getData()
    }, [])
    return (
     <>
        {!isLoading && !error && (
        <>
        {dataApi.map((item, index) => (
        <main key={item.id ? item.id :index} className="relative flex flex-col max-w-[300px]">
            <ImageCard img={item.image} link={item.id} >
            <span className="absolute left-3 top-5 p-1 rounded-xl text-white bg-[#D00000] ">Flash Sale </span>
            </ImageCard>
            <CardWrapper>
                <CardHeader productName={item.name} desc={item.description} />
                <Rattings />
                <Price currentPrice={item.newPrice}>
                    <span className="text-[#D00000] line-through font-medium text-[12px]">{item.oldPrice}</span>
                </Price>
                <ButtonCard link={item.id}>
                    <FiShoppingCart onClick={() => onClick(item) } className="z-10" size={22} color='#FF8906' />
                </ButtonCard>
            </CardWrapper>
        </main>
        ))}
        </>
        )}
     </>
    )
}

export {Card, HomeCard, Rattings, ProductCard, DetailProductCard}