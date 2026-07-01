"use client";
import { useState } from "react";


export default function forgotpassword() {
  const [email, setEmail] = useState("");
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("𝗦𝘆𝘀𝘁𝗲𝗺 𝘄𝗶𝗹𝗹 𝘀𝗲𝗻𝗱 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝘁𝗼 𝘆𝗼𝘂𝗿 𝗘𝗺𝗮𝗶𝗹. " + email);
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>𝗙𝗼𝗿𝗴𝗼𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱</h1>

        <input
          type="email"
          placeholder="𝗘𝗻𝘁𝗲𝗿 𝘆𝗼𝘂𝗿 𝗲𝗺𝗮𝗶𝗹"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>𝗦𝗲𝗻𝗱 𝗥𝗲𝘀𝗲𝘁 𝗟𝗶𝗻𝗸</button>
      </form>
    </div>
  );
}