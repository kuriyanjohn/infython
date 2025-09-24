import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("⚠️ Both fields are required!");
      return;
    }

    setError("");
    alert(`Logged in with Email: ${email} and Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "20px auto", borderRadius:'10px' }}>
      <div style={{backgroundColor:'rgba(98, 100, 97, 1)',borderRadius:'10px',padding:'30px', height:'300px' ,alignContent:'center'}}> 
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
