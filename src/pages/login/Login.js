import React from "react";

function Login() {
  return (
    <div>
      <form
        style={{
          margin: "20px",
          padding: "20px",
          width: "300px",
          height:"100vh",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
        id="loginForm"
        action="/login"
        method="post"
      >
        <h2>Login</h2>
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "borderBox",
          }}
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "borderBox",
          }}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderadius: "4px",
            boxSizing: "borderBox",
          }}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
