"use client";

export default function login() {

  return (

    <div className="auth-page" >
      <form className="auth-card">
        <h2>𝗟𝗼𝗴𝗶𝗻</h2>
        <input
          placeholder="𝖀𝖘𝖊𝖓𝖆𝖒𝖊 𝕺𝖗 𝖊𝖒𝖆𝖎𝖑"
          type="text"
        />

        <input
          placeholder="𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉"
          type="password"
        />
        <button>𝗟𝗼𝗴𝗶𝗻</button>
        
      </form>
    </div>
  );
}