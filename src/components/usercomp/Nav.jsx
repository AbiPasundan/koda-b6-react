import { Link } from 'react-router'
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
// bg-[#0B0909]
export default function Nav(props){
    return (
        <header>
            <nav className={`flex flex-row justify-around items-center ${props.bg} p-5`}>
                <section className='flex flex-row justify-between gap-10 items-center'>
                    <div>
                        <img src="/src/assets/img/userimg/image.png" alt="Logo" />
                    </div>
                    <div className='hidden md:flex gap-10 text-white text-sm md:text-xl'>
                        <Link>Home</Link>
                        <Link>Product</Link>
                    </div>
                </section>
                <section className='flex flex-row justify-between items-center gap-10'>
                    <div className='flex gap-10'>
                        <IoSearchOutline size={28} color='white' className='md:block hidden' />
                        <FiShoppingCart size={28} color='white' />
                        <RxHamburgerMenu size={28} color='white' className='md:hidden block' />
                    </div>
                    <div>
                        <div className='flex gap-10 text-white'>
                            <Link className='md:block hidden p-3 bg-transparent rounded border'>Sign In</Link>
                            <Link className='md:block hidden p-3 bg-[#ff8906] rounded'>Sign Up</Link>
                        </div>
                    </div>
                </section>
            </nav>
        </header>
    )
}