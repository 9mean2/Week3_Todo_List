import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editList, __getTodos } from "../redux/modules/todosSlice";
import { BsCheckLg } from "react-icons/bs";

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
        <StDiv4>
          <StDiv>
            <h2>
              작성자 : <br />
            </h2>
            <Stinput
              value={writer}
              onChange={(event) => {
                setWriter(event.target.value);
              }}
            />
            <br />
            <h2>
              타이틀 : <br />
            </h2>
            <Stinput
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <br />
            <h2>
              콘텐츠 :<br />
            </h2>
            <textarea
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
            <StBtn onClick={onUpdateHandler}>
              <h3>
                <BsCheckLg />
              </h3>
            </StBtn>
          </StDiv>
        </StDiv4>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Edit;

const StDiv = styled.div`
  margin: auto;
  padding: 1rem;
  min-height: 900px;
  height: 95%;
  width: 100%;
  border: 5px solid white;
  border-radius: 2rem;
  textarea {
    font-size: 24px;
    border-radius: 1rem;
    resize: none;
    width: 100%;
    height: 40vh;
  }
`;

const StBtn = styled.button`
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

const StDiv4 = styled.div`
  padding: 16rem;
  margin: auto;

  display: flex;
  width: 50%;
  min-height: 90px;
`;

const Stinput = styled.input`
  font-size: 20px;
  border-radius: 1rem;
  width: 90%;
  height: 3vh;
  border: 0;
`;
