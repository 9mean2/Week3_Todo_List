import { hover } from "@testing-library/user-event/dist/hover";
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
        <img src="https://ifh.cc/g/HHGWh7.png" />
      </Nav>
      <h1>
        <StDiv2>
          <StyledLink to={"/todos/add"}>할 일 추가하기!</StyledLink>
          <br />
          <StyledLink to={"/todos"}>할 일 목록 보러가기!</StyledLink>
        </StDiv2>
      </h1>
    </div>
  );
}

export default Home;

const StyledLink = styled(Link)`
  border-radius: 25px;
  margin: 0px 1% 0% 1%;

  display: block;
  text-align: center;
  padding: 40px;
  text-decoration: none;
  color: #37373d;
  background-color: #eeb800;

  background-size: cover;
  background-image: url("https://ifh.cc/g/MzYxZl.png");
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

const StDiv2 = styled.div`
  margin-top: 2%;
`;

const StDiv3 = styled.div`
  margin-top: 12%;
`;
