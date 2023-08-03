import React, { useEffect, useState } from "react";
import "./styles.css";
import { useLogin } from "@/hooks/admin/useLogin";
import { isAccessTokenExpired } from "@/services/AuthService";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = isAccessTokenExpired();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: loginMutation } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      loginMutation({ username, password });
    }
  };

  useEffect(() => {
    // Check if the user is already authenticated (logged in)
    if (!auth) {
      // Redirect to the dashboard
      navigate("/admin/dashboard");
    }
  }, [auth, navigate]);

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <a href="#" className="link">
            Forgot Your Password?
          </a>
        </div>
        <div className="action">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
