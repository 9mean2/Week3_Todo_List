import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editList, __getTodos } from "../redux/modules/todosSlice";

function Edit() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");

  const data = useSelector((state) => {
    return state.todos.todos;
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();
  const foundData = data.find((todos) => {
    return todos.id == params.id;
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  useEffect(() => {
    setTitle(foundData.title);
    setContent(foundData.content);
    setWriter(foundData.writer);
  }, [foundData]);

  const onUpdateHandler = (event) => {
    event.preventDefault();
    navigate("/todos");
    dispatch(editList({ id: foundData.id, title, content, writer }));
    dispatch(__getTodos());
  };

  return (
    <>
      {data.length !== 0 ? (
        <StDiv>
          <h1>
            작성자 : <br />
          </h1>
          <input
            value={writer}
            onChange={(event) => {
              setWriter(event.target.value);
            }}
          />
          <br />
          <h1>
            타이틀 : <br />
          </h1>
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <br />
          <h1>
            콘텐츠 :<br />
          </h1>
          <textarea
            cols="200"
            rows="50"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <StBtn onClick={onUpdateHandler}>Edit</StBtn>
        </StDiv>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Edit;

const StDiv = styled.div`
  margin: 1% 3% 1% 3%;
`;

const StBtn = styled.button`
  margin-top: 0.5%;
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
`;
