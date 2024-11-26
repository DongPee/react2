import { Link } from "react-router-dom";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // 로그인 검증 로직 (단순히 예시로 사용)
    if (username === "test" && password === "1234") {
      setSuccessMessage("로그인 성공!");
      setErrorMessage("");
    } else {
      setErrorMessage("아이디나 비밀번호가 잘못되었습니다.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="Login">
      <div className="login-box">
        {/* Instagram Logo */}
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram Logo"
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="사용자 이름 이메일 또는 휴대폰 번호"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>

        {/* Forgot password link */}
        <div className="forgot-password">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>

        {/* Sign up link */}
        <div className="signup-link">
          <p>
            <a href="#">새 계정 만들기</a>
          </p>
        </div>

        {/* Success and Error Messages */}
        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default Login;
