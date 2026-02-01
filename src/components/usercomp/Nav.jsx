import { Link, useNavigate } from 'react-router'
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaRegFontAwesomeLogoFull } from "react-icons/fa";
import { useRef, useState } from 'react';
export default function Nav(props){
    const navigate = useNavigate()
    const showMenu = useRef(null)
    const [open, setOpen] = useState(false)
    const handleHamburg = () => {
        setOpen(open => !open)
        console.log(open);
    }
    const token = localStorage.getItem("token_auth_user");
    const logout = () => {
        localStorage.removeItem("token_auth_user");
        navigate("/login")
    }
    return (
        <header className={`${props.padding}`} >
            <nav className={`flex flex-row absolute justify-around items-center ${props.bg} p-5 left-0 right-0 `}>
                <section className='flex flex-row justify-between gap-10 items-center'>
                    <Link to="/">
                        <img src="/src/assets/img/userimg/image.png" alt="Logo" />
                    </Link>
                    <div className='hidden md:flex gap-10 text-white text-sm md:text-xl'>
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                    </div>
                </section>
                <section className='flex flex-row justify-between items-center gap-10'>
                    <div className='flex gap-10'>
                        <IoSearchOutline size={28} color='white' className='md:block hidden' />
                        <Link to="/checkout">
                            <FiShoppingCart size={28} color='white' />
                        </Link>
                        <RxHamburgerMenu size={28} color='white' className='md:hidden block' onClick={handleHamburg} />
                    </div>
                    <div>
                        <div className='flex gap-10 text-white'>
                            { token ? (
                                <>
                                    <div onClick={logout} className='md:block hidden p-3 bg-transparent rounded border'>Logout</div>
                                    <Link to="/profile" className='md:block hidden p-3 bg-[#ff8906] rounded'>Profile</Link>
                                </>
                            )
                            :
                                <>
                                    <Link to="/login" className='md:block hidden p-3 bg-transparent rounded border'>Sign In</Link>
                                    <Link to="/register" className='md:block hidden p-3 bg-[#ff8906] rounded'>Sign Up</Link>
                                </>
                            }
                        </div>
                    </div>
                </section>
                    {/* mobile */}
                <section className={`${open ? 'block' : 'hidden'} md:hidden fixed justify-between top-0 left-0 bg-white z-100 h-[100vh]`}>
                        <div>
                            <header className='flex justify-between p-3' >
                                <FaRegFontAwesomeLogoFull size={90} />
                                <IoMdClose size={30} />
                            </header>
                            <label htmlFor="search" className='flex flex-col m-3 gap-3 my-10'>
                                <span>Search Product</span>
                                <div className='flex items-center'>
                                    <IoSearchOutline className='absolute' />
                                    <input type="text" name="search" id="search" placeholder='Search Product' className='pl-5'/>
                                </div>
                                <div className='flex items-start flex-col gap-3 '>
                                    <Link to="/" >Home</Link>
                                    <Link to="/product">product</Link>
                                </div>
                            </label>
                        </div>
                        <div className=' mt-[50%] flex flex-col gap-5'>
                            { token ?
                                (
                                    <>
                                    <div onClick={logout} className='bg-transparent text-center py-3 mx-5 rounded border border-black'> Logout </div>
                                    <Link to="/profile" className='bg-[#ff8906] text-center py-3 mx-5 rounded '> Profile </Link>
                                    </>
                                )
                                :
                                (
                                    <>
                                    <Link to="/login" className='bg-transparent text-center py-3 mx-5 rounded border border-black'> Sign In </Link>
                                    <Link to="/register" className='bg-[#ff8906] text-center py-3 mx-5 rounded '> Sign Up </Link>
                                    </>
                                )
                            }
                        </div>
                </section>
            </nav>
        </header>
    )
}