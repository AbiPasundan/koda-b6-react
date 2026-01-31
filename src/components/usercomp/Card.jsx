import { FiShoppingCart } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import React, { useEffect, useState } from "react";

function ImageCard({children, img}) {
    return (
    <Link to="/detailproduct">
        <img src={img} width='300px' alt="product" />
        {children}
    </Link >)
    // "/src/assets/img/userimg/home.png"
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
function ButtonCard(){
    return(
        <div className="flex items-center text-center justify-center gap-5">
            <Link to="/detailproduct" className="w-[70%] bg-[#FF8906] p-1 rounded">Buy</Link>
            <button className="w-[15%] p-1 border flex text-center justify-center rounded-md">
                <FiShoppingCart size={22} color='#FF8906' />
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
    async function getData() {
        try {
            const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
            // console.log(api)
            const { menu } = await api.json()
            setData(menu)
            // console.log(api)
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
     <>
        {!isLoading && !error && (
        <main className="relative flex flex-col max-w-[300px]">
        {dataApi.map((item, index) => (
            <React.Fragment key={item.id ?? index}>
                <ImageCard img={item.image} />
                <CardWrapper>
                    <CardHeader productName={item.name} desc={item.description} />
                    <Price currentPrice={item.newPrice} />
                    <ButtonCard />
                </CardWrapper>
            </React.Fragment>
        ))}
        </main>
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
    return (
     <main className="relative flex flex-col max-w-[300px]">
        {!isLoading && !error && (
        <>
        {dataApi.map((item, index) => (
        <>
        <ImageCard img={item.image} >
        <span className="absolute left-3 top-5 p-1 rounded-xl text-white bg-[#D00000] ">Flash Sale</span>
        </ImageCard>
        <CardWrapper>
            <CardHeader productName={item.name} desc={item.description} />
            <Rattings />
            <Price currentPrice={item.newPrice}>
                <span className="text-[#D00000] line-through font-medium text-[12px]">{item.oldPrice}</span>
            </Price>
            <ButtonCard />
        </CardWrapper>
        </>
        ))}
        </>
        )}
     </main>
    )
}

export {Card, HomeCard, Rattings, ProductCard}