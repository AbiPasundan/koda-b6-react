import { DetailProductCard, Pagination } from "@/components/usercomp/Card";
import { useLocation, useNavigate, useParams } from "react-router";
import { useContext, useState } from "react";
import { ProductFetchContext } from "@/components/hook/ProductFetchContext";

function PoductImageComp(props) {
  return <img src={props.image} className="w-full h-24 object-cover cursor-pointer hover:opacity-80 border border-gray-200" />
}

function ProductImage(props) {
  const { dataApi, isLoading, error } = useContext(ProductFetchContext);
  const { id } = useParams();
  const product = dataApi.find(item => item.id === Number(id));
  const images = product.image.slice(0, 3)
  // const def = images.slice(0, 3)
  // console.log(def)
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden shadow-sm">
        <img src={props.mainImage} alt="Hazelnut Latte" className="w-full h-100 object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((e, i) => (
          <div key={i}>
            <PoductImageComp image={e} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Desc(props) {
  const [selectSize, setSelectSize] = useState()
  const { id } = useParams();


  const [selectTemp, setSelectTemp] = useState()
  const [count, setCount] = useState(0)
  const sizes = ["regular", "medium", "large"]
  const temps = ["hot", "cold"]
  const { dataApi, isLoading, error } = useContext(ProductFetchContext);
  const navigate = useNavigate();

  const product = dataApi.find(item => item.id === Number(id));
  console.log(dataApi);
  console.log(product);


  // console.log(product)
  const sizeOption = size => {
    setSelectSize(size)
  }

  const buyProduct = (productToBuy) => {

    if (!selectSize || !selectTemp) {
      alert("Mohon pilih ukuran dan penyajian dulu!");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      ...productToBuy,
      product,
      selectedSize: selectSize,
      selectedTemp: selectTemp,
      quantity: count > 0 ? count : 1
    };

    // cart.push(newItem);
    const existingItem = cart.find(item =>
      item.product.id === product.id &&
      item.selectedSize === selectSize &&
      item.selectedTemp === selectTemp
    );

    if (existingItem) {
      existingItem.quantity += newItem.quantity;
    } else {
      cart.push(newItem);
    }


    localStorage.setItem("cart", JSON.stringify(cart));

    // console.log("Item added:", newItem);

    navigate("/checkout", {
      replace: true,
      state: {
        isUserLogin: true,
        checkoutData: newItem
      }
    });
  }

  const plus = () => {
    (count < dataApi.stock && setCount(count + 1))
    console.log(count)
  }

  // const addCart = e => {
  //   if (!selectSize || !selectTemp) {
  //     alert("Mohon pilih ukuran dan penyajian (Hot/Ice) terlebih dahulu!");
  //     return;
  //   }
  //   if (count < 1) {
  //     alert("Jumlah pesanan minimal 1");
  //     return;
  //   }

  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   const itemToAdd = {
  //     // id: props.id,
  //     // name: props.name,
  //     // image: props.image,
  //     // price: props.newPrice,
  //     // description: props.desc,
  //     product,
  //     selectedSize: selectSize,
  //     selectedTemp: selectTemp,
  //     quantity: count
  //   };

  //   cart.push(itemToAdd);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   alert("Berhasil masuk keranjang!");
  // }
  const addCart = () => {
    if (!selectSize || !selectTemp) {
      alert("Mohon pilih ukuran dan penyajian (Hot/Ice) terlebih dahulu!");
      return;
    }

    if (count < 1) {
      alert("Jumlah pesanan minimal 1");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item =>
      item.product.id === product.id &&
      item.selectedSize === selectSize &&
      item.selectedTemp === selectTemp
    );

    if (existingItem) {
      existingItem.quantity += count;
    } else {
      cart.push({
        product,
        selectedSize: selectSize,
        selectedTemp: selectTemp,
        quantity: count
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Berhasil masuk keranjang!");
  };



  return (
    <>
      <span className="inline-block bg-[#D00000] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">FLASH SALE!</span>
      <h1 className="text-4xl font-bold font-[Plus_Jakarta_Sans]  text-[48px] leading-[100%] tracking-[0%] ">{props.name}</h1>
      <div className="flex items-center space-x-3 my-5">
        <span className=" line-throug font-[Plus_Jakarta_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] line-through text-[#D00000]">{props.oldPrice}</span>
        <span className="text-2xl font-bold w-600 font-[Plus_Jakarta_Sans] text-[22px] leading-[100%] tracking-[0%] text-[#FF8906]">{props.newPrice}</span>
      </div>
      <span hidden> {props.tax} </span>
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
        <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))} className="w-8 h-8 border border-[#FF8906] rounded flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
        <span className="w-10 text-center font-medium">{count}</span>
        <button onClick={() => setCount(prev => (prev < 10 ? prev + 1 : 10))} className="w-8 h-8 bg-[#FF8906] text-white rounded flex items-center justify-center hover:bg-orange-600">+</button>
      </div>
      <div className="mb-4">
        <label className="block font-[Plus_Jakarta_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#0B0909] mb-2">Choose Size</label>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size, i) => (
            <button key={i} onClick={() => setSelectSize(() => sizeOption(size))} className={`border font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909] ${selectSize === size ? 'border-orange-300' : 'border-black'}  py-2 rounded text-sm font-medium`}>{size}</button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <label className="block font-[Plus_Jakarta_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#0B0909] mb-2 ">Hot/Ice?</label>
        <div className="grid grid-cols-2 gap-3">
          {temps.map((temp, i) => (
            <button key={i} onClick={() => { setSelectTemp(temp) }} className={`border ${selectTemp === temp ? 'border-orange-300' : 'border-black'}  py-2 rounded text-sm font-medium font-[Plus_Jakarta_Sans] text-[16px] leading-[100%] tracking-[0%] text-[#0B0909]`}>{temp}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {/* <button onClick={() => buyProduct(props)} className="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-5 tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-3 rounded-md shadow-md hover:bg-orange-600 transition ">Buy</button> */}
        <button onClick={() => buyProduct(dataApi[0])} className="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-5 tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-3 rounded-md shadow-md hover:bg-orange-600 transition ">Buy</button>
        <button onClick={() => addCart(props)} className="flex-1 border border-orange-300 text-orange-600 font-bold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          add to cart
        </button>
      </div>

    </>
  )
}


export default function DetailProduct() {
  const { dataApi, isLoading, error } = useContext(ProductFetchContext);
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const product = dataApi.find(item => item.id === Number(id));

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error || !product) return <div className="text-center py-20 text-red-500">Product not found.</div>;

  const recommendations = dataApi.filter(item => item.id !== product.id);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = recommendations.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-10">
        <ProductImage mainImage={product.image} />
        <div>
          <Desc name={product.name} desc={product.description} oldPrice={product.oldPrice} newPrice={product.newPrice} id={product.id} image={product.image} tax={product.tax} size />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="md:text-3xl text-xl overflow-hidden font-medium mb-8 font-[Plus_Jakarta_Sans] text-[48px] leading-[100%] tracking-[0%] text-[#0B0909]">Recommendation <span className="text-[#8E6447]"> For You</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {currentProducts.map(item => (
            <DetailProductCard key={item.id} item={item} />
          ))}
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={recommendations.length} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
}
