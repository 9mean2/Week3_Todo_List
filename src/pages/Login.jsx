import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

//jwt 관련
import { jwtserver } from "../util/api";
import Cookies from "js-cookie";

const Btn = styled.button`
  background: transparent;
  border: 0;
  color: #0095f6;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  width: 450px;
  height: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
`;

const Logo = styled.img`
  width: 250px;
  margin: 7% auto 20px auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: #0095f6;
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #0045e6;
    transition: 0.5s ease;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #8e8e8e;
`;

const StLink = styled(Link)`
  margin-left: 5px;
  color: #0095f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //쿠키를 불러옴
  const getCookie = Cookies.get("token");
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (getCookie) {
      moveToHome();
    }
  }, [getCookie]);

  const handleSubmit = async (e) => {
    let now = new Date();
    const expiryDate = new Date(now.setMinutes(now.getMinutes() + 10));

    e.preventDefault();
    if (username !== "" && password !== "") {
      try {
        const response = await jwtserver.post("/login", {
          id: username,
          password: password,
        });
        alert("로그인에 성공하여 정상적으로 토큰이 발급 되었습니다.");
        const { token } = response.data;
        moveToHome();
        Cookies.set("token", token, { expires: expiryDate });
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const moveToHome = () => {
    navigate("/");
  };
  return (
    <LoginContainer>
      <LoginFormContainer>
        <Logo src="https://ifh.cc/g/Z4xDJH.png" />
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <LoginButton type="submit">로그인</LoginButton>
        </form>
        <Footer>
          <span>계정이 없으신가요?</span>
          <Btn onClick={() => navigate("/signup")}>가입하기</Btn>
        </Footer>
      </LoginFormContainer>
    </LoginContainer>
  );
}

export default Login;
