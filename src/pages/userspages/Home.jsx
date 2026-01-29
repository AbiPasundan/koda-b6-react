import {Card, HomeCard} from "@/components/usercomp/Card"
import Nav from "@/components/usercomp/Nav"
import { Link } from "react-router"

function Hero() {
    return (
        <>
            <main className="grid md:grid-cols-2 " >
                <section className="bg-[#777C82] bg-[linear-gradient(180deg,_rgba(119,_124,_130,_1)_0%,_rgba(11,_9,_9,_1)_66%)] flex w-full max-h-[130vh] ">
                    <div className="flex flex-col justify-center items-start mx-10 gap-5">
                        <h1 className="text-5xl text-white">Start Your Daily With Coffee and Good Meals</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reprehenderit repudiandae sequi animi dicta vitae dolorum nam a. Porro, quia.</p>
                        <Link className="px-5 py-3 bg-[#FF8906] rounded">Get Started</Link>
                        <div className="flex gap-5 items-center justify-between text-[#FF8906]">
                            <span className="border-r-1 px-5"> <p className="text-3xl">90+</p><br /> Staff</span>
                            <span className="border-r-1 px-5"> <p className="text-3xl">30+</p><br /> Store</span>
                            <span><p className="text-3xl"> 800+ </p><br /> Customer</span>
                        </div>
                    </div>
                </section>
                <section className="flex max-h-[130vh] ">
                    <img src="/src/assets/img/userimg/home.png"  className="w-full overflow-hidden" alt="main image" />
                </section>
                
            </main>
        </>
    )
}

function About() {
    return (
        <>
            <main className="md:grid md:grid-cols-2 flex flex-col-reverse " >
                <section className="bg-[#FFFFFF] flex w-full max-h-[130vh] flex flex-wrap flex-col">
                    <div className="mx-10 md:mx-20 my-auto">
                        <div className=" border-l-2 border-[#ff8906] my-10">
                            <h2 className="px-5 text-3xl md:text-5xl [&>span]:text-[#8E6447] ">We Provide <span> Good Coffee </span>and<span>  Healthy Meals</span> </h2>
                        </div>
                        <div className="text-sm md:text[16px] md:text-md text-[#4F5665] my-10 ">
                            You can explore the menu what we provide with fun and have their own taste and make your day better
                        </div>
                        <ul className="text-sm md:text-m my-5 flex flex-col text-[#4F5665] gap-5">
                            <li>Hight Quality</li>
                            <li>Helathy Meals, you can request the ingredients</li>
                            <li>Free member card with a minimum purchase of IDR 200.000</li>
                            <li>Chat with our staff to get better experience for ordering</li>
                        </ul>
                    </div>
                </section>
                <section className="flex max-h-[130vh] ">
                    <img src="/src/assets/img/userimg/barista.png"  className="w-full overflow-hidden" alt="main image" />
                </section>
                {/* <section className="bg-[#09f090] flex w-full max-h-[130vh]"></section> */}
            </main>
        </>
    )
}

function ProductCard() {
    return (
        <>
            <section className="flex flex-col my-10 justify-center items-center gap-5 ">
                <h1 className="flex justify-center items-center text-[#0B132A] text-5xl">Here is People's <span className="text-[#8E6447]"> Favorite</span> </h1>
                <p className="text-[#4F5665]">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            </section>
            <section className="flex flex-row flex-wrap my-10 justify-center items-center gap-3 ">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </section>
        </>
    )
}

export default function Home(){
    return(
        <>
        <Nav bg="bg-[#777C82] bg-[linear-gradient(90deg,rgba(119,_124,_130,_1)_50%,_rgba(11,_9,_9,_1)_100%)]"/> 
        <Hero/>
        <About/>
        <ProductCard />
        </>
    )
}