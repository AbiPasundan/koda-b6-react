import { FaFacebook, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col md:flex-row pt-10 gap-10 bg-red-100 [&>section]:mx-10">
                <section className="flex flex-col">
                    <img src="/src/assets/img/userimg/image.png" alt="logo" className="w-[100px] "/>
                    <p className="md:w-[500px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ut quos doloremque, tempore nisi quod sed et! Dolores, impedit vel. Dolore cumque officia dolor voluptate consequatur vel porro unde aliquam.</p>
                </section>
                <section className="flex flex-row justify-between gap-10 [&>ul]:flex [&>ul]:flex-col [&>ul>h2]:font-bold ">
                    <ul>
                        <h2>Product</h2>
                        <li>Our Product</li>
                        <li>Procing</li>
                        <li>Locations</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <h2>Engage</h2>
                        <li>Partner</li>
                        <li>FAQ</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </section>
                <section>
                    <h2>Social Media</h2>
                    <div className="flex gap-5 my-5">
                        <FaFacebook />
                        <FaTwitter />
                        <ImInstagram />
                    </div>
                </section>

            </footer>
        </>
    )
}