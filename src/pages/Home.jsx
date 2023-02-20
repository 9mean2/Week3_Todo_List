import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  //   const navigate = useNavigate();

  return (
    <div>
      <Nav>
        <img src="https://ifh.cc/g/HHGWh7.png" />
      </Nav>
      <h1>
        안녕하세요
        <StyledLink to={"/todos/add"}>할 일 추가하기!</StyledLink>
        <br />
        <StyledLink to={"/todos"}>할 일 목록 보러가기!</StyledLink>
      </h1>
    </div>
  );
}

export default Home;

const StyledLink = styled(Link)`
  border: 1px solid gray;
  display: block;
  text-align: center;
  padding: 40px;
  text-decoration: none;
  color: black;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: fill;
  margin: auto;
  font-size: 20px;
  max-width: 1200px;
  width: 90%;
`;
