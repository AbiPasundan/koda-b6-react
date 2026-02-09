import Nav from "@/components/usercomp/Nav";
import Footer from "@/components/usercomp/Footer";
import { DetailProductCard } from "@/components/usercomp/Card";
import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ProductFetchContext } from "@/components/hook/ProductFetchContext";


function PoductImageComp(props) {
  return <img src={props.image} className="w-full h-24 object-cover cursor-pointer hover:opacity-80 border border-gray-200" />
}

function ProductImage(props) {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden shadow-sm">
        <img src={props.mainImage} alt="Hazelnut Latte" className="w-full h-[400px] object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <PoductImageComp image="https://placehold.co/600x400" />
        <PoductImageComp image="https://placehold.co/600x400" />
        <PoductImageComp image="https://placehold.co/600x400" />
      </div>
    </div>
  )
}

function Desc(props) {
  const [selectSize, setSelectSize] = useState()
  const [selectTemp, setSelectTemp] = useState()
  const [count, setCount] = useState(0)
  const sizes = ["regular", "medium", "large"]
  const temps = ["hot", "cold"]
  const { dataApi, isLoading, error } = useContext(ProductFetchContext);
  dataApi.forEach(element => {
    console.log(element.name)
  });
  const navigate = useNavigate();
  const buyProduct = () => {
    dataApi.forEach(e => {
      console.log(e.name)
      navigate("/checkout", {
        replace: true, state: {
          email: e.email,
          password: e.password,
          isUserLogin: true
        }
      })
    })
  }
  return (
    <>
      <span className="inline-block bg-[#D00000] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">FLASH SALE!</span>
      <h1 className="text-4xl font-bold font-[Plus_Jakarta_Sans]  text-[48px] leading-[100%] tracking-[0%] ">{props.name}</h1>
      <div className="flex items-center space-x-3 my-5">
        <span className=" line-throug font-[Plus_Jakarta_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] line-through text-[#D00000]">{props.oldprice}</span>
        <span className="text-2xl font-bold w-600 font-[Plus_Jakarta_Sans] text-[22px] leading-[100%] tracking-[0%] text-[#FF8906]">{props.newprice}</span>
      </div>
      <div className="flex items-center mb-4 text-sm text-gray-500">
        <div className="flex text-yellow-400 mr-2">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <span className=" mr-2 font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665]">5.0</span>
        <span className="border-l pl-2 font-[Plus_Jakarta_Sans] font-normal text-[18px] leading-[100%] tracking-[0%] text-[#4F5665]">200+ Review | Recommendation 👍</span>
      </div>
      <p className=" text-sm mb-6 leading-relaxed font-[Plus_Jakarta_Sans] font-medium text-[16px] tracking-[0%] text-[#4F5665]">
        {props.desc}
      </p>
      <div className="flex items-center mb-6">
        <button onClick={() => (count ? setCount(count - 1) : setCount(0))} className="w-8 h-8 border border-[#FF8906] rounded flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
        <span className="w-10 text-center font-medium">{count}</span>
        <button onClick={() => (count != 10 ? setCount(count + 1) : setCount(10))} className="w-8 h-8 bg-[#FF8906] text-white rounded flex items-center justify-center hover:bg-orange-600">+</button>
      </div>
      <div className="mb-4">
        <label className="block font-[Plus_Jakarta_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#0B0909] mb-2">Choose Size</label>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size, i) => (
            <button key={i} onClick={() => setSelectSize(size)} className={`border font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909] ${selectSize === size ? 'border-orange-300' : 'border-black'}  py-2 rounded text-sm font-medium`}>{size}</button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <label className="block font-[Plus_Jakarta_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#0B0909] mb-2 ">Hot/Ice?</label>
        <div className="grid grid-cols-2 gap-3">
          {temps.map((temp, i) => (
            <button key={i} onClick={() => { setSelectTemp(temp) }} className={`border ${selectTemp === temp ? 'border-orange-300' : 'border-black'}  py-2 rounded text-sm font-medium font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909]`}>{temp}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={buyProduct} className="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-[20px] tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-3 rounded-md shadow-md hover:bg-orange-600 transition ">Buy</button>
        <button className="flex-1 border border-orange-300 text-orange-600 font-bold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          add to cart
        </button>
      </div>
    </>
  )
}

function Prev() {
  return (
    <div className="flex justify-center mt-10 space-x-3">
      <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg font-medium">
        1
      </button>
      <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300">
        2
      </button>
      <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300">
        3
      </button>
      <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300">
        4
      </button>
      <button className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center hover:bg-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default function DetailProduct() {
  const { dataApi, isLoading, error } = useContext(ProductFetchContext);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  console.log(id)
  console.log(dataApi)
  const product = dataApi.find(item => item.id === Number(id));
  console.log(product)

  if (!product) {
    return (
      <>
        <h1> Kela keur loding </h1>
      </>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-10">
          <ProductImage mainImage={product.image} />
          <div>
            <Desc name={product.name} desc={product.description} oldprice={product.oldPrice} newprice={product.newPrice} />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="md:text-3xl text-xl overflow-hidden font-medium mb-8 font-[Plus_Jakarta_Sans] text-[48px] leading-[100%] tracking-[0%] text-[#0B0909]">Recommendation <span className="text-[#8E6447]"> For You</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DetailProductCard />
          </div>
          <Prev />
        </div>
      </div>
    </>


  );
}
