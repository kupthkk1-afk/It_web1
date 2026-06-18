"use client";

export default function forgotpassword() {

  return (

    <div className="auth-page" >
      <form className="auth-card">
        <h2>𝗙𝗼𝗿𝗴𝗼𝘁 𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱</h2>
        <input
          placeholder="𝕰𝖓𝖙𝖊𝖗 𝖄𝖔𝖚𝖗 𝖔𝖑𝖉 𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉"
          type="password"
        />

        <input
          placeholder="𝕰𝖓𝖙𝖊𝖗 𝖄𝖔𝖚𝖗 𝕹𝖊𝖜 𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉"
          type="password"
        />
        <input
          placeholder="𝕮𝖔𝖓𝖋𝖎𝖗𝖒 𝖄𝖔𝖚𝖗 𝕹𝖊𝖜 𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉"
          type="password"
        />
        <button>𝗥𝗲𝘀𝗲𝘁-𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱</button>
      </form>
    </div>
  );
}