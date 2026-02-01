function HeaderTitle() {
    return(
        <div class="mb-8">
            <h1 class="text-4xl font-bold text-black mb-1">Order #12354-09893</h1>
            <p class="text-gray-400 text-sm">21 March 2023 at 10:30 AM</p>
        </div>
    )
}

export default function DetailOrder(){
    return (
        <div  class="bg-gray-50 text-gray-800 p-6 md:p-12">
            <div class="max-w-6xl mx-auto">
                <HeaderTitle />
            </div>
        </div>
    )
}