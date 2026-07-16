
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type User = {
    name: string;
    email: string;
    role: "admin" | "user";
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            setUser(data.user);
        }

        loadUser();
    }, []);

    async function logout() {
        await fetch("/api/auth/logout", {
            method: "POST",
        });

        setUser(null);
        router.push("/login");
        router.refresh();
    }


    return (
        <nav className="navbar">
            <div className="nav-container">

                <Link href="/dashboard" className="logo">
                    𝐀𝐢𝐫𝐒𝐭𝐨𝐫𝐞🛫
                </Link>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    🛬
                </button>
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <Link href="/" >𝗛𝗼𝗺𝗲✈️</Link>
                    </li>

                    <li>
                        <Link href="/about">𝗔𝗯𝗼𝘂𝘁✈️</Link>
                    </li>
                    <li>
                        <Link href="/contact">𝗖𝗼𝗻𝘁𝗮𝗰𝘁✈️</Link>
                    </li>

                    {user && (
                        <li>
                            <Link href="/dashboard">𝗗𝗮𝘀𝗵𝗯𝗼𝗮𝗿𝗱✈️</Link>
                        </li>
                    )}

                    {user?.role === "admin" && (
                        <>

                            <li>
                                <Link href="/admin/users">𝗔𝗱𝗺𝗶𝗻✈️</Link>
                            </li>

                            <li>
                                <Link href="/admin/categories">𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆✈️</Link>
                            </li>
                            <li>
                                <Link href="/admin/products">𝗣𝗿𝗼𝗱𝘂𝗰𝘁✈️</Link>
                            </li>
                        </>

                    )}

                    {!user ? (
                        <>
                            <li>
                                <Link href="/login">𝗟𝗼𝗴𝗶𝗻✈️</Link>
                            </li>
                            <li>
                                <Link href="/register"> 𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿✈️ </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/profile"> {user.name} ({user.role}) </Link>
                            </li>
                            <li>
                                <button onClick={logout} className="btn-logout">
                                    𝗟𝗢𝗚𝗢𝗨𝗧
                                </button>
                            </li>
                        </>
                    )}

                </ul>


            </div>
        </nav>
    );
}