import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { jwtserver } from "../util/api";

const Btn = styled.button`
  background: transparent;
  border: 0;
  color: #0095f6;
  cursor: pointer;
`;

const SignupContainer = styled.div`
  background-color: #fafafa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupFormContainer = styled.div`
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

const SignupButton = styled.button`
  width: 100%;
  background-color: #0095f6;
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 10px;
  margin-top: 10px;
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

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      try {
        await jwtserver.post("/register", {
          id: username,
          password: password,
        });
        alert("회원가입이 완료 되었습니다.");
        moveToSignIn();
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    }
  };
  const moveToSignIn = () => {
    navigate("/login");
  };
  return (
    <SignupContainer>
      <SignupFormContainer>
        <Logo src="https://ifh.cc/g/Z4xDJH.png" />
        <form onSubmit={signUpSubmitHandler}>
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
          <SignupButton type="submit">가입</SignupButton>
        </form>
        <Footer>
          <span>계정이 이미 있으신가요? &nbsp; </span>
          <Btn onClick={moveToSignIn}>로그인</Btn>
        </Footer>
      </SignupFormContainer>
    </SignupContainer>
  );
}

export default Signup;
