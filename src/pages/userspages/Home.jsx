import Card from "@/components/usercomp/Card"
import Nav from "@/components/usercomp/Nav"
import { Link } from "react-router"

function Hero() {
    return (
        <>
            <main className="grid md:grid-cols-2 " >
                <section className="flex max-h-[130vh] ">
                    <img src="/src/assets/img/userimg/home.png"  className="w-full overflow-hidden" alt="main image" />
                </section>
                <section className="bg-[#09f090] flex w-full max-h-[130vh]">
                    <div className="flex flex-col justify-center items-start mx-10 gap-5">
                        <h1>Start Your Daily With Coffee and Good Meals</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reprehenderit repudiandae sequi animi dicta vitae dolorum nam a. Porro, quia.</p>
                        <Link className="px-5 py-3 bg-red-100 rounded">Get Started</Link>
                        <div className="flex gap-5 items-center justify-between">
                            <span className="border-r-1 px-5"> <p className="text-3xl">90+</p><br /> Staff</span>
                            <span className="border-r-1 px-5"> <p className="text-3xl">30+</p><br /> Store</span>
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
                <section className="bg-[#09f090] flex w-full max-h-[130vh] flex flex-wrap flex-col">
                    <div className="mx-10 md:mx-20 my-auto">
                        <div className=" border-l-2 border-[#ff8906] my-10">
                            <h2 className="px-5 text-3xl md:text-5xl [&>span]:text-[#ff8906] ">We Provide <span> Good Coffee </span>and<span>  Healthy Meals</span> </h2>
                        </div>
                        <div className="text-sm md:text-m my-10 ">
                            You can explore the menu what we provide with fun and have their own taste and make your day better
                        </div>
                        <ul className="text-sm md:text-m my-5 flex flex-col gap-5 list-decimal">
                            <li>Hight Quality</li>
                            <li>Helathy Meals, you can request the ingredients</li>
                            <li>Free member card with a minimum purchase of IDR 200.000</li>
                            <li>Chat with our staff to get better experience for ordering</li>
                        </ul>
                    </div>
                </section>
                <section className="flex max-h-[130vh] ">
                    <img src="/src/assets/img/userimg/home.png"  className="w-full overflow-hidden" alt="main image" />
                </section>
                {/* <section className="bg-[#09f090] flex w-full max-h-[130vh]"></section> */}
            </main>
        </>
    )
}


export default function Home(){
    return(
        <>
        <Nav bg="bg-red-100"/> 
        <Hero/> 
        <About/> 
        <Card/> 
        </>
    )
}