import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteList, __getTodos } from "../redux/modules/todosSlice";

function Todos() {
  const onDeleteBtnHandler = async (id) => {
    await dispatch(deleteList(id));
    await dispatch(__getTodos());
  };

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
      {todos?.map((todo) => {
        return (
          <StBox key={todo.id}>
            <StLink to={`/todos/${todo.id}`}>
              {" "}
              <h1> {todo.title} </h1>
            </StLink>
            <h4>작성자 : {todo.writer}</h4>
            <button onClick={() => onDeleteBtnHandler(todo.id)}>삭제</button>
          </StBox>
        );
      })}
      <br />
      <StLink2 to={"/todos/add"}>추가 ㄱ</StLink2>
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

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StLink2 = styled(Link)`
  font-size: 24px;
`;
