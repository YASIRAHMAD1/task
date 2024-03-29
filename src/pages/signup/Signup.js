import React from 'react';

function Signup() {
  return (
    <div>
      <form style={{margin: "20px auto",padding: "20px",width: "300px",border: "1px solid #ccc",borderRadius: "5px",backgroundColor: "#f9f9f9"}} id="registrationForm" action="/register" method="post">
        <h2>Register</h2>
        <input style={{width: "100%",padding: "10px",margin: "5px 0",display: "inline-block",border: "1px solid #ccc",borderRadius: "4px",boxSizing: "borderBox"}}type="text" name="username" placeholder="Username" required />
        <input style={{width: "100%",padding: "10px",margin: "5px 0",display: "inline-block",border: "1px solid #ccc",borderRadius: "4px",boxSizing: "borderBox"}}type="password" name="password" placeholder="Password" required />
        <input style={{width: "100%",padding: "10px",margin: "5px 0",display: "inline-block",border: "1px solid #ccc",borderRadius: "4px",boxSizing: "borderBox"}}type="password" name="confirmPassword" placeholder="Confirm Password" required />
        <input style={{width:"100%",padding: "10px",margin: "5px 0",display: "inline-block",border: "1px solid #ccc",borderadius: "4px",boxSizing: "borderBox"}} type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Signup;
