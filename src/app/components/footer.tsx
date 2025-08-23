import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-800 rounded-lg p-8 text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-12">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-3 items-center md:items-start md:w-1/3">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={36} 
              height={36} 
              className="w-9 h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider">CARTWISE</p>
          </Link>
          <p className="text-sm text-gray-400">© 2025 Cartwise</p>
          <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col gap-2 items-center md:items-start md:w-1/4">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <Link href="/" className="text-sm text-gray-400 hover:text-white hover:underline">Home</Link>
          <Link href="/products" className="text-sm text-gray-400 hover:text-white hover:underline">Products</Link>
          <Link href="/about" className="text-sm text-gray-400 hover:text-white hover:underline">About Us</Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-white hover:underline">Contact</Link>
        </nav>

        {/* Company */}
        <div className="flex flex-col gap-2 items-center md:items-start md:w-1/4">
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <Link href="/careers" className="text-sm text-gray-400 hover:text-white hover:underline">Careers</Link>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white hover:underline">Blog</Link>
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-white hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-gray-400 hover:text-white hover:underline">Terms of Service</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2 items-center md:items-start md:w-1/4">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <Link href="https://twitter.com" className="text-sm text-gray-400 hover:text-white hover:underline">Twitter</Link>
          <Link href="https://facebook.com" className="text-sm text-gray-400 hover:text-white hover:underline">Facebook</Link>
          <Link href="https://instagram.com" className="text-sm text-gray-400 hover:text-white hover:underline">Instagram</Link>
          <Link href="https://linkedin.com" className="text-sm text-gray-400 hover:text-white hover:underline">LinkedIn</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
