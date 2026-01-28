export default function DetailProduct() {
  return (
    <>
      <div class="container mx-auto px-4 py-8 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="space-y-4">
            <div class="relative overflow-hidden shadow-sm">
              <img
                src="https://placehold.co/600x400"
                alt="Hazelnut Latte"
                class="w-full h-[400px] object-cover"
              />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <img
                src="https://placehold.co/600x400"
                class="w-full h-24 object-cover cursor-pointer hover:opacity-80 border border-gray-200"
              />
              <img
                src="https://placehold.co/600x400"
                class="w-full h-24 object-cover cursor-pointer hover:opacity-80 border border-gray-200"
              />
              <img
                src="https://placehold.co/600x400"
                class="w-full h-24 object-cover cursor-pointer hover:opacity-80 border border-gray-200"
              />
            </div>
          </div>
          <div>
            <span class="inline-block bg-[#D00000] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              FLASH SALE!
            </span>

            <h1 class="text-4xl font-bold font-[Plus_Jakarta_Sans] font-medium text-[48px] leading-[100%] tracking-[0%] ">
              Hazelnut Latte
            </h1>

            <div class="flex items-center space-x-3 mb-4">
              <span class=" line-throug font-[Plus_Jakarta_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] line-through text-[#D00000]">
                IDR 20.000
              </span>
              <span class="text-2xl font-bold w-600 font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#FF8906]">
                IDR 10.000
              </span>
            </div>

            <div class="flex items-center mb-4 text-sm text-gray-500">
              <div class="flex text-yellow-400 mr-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span class="font-medium mr-2 font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665]">
                5.0
              </span>
              <span class="border-l pl-2 font-[Plus_Jakarta_Sans] font-normal text-[18px] leading-[100%] tracking-[0%] text-[#4F5665]">
                200+ Review | Recommendation 👍
              </span>
            </div>

            <p class=" text-sm mb-6 leading-relaxed font-[Plus_Jakarta_Sans] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#4F5665]">
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </p>

            <div class="flex items-center mb-6">
              <button class="w-8 h-8 border border-[#FF8906] rounded flex items-center justify-center text-gray-600 hover:bg-gray-100">
                -
              </button>
              <span class="w-10 text-center font-medium">1</span>
              <button class="w-8 h-8 bg-[#FF8906] text-white rounded flex items-center justify-center hover:bg-orange-600">
                +
              </button>
            </div>

            <div class="mb-4">
              <label class="block font-[Plus_Jakarta_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#0B0909] mb-2">
                Choose Size
              </label>
              <div class="grid grid-cols-3 gap-3">
                <button class="border font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909] border-orange-300  py-2 rounded text-sm font-medium">
                  Regular
                </button>
                <button class="border border-gray-200 font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909] text-gray-500 py-2 rounded text-sm hover:border-gray-300">
                  Medium
                </button>
                <button class="border font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909] border-gray-200 text-gray-500 py-2 rounded text-sm hover:border-gray-300">
                  Large
                </button>
              </div>
            </div>

            <div class="mb-8">
              <label class="block font-[Plus_Jakarta_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#0B0909] mb-2 ">
                Hot/Ice?
              </label>
              <div class="grid grid-cols-2 gap-3">
                <button class="border border-orange-300  py-2 rounded text-sm font-medium font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909]">
                  Ice
                </button>
                <button class="border border-gray-200 py-2 rounded text-sm font-[Plus_Jakarta_Sans] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#0B0909] hover:border-gray-300 ">
                  Hot
                </button>
              </div>
            </div>

            <div class="flex gap-4">
              <button class="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-[20px] tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-3 rounded-md shadow-md hover:bg-orange-600 transition ">
                Buy
              </button>
              <button class="flex-1 border border-orange-300 text-orange-600 font-bold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                add to cart
              </button>
            </div>
          </div>
          <div class="mt-16">
            <h2 class="text-3xl font-bold mb-8 font-[Plus_Jakarta_Sans] font-medium text-[48px] leading-[100%] tracking-[0%] text-[#0B0909] ">
              Recommendation <span class="text-[#8E6447]">For You</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div class="relative">
                  <span class="absolute top-2 left-2 bg-[#D00000] text-white text-[10px] font-bold px-2 py-1 rounded">
                    FLASH SALE!
                  </span>
                  <img
                    src="https://placehold.co/600x400"
                    alt="Latte"
                    class="w-full h-48 object-cover"
                  />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                  <h3 class="font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#0B132A] mb-1">
                    Hazelnut Latte
                  </h3>
                  <p class="font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665] mb-2">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div class="flex text-yellow-400 text-xs mb-2">
                    ★★★★★{" "}
                    <span class="font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665] ml-1">
                      5.0
                    </span>
                  </div>
                  <div class="mt-auto">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="font-[Plus_Jakarta_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] line-through text-[#D00000]">
                        IDR 20.000
                      </span>
                      <span class="font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#FF8906]">
                        IDR 10.000
                      </span>
                    </div>
                    <div class="flex gap-2">
                      <button class="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-[20px] tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-2 rounded hover:bg-orange-600">
                        Buy
                      </button>
                      <button class="w-10 border border-orange-300 rounded flex items-center justify-center text-orange-500 hover:bg-orange-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div class="relative">
                  <span class="absolute top-2 left-2 bg-[#D00000] text-white text-[10px] font-bold px-2 py-1 rounded">
                    FLASH SALE!
                  </span>
                  <img
                    src="https://placehold.co/600x400"
                    alt="Latte"
                    class="w-full h-48 object-cover"
                  />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                  <h3 class="font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#0B132A] mb-1">
                    Hazelnut Latte
                  </h3>
                  <p class="font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665] mb-2">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div class="flex text-yellow-400 text-xs mb-2">
                    ★★★★★{" "}
                    <span class="font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665] ml-1">
                      5.0
                    </span>
                  </div>
                  <div class="mt-auto">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="font-[Plus_Jakarta_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] line-through text-[#D00000]">
                        IDR 20.000
                      </span>
                      <span class="font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#FF8906]">
                        IDR 10.000
                      </span>
                    </div>
                    <div class="flex gap-2">
                      <button class="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-[20px] tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-2 rounded hover:bg-orange-600">
                        Buy
                      </button>
                      <button class="w-10 border border-orange-300 rounded flex items-center justify-center text-orange-500 hover:bg-orange-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div class="relative">
                  <span class="absolute top-2 left-2 bg-[#D00000] text-white text-[10px] font-bold px-2 py-1 rounded">
                    FLASH SALE!
                  </span>
                  <img
                    src="https://placehold.co/600x400"
                    alt="Latte"
                    class="w-full h-48 object-cover"
                  />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                  <h3 class="font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#0B132A] mb-1">
                    Hazelnut Latte
                  </h3>
                  <p class="font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665] mb-2">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div class="flex text-yellow-400 text-xs mb-2">
                    ★★★★★{" "}
                    <span class="font-[Plus_Jakarta_Sans] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#4F5665] ml-1">
                      5.0
                    </span>
                  </div>
                  <div class="mt-auto">
                    <div class="flex items-center space-x-2 mb-3">
                      <span class="font-[Plus_Jakarta_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] line-through text-[#D00000]">
                        IDR 20.000
                      </span>
                      <span class="font-[Plus_Jakarta_Sans] font-medium text-[22px] leading-[100%] tracking-[0%] text-[#FF8906]">
                        IDR 10.000
                      </span>
                    </div>
                    <div class="flex gap-2">
                      <button class="flex-1 font-[Plus_Jakarta_Sans] font-medium text-[14px] leading-[20px] tracking-[0%] text-center bg-[#FF8906] text-[#0B132A] py-2 rounded hover:bg-orange-600">
                        Buy
                      </button>
                      <button class="w-10 border border-orange-300 rounded flex items-center justify-center text-orange-500 hover:bg-orange-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-10 space-x-3">
              <button class="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg font-medium">
                1
              </button>
              <button class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300">
                2
              </button>
              <button class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300">
                3
              </button>
              <button class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300">
                4
              </button>
              <button class="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center hover:bg-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
