import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

function Home() {
  //   const navigate = useNavigate();

  return (
    <div>
      <StDiv3></StDiv3>
      <Nav>
        <img src="https://ifh.cc/g/8yxQjd.png" />
      </Nav>
      <h1>
        <StDiv2>
          <StyledLink to={"/todos/add"}>할 일 추가하기 ✏️</StyledLink>
          <br />
          <StyledLink to={"/todos"}>할 일 목록 보러가기 ✔</StyledLink>
        </StDiv2>
      </h1>
    </div>
  );
}

export default Home;

const StyledLink = styled(Link)`
  border-radius: 25px;
  margin: auto;
  width: 45%;
  display: block;
  text-align: center;
  padding: 40px;
  text-decoration: none;
  color: #37373d;
  background-color: white;
  color: black;
  background-size: cover;
  &:hover {
    background-color: #406af0;
    color: white;
    transition: 0.5s ease;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 20px;
  width: 90%;
  img {
    object-fit: cover;
    width: 60%;
  }
`;

const StDiv2 = styled.div`
  margin-top: 2%;
`;

const StDiv3 = styled.div`
  margin-top: 12%;
`;
