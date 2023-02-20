import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todosSlice";

function Todos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <div>로딩중이라구요!!!</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 갈까요?
      </button>
      <div>
        <h1>나도 내 할일이 있다 아닙니까!?</h1>
      </div>
      {todos.map((todo) => {
        return (
          <StBox key={todo.id}>
            <h1> {todo.title} </h1>
            <h4>작성자 : {todo.writer}</h4>
          </StBox>
        );
      })}
      <br />
    </div>
  );
}

export default Todos;

const StBox = styled.div`
  border: 1px solid gray;
  display: block;
  text-align: center;
  padding: 40px;
  text-decoration: none;
  color: black;
  margin: 0px 1% 1% 1%;
  border-radius: 50px;
`;
