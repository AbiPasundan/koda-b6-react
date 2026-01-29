import { FiShoppingCart } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

function ImageCard({children}) {
    return (
    <section>
        <img src="/src/assets/img/userimg/home.png" width='300px' alt="product" />
        {children}
        {/* <span className="absolute left-3 top-5 p-1 rounded-xl text-white bg-[#D00000] ">Flash Sale</span> */}
    </section>)
}

function CardHeader(){
    return (
        <>
            <h2 className="text-[#0B132A] text-[22px] ">Hazelnut Latte</h2>
            <p className="text-[#4F5665] text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum delectus porro at repellendus numquam.</p>
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

function Price({children, normalPrice}){
    return(
        <div className="flex flex-wrap items-center gap-5">
            {children}
            <span className="text-[#FF8906] font-medium text-[22px]">IDR {normalPrice}</span>
        </div>
    )
}
function ButtonCard(){
    return(
        <div className="flex items-center text-center justify-center gap-5 my-2">
            <button className="w-[70%] bg-[#FF8906] p-1 rounded">Buy</button>
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
    return (
        <>
            <main className="relative flex flex-col max-w-[300px]">
                <ImageCard>
                    {/* <span className="absolute left-3 top-5 p-1 rounded-xl text-white bg-[#D00000] ">Flash Sale</span> */}
                </ImageCard>
                <CardWrapper>
                    <CardHeader />
                    <Price normalPrice="20.000"></Price>
                    <ButtonCard />
                </CardWrapper>
            </main>
        </>
    )
}

export {Card, HomeCard}