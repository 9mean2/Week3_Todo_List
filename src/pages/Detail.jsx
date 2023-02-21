import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todosSlice";

function Detail() {
  const navigate = useNavigate();
  const data = useSelector((state) => {
    // console.log("state", state);
    return state.todos.todos;
  });
  //state = 스토어
  //   state.todos 리듀서

  const dispatch = useDispatch();

  const params = useParams();

  const foundData = data.find((todos) => {
    return todos.id == params.id;
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  return (
    <>
      {data.length !== 0 ? (
        <div>
          <StDialogHeader> {`작성자 : ${foundData.writer}`}</StDialogHeader>
          <StTitle> 제목 : {foundData.title}</StTitle>

          <StContent>할 일 : {foundData.content}</StContent>

          <div>
            <StLink to={"/todos"}>이전으로!</StLink>
            <EditBtn
              onClick={() => {
                navigate(`/todos/edit/${foundData.id}`);
              }}
            >
              수정하기
            </EditBtn>
          </div>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
}

export default Detail;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  font-size: 24px;
`;

const EditBtn = styled.button`
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
  font-size: 24px;
`;

const StLink = styled(Link)`
  justify-content: space-between;
  text-decoration: underline;
  color: teal;
  cursor: pointer;
  font-size: 24px;
  display: block;
  text-align: right;
  margin-right: 2%;
`;

const StTitle = styled.p`
  padding: 0 24px;
  font-size: 20px;
  font: bold;
`;

const StContent = styled.p`
  padding: 0 24px;
  font-size: 50px;
  font: bold;
`;
