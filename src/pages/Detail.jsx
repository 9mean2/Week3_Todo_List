import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todosSlice";
import { MdOutlineEditNote } from "react-icons/md";
import useAuthority from "../hooks/useAuthority";

function Detail() {
  useAuthority();

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
        <StDiv4>
          <StDiv>
            <StDialogHeader>
              <h3>{`작성자 : ${foundData.writer}`}</h3>
            </StDialogHeader>
            <StTitle>
              {" "}
              <h2>제목 : {foundData.title}</h2>
            </StTitle>

            <StContent>
              <h3>할 일 : {foundData.content}</h3>
            </StContent>

            <div>
              <StLink to={"/todos"}>이전으로!</StLink>
              <EditBtn
                onClick={() => {
                  navigate(`/todos/edit/${foundData.id}`);
                }}
              >
                <h2>
                  <MdOutlineEditNote />
                </h2>
              </EditBtn>
            </div>
          </StDiv>
        </StDiv4>
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
  background-color: white;
  border-radius: 1rem;
`;

const EditBtn = styled.button`
  font-size: 25px;
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
  width: 94%;
  bottom: 3%;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  &:hover {
    color: white;
    background-color: #406af0;
    transition: 0.5s ease;
  }
  border: 0;
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
  background-color: white;
  border-radius: 1rem;
`;

const StContent = styled.p`
  padding: 0 24px;
  font-size: 45px;
  font: bold;
  background-color: white;
  border-radius: 1rem;
`;

const StDiv = styled.div`
  margin: auto;
  padding: 1rem;
  min-height: 900px;
  height: 95%;
  width: 100%;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 10px 5px 10px 5px rgb(0, 0, 0, 0.4);
`;

const StDiv4 = styled.div`
  padding: 16rem;
  margin: auto;

  display: flex;
  width: 50%;
  min-height: 90px;
`;
