import { HomeCard } from "@/components/usercomp/Card"
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
import { AiFillStar } from "react-icons/ai"
import { useGetReviewsQuery } from "@/feature/api"


function Hero() {
    return (
        <>
            <main className="grid md:grid-cols-2 md:grid-cols-2-reverse overflow-hidden h-full " >
                <section className="order-1 flex max-h-[130vh] ">
                    <img loading="lazy" src={home} className="w-full overflow-hidden" alt="main image" />
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
                    <img loading="lazy" src={barista} className="w-full overflow-hidden" alt="main image" />
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
                    <hr className="border-b-3 border-[#FF8906] w-25 my-10 mx-auto" />
                    <span className="text-[#4F5665] " >You can explore the menu that we provide with fun and have their own taste and make your day better.</span>
                </div>
                <div>
                    <img loading="lazy" src={map} alt="map" />
                </div>
            </section>
        </>
    )
}

// function Testimoni() {
//     return (
//         <>
//             <section className=" overflow-hidden md:h-[80vh] h-[80vh] flex flex-col md:flex-row gap-10  px-10 bg-[#777C82] bg-[linear-gradient(180deg,rgba(119,124,130,1)_0%,rgba(11,9,9,1)_66%)]">
//                     {/* <ul>{users.map(u => <li key={u.id}>{u.product_name}</li>)}</ul> */}
//                 <div className="md:w-[30%] w-[80%] my-auto">
//                     <img loading="lazy" src={testimoni} className="w-full overflow-hidden" alt="main image" />
//                 </div>
//                 <div className="my-auto md:w-110 w-55 text-white flex flex-col gap-5 mx-10 md:mx-20">
//                     <h4>TESTIMONIAL</h4>
//                     <h2 className="md:text-[48px] text-[24px] border-l-5 border-[#FF8906] px-5">Viezh Robert</h2>
//                     <span className="text-[#FF8906] text-sm">Manager Coffe Shop</span>
//                     <p className="text-sm">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
//                     <Rattings />
//                     <div className="flex gap-3">
//                         <FaCircleArrowLeft size={28} color="#FF8906" />
//                         <FaCircleArrowRight size={28} />
//                     </div>
//                     <div className="flex flex-row gap-5 [&>span]:p-1 [&>span]:rounded-full [&>span]:bg-[#FF8906] ">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }


const testimonials = [
    {
        id: 1,
        name: 'Viezh Robert',
        role: 'Manager Coffe Shop',
        quote: '"Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"',
        rating: 5.0,
        // Menggunakan gambar placeholder yang mirip dengan desain
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Freelance Designer',
        quote: '"Tempat yang luar biasa untuk bekerja! Suasananya tenang, kopinya enak, dan koneksi internetnya sangat stabil. Sangat cocok untuk remote worker."',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Ahmad Fauzi',
        role: 'Software Engineer',
        quote: '"Sering kesini buat ngerjain project. Tempat duduknya nyaman dan colokan listrik ada di mana-mana. Baristanya juga sangat ramah."',
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    }
];

const StarIcon = () => (
    <svg className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const Testimoni = () => {
    const { data, isLoading, error } = useGetReviewsQuery();

    console.log(data);

    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Terjadi error</p>;

    return (
        <div className="w-full bg-[#777C82] bg-[linear-gradient(180deg,rgba(119,124,130,1)_0%,rgba(11,9,9,1)_66%)] py-16 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                <div className="w-full md:w-1/2 overflow-hidden">
                    <img
                        src={currentTestimonial.image ?? "https://placehold.net/400x400.png"}
                        alt={currentTestimonial.name ?? "Testimonial Customer"}
                        className="w-full h-100 object-cover transition-opacity duration-500"
                        key={currentTestimonial.id}
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">
                        Testimonial
                    </p>

                    <div className="flex items-center mb-2">
                        <div className="w-1 h-10 bg-orange-500 mr-4"></div>
                        <h2 className="text-white text-4xl md:text-5xl font-semibold">
                            {currentTestimonial.name ?? "Customer"}
                        </h2>
                    </div>

                    <p className="text-orange-500 text-lg mb-6">
                        {currentTestimonial.role ?? "Customer"}
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8 min-h-30">
                        {currentTestimonial.quote ?? "Nice Place"}
                    </p>

                    <div className="flex items-center space-x-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar color="#FF8906" key={i} />
                        ))}
                        <span className="text-white ml-3 font-medium">
                            {currentTestimonial.rating.toFixed(1)}
                        </span>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div className="flex space-x-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-none"
                            >
                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors focus:outline-none"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                        ? 'w-8 bg-orange-500'
                                        : 'w-2 bg-gray-500 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


function ChatBox() {
    const [open, setOpen] = useState(true)
    const conClick = e => {
        setOpen(open => !open)
        console.log(open)
    }
    return (
        <div className="fixed bottom-20 right-10 z-50 flex flex-col items-end space-y-4">
            <div id="chat-container" className={`chat-hidden ${open ? 'hidden' : 'block'} w-full max-w-87.5 sm:w-87.5 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200`}>
                <div className="border-t-8 py-6 border-orange-500 p-4 flex items-center shadow-sm">
                    <div className="relative">
                        <img loading="lazy" src="https://i.pravatar.cc/150?img=32" alt="Admin" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
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
                        <img loading="lazy" src="https://i.pravatar.cc/150?img=32" className="w-8 h-8 rounded-full mr-2 mt-1" />
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

                    <button className="bg-orange-500 text-white p-2 rounded-lg shadow-md transition transform flex items-center justify-center">
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

function Home() {
    return (
        <>
            <Nav bg="bg-black/40" />
            <Hero />
            <About />
            <ProductCard />
            <VisitOurStore />
            <Testimoni />
            <Footer />
            <ChatBox />

        </>
    )
}

export { Hero, Home }