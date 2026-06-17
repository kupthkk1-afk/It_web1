"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function register() {

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
      router.push("/login");
    } else {
      alert("Register failed");
    }
  }

  return (
    

    <div className="auth-page" >
      <form className="auth-card">
        <h2>Register</h2>  
        <input
          placeholder="Username"
          type="text"
        />
        <input
          placeholder="Email"
          type="email"
        />
        <input
          placeholder="Password"
          type="password"
        />
        <button>Register</button>
        </form>
    </div>
  );
}