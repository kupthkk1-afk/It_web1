"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿 𝗦𝘂𝗰𝗰𝘂𝘀𝘀𝗳𝘂𝗹")
      router.push("/login");
    } else {
      alert("𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿 𝗨𝗻𝘀𝘂𝗰𝗰𝘂𝘀𝘀𝗳𝘂𝗹");
    }
  }


  return (

    <div className="auth-page">
      <form className="auth-card"  onSubmit={handleSubmit}>
        <h2> 𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿 </h2>
        <input
          placeholder="𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊"
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />  
        <input
          placeholder="𝕰𝖒𝖆𝖎𝖑"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿</button>
      </form>
    </div>
  );
}