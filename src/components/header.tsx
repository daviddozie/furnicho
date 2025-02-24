import Link from "next/link"
import Image from "next/image"
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

export const Header = () => {

    const nav = [
        { title: "Home", link: "/" },
        { title: "Shop", link: "/shop" },
        { title: "Blog", link: "/blog" },
        { title: "ContactUs", link: "/contact" }
    ]

    return (
        <>
            <header className="px-[80px] flex items-center justify-between w-full py-4">
                <nav>
                    <ul className="flex gap-[40px]">
                        {nav.map((item, index) => (
                            <li key={index} className="text-[#131010] font-semibold text-base font-poppins">
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Image
                    aria-hidden
                    src="/FurnichoLogo.svg"
                    alt="Globe icon"
                    width={90}
                    height={104.58}
                />
                <div className="flex items-center gap-[20px]">
                    <FiUser size={18}/>
                    <FaRegHeart size={18}/>
                    <LuShoppingBag size={18}/>
                    <FiSearch size={18}/>
                </div>
            </header>
        </>
    )
}