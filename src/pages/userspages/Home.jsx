import {HomeCard} from "@/components/usercomp/Card"
import Nav from "@/components/usercomp/Nav"
import Footer from "@/components/usercomp/Footer"
import { Rattings } from "@/components/usercomp/Card"
import { Link } from "react-router"
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { useState } from "react"

// img
import testimoni from "@/assets/img/userimg/testimoni.png"
import home from "@/assets/img/userimg/home.png"
import barista from "@/assets/img/userimg/barista.png"
import map from "@/assets/img/userimg/map.png"

function Hero() {
    return (
        <>
            <main className="grid md:grid-cols-2 md:grid-cols-2-reverse overflow-hidden h-full " >
                <section className="order-1 flex max-h-[130vh] ">
                    <img src={home}  className="w-full overflow-hidden" alt="main image" />
                </section>
                <section className="order-2 py-10 bg-[#777C82] bg-[linear-gradient(180deg,rgba(119,124,130,1)_0%,rgba(11,9,9,1)_66%)] flex w-full max-h-[130vh] ">
                    <div className="flex flex-col justify-center items-start mx-10 gap-5">
                        <h1 className="text-5xl text-white">Start Your Daily With Coffee and Good Meals</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reprehenderit repudiandae sequi animi dicta vitae dolorum nam a. Porro, quia.</p>
                        <Link to="/product" className="px-5 py-3 bg-[#FF8906] rounded">Get Started</Link>
                        <div className="flex gap-5 items-center justify-between text-[#FF8906]">
                            <span className="border-r px-5"> <p className="text-3xl">90+</p><br /> Staff</span>
                            <span className="border-r px-5"> <p className="text-3xl">30+</p><br /> Store</span>
                            <span><p className="text-3xl"> 800+ </p><br /> Customer</span>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    )
}

function About() {
    return (
        <>
            <main className="md:grid md:grid-cols-2 flex flex-col-reverse " >
                <section className="bg-[#FFFFFF] w-full max-h-[130vh] flex flex-wrap flex-col">
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
                    <img src={barista}  className="w-full overflow-hidden" alt="main image" />
                </section>
            </main>
        </>
    )
}

function ProductCard() {
    return (
        <>
            <section className="flex flex-col my-10 justify-center items-center gap-5 mx-10 md:mx-20 ">
                <h1 className="flex justify-center items-center text-[#0B132A] md:text-[48px] text-[34px] flex-wrap ">Here is People's <span className="text-[#8E6447]"> Favorite</span> </h1>
                <p className="text-[#4F5665]">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            </section>
            <section className="flex flex-row flex-wrap my-10 justify-center items-center gap-3 ">
                <HomeCard />
            </section>
        </>
    )
}

function VisitOurStore() {
    return (
        <>
        <section className="max-w-[80vw] flex flex-col items-center mx-auto gap-5">
            <div className="text-center my-5 mx-10 md:mx-20">
                <h2 className="md:text-[48px] text-[34px] text-[#0B132A] flex-wrap "><span className="text-[#8E6447]">Visit Our Store</span> in the Spot on the Map Below</h2>
                <hr className="border-b-3 border-[#FF8906] w-25 my-10 mx-auto"  />
                <span className="text-[#4F5665] " >You can explore the menu that we provide with fun and have their own taste and make your day better.</span>
            </div>
            <div>
                <img src={map} alt="map" />
            </div>
        </section>
        </>
    )
}

function Testimoni() {
    return (
        <>
            <section className=" overflow-hidden md:h-[80vh] h-[80vh] flex flex-col md:flex-row gap-10  px-10 bg-[#777C82] bg-[linear-gradient(180deg,rgba(119,124,130,1)_0%,rgba(11,9,9,1)_66%)]">
                <div className="md:w-[30%] w-[80%] my-auto">
                    <img src={testimoni}  className="w-full overflow-hidden" alt="main image" />
                </div>
                <div className="my-auto md:w-110 w-55 text-white flex flex-col gap-5 mx-10 md:mx-20">
                    <h4>TESTIMONIAL</h4>
                    <h2 className="md:text-[48px] text-[24px] border-l-5 border-[#FF8906] px-5">Viezh Robert</h2>
                    <span className="text-[#FF8906] text-sm">Manager Coffe Shop</span>
                    <p className="text-sm">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                    <Rattings />
                    <div className="flex gap-3">
                        <FaCircleArrowLeft size={28} color="#FF8906" />
                        <FaCircleArrowRight size={28} />
                    </div>
                    <div className="flex flex-row gap-5 [&>span]:p-1 [&>span]:rounded-full [&>span]:bg-[#FF8906] ">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
        </>
    )
}

function ChatBox(){
    const [ open, setOpen ] = useState(true)
    const conClick = e => {
        setOpen(open => !open)
        console.log(open)
    }
    return (
        <div className="fixed bottom-20 right-10 z-50 flex flex-col items-end space-y-4">
            <div id="chat-container" className={`chat-hidden ${open ? 'hidden' : 'block'} w-full max-w-87.5 sm:w-87.5 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200`}>
                <div className="border-t-8 py-6 border-orange-500 p-4 flex items-center shadow-sm">
                    <div className="relative">
                        <img src="https://i.pravatar.cc/150?img=32" alt="Admin" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                        <span className="absolute bottom-0 right-0 w-3 h-3  border-2 border-white rounded-full"></span>
                    </div>
                    <div className="ml-3 text-white">
                        <h3 className="font-bold text-sm text-black">Maria Angela</h3>
                        <p className="text-xs text-orange-500">Admin Support</p>
                    </div>
                </div>
                <hr className="bg-red-100 border-t border-neutral-700" />
                <div className="h-80 bg-gray-50 p-4 overflow-y-auto space-y-4" id="chat-messages">
                    <div className="flex items-start">
                        <img src="https://i.pravatar.cc/150?img=32" className="w-8 h-8 rounded-full mr-2 mt-1" />
                        <div className="bg-white text-gray-700 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-sm border border-gray-100">
                            Halo, Ada yang bisa kami bantu?
                        </div>
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="bg-gray-200 text-gray-800 p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-sm text-sm max-w-[80%]">
                            Saya kesulitan mencari kopi
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 border-t border-gray-100 flex items-center gap-2">
                    <input type="text" placeholder="Masukan Pesan Anda" className="flex-1 bg-gray-50 text-sm border border-gray-200 rounded-lg px-4 py-2  transition" />
                    
                    <button  className="bg-orange-500 text-white p-2 rounded-lg shadow-md transition transform flex items-center justify-center">
                        < IoMdSend size="18" />
                    </button>
                </div>
            </div>
            <button onClick={() => conClick(open)} className="bg-orange-500 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform transform">
                <IoChatbubbleEllipsesOutline size="30" />
            </button>
        </div>
    )
}

function Home(){
    return(
        <>
        <Nav bg="bg-black/40"/> 
        <Hero/>
        <About/>
        <ProductCard />
        <VisitOurStore />
        <Testimoni />
        <Footer />
        <ChatBox />
        
        </>
    )
}

export {Hero, Home}