import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteList, __getTodos } from "../redux/modules/todosSlice";
import { MdHome } from "react-icons/md";
import { VscTrash } from "react-icons/vsc";

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
      <StBtn
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>
          <MdHome />
        </h1>
      </StBtn>
      {todos?.map((todo) => {
        return (
          <StBox key={todo.id}>
            <StLink to={`/todos/${todo.id}`}>
              <h1> {todo.title} </h1>
            </StLink>
            <h4>작성자 : {todo.writer}</h4>
            <StBtn2 onClick={() => onDeleteBtnHandler(todo.id)}>
              <h2>
                <VscTrash />
              </h2>
            </StBtn2>
          </StBox>
        );
      })}
      <br />
    </div>
  );
}

export default Todos;

const StBox = styled.div`
  display: block;
  text-align: center;
  padding: 40px;
  text-decoration: none;
  color: black;
  margin: 0px 1% 1% 1%;
  border-radius: 50px;
  background-color: white;
  background-size: cover;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #406af0;
    transition: 0.5s ease;
    border: 0;
  }
`;

const StBtn = styled.button`
  margin-bottom: 1%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  height: 46px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #406af0;
    color: white;
    transition: 0.5s ease;
    border: 0;
  }
`;

const StBtn2 = styled.button`
  border: 0;
  font-size: 19px;
  background: transparent;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    color: tomato;
  }
`;
