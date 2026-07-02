"use client";


import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      alert("𝗟𝗼𝗴𝗶𝗻 𝗳𝗮𝗶𝗹𝗲𝗱");
    }
  }



  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="font-bold"> 𝗟𝗼𝗴𝗶𝗻</h2>
        <input
          placeholder="𝗘𝗺𝗮𝗶𝗹"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>𝗟𝗢𝗚𝗜𝗡</button>

        <p>
           <Link href="/forgotpassword">𝗙𝗼𝗿𝗴𝗼𝘁 𝗣𝗮𝘀𝘀𝗿𝗼𝘄𝗱?</Link>
        </p>

        <p>
          𝗗𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗮𝗻𝘆 𝗮𝗰𝗰𝗼𝘂𝗻𝘁? <Link href="/register">𝗖𝗹𝗶𝗰𝗸 𝗵𝗲𝗿𝗲.</Link>
        </p>
      </form>
    </div>
  );
}