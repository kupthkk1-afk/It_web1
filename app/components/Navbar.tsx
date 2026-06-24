"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">    
        <div className="nav-container">

            <Link href="/dashboard" className="logo">
                𝗖𝗼𝗺𝗯𝗮𝘁 𝗦𝘁𝗼𝗿𝗲🥾
            </Link>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☢︎
                </button>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            <li>
                <Link href="/">𝗛𝗼𝗺𝗲☢︎</Link>
            </li>

            <li>
                <Link href="/about">𝗔𝗯𝗼𝘂𝘁☢︎</Link>
            </li>

            <li>
                <Link href="/contact" >𝗖𝗼𝗻𝘁𝗮𝗰𝘁☢︎</Link>
            </li> 

            <li>
                <Link href="/login">𝗟𝗼𝗴𝗶𝗻☢︎</Link>
            </li>

            <li>
                <Link href="/register">𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿☢︎</Link>
            </li>     
        </ul>
        </div>
    </nav>
  );
}