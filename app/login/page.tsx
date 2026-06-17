"use client";

export default function login() {

  return (

    <div className="auth-page" >
      <form className="auth-card">
        <h2>Login</h2>
        <input
          placeholder="Username Or Email"
          type="text"
        />

        <input
          placeholder="Password"
          type="password"
        />
        <button>Login</button>
        
      </form>
    </div>
  );
}