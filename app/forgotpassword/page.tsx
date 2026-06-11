"use client";

export default function forgotpassword() {

  return (

    <div className="auth-page" >
      <form className="auth-card">
        <h2>Forgot password</h2>
        <input
          placeholder="Enter Your old Password"
          type="password"
        />

        <input
          placeholder="Enter Your New Password"
          type="password"
        />
        <input
          placeholder="Confirm Your New Password"
          type="password"
        />
        <button>Re-Password</button>
      </form>
    </div>
  );
}