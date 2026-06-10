import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">    
        <ul className="flex space-x-4">
            <li>
                <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>

            <li>
                <Link href="/about" className="hover:text-gray-400">About</Link>
            </li>

            <li>
                <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li> 

            <li>
                <Link href="/login" className="hover:text-gray-400">Login</Link>
            </li>

            <li>
                <Link href="/register" className="hover:text-gray-400">Register</Link>
            </li>

            <li>
                <Link href="/forgotpassword" className="hover:text-gray-400">Forgot-Password</Link>
            </li>      
        </ul>
    </nav>
  );
}