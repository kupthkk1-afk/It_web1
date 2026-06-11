"use client";
export default function register() {

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