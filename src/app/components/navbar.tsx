import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return <div >
    <nav className="w-full flex items-center justify-between py-4 px-2 border-b border-gray-200">
        {/* Navbar Left */}
        <Link href={'/'} className="flex items-center gap-2">
            <Image 
                src={'/logo.png'} 
                alt="Logo" 
                width={35} 
                height={35}
                className=" w-6 h-6 md:w-9 md:h-9" 
            />
            <p className="hidden md:block text-md font-medium tracking-wider"> CARTWISE </p>
        </Link>

        {/* Navbar Right */}
        <div className="flex items-center gap-6">
            <Link href="/">
                <SearchBar />
            </Link>

            <Link href="/">
                <Home className="w-4 h-4 text-gray-500 hover:text-blue-500 hover:scale-110 transition-transform duration-300"/>
            </Link>

            <Bell className="w-4 h-4 text-gray-500 hover:text-red-500 hover:shadow-md hover:shadow-blue-200 rounded-full transition duration-300"/>

            <ShoppingCart className="w-4 h-4 text-gray-500 hover:text-green-500 hover:rotate-12 transition duration-300"/>

            <Link href="/login" className="text-gray-500 hover:text-black relative transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black hover:after:w-full after:transition-all after:duration-300">
                Sign in
            </Link>
        </div>
    </nav>
    </div>;
}

export default Navbar;