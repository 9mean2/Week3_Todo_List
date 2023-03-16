import React, { useState } from "react";
import { addList } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInputFoucs from "../hooks/useInputAutoFocus";
import styled from "styled-components";
import { MdAddCircle } from "react-icons/md";
// import useAuthority from "../hooks/useAuthority";

function Add() {
  // useAuthority();

  const inputRef = useInputFoucs();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleValue, settitleValue] = useState("");
  const [writerValue, setWriterValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const onCreate = async (event) => {
    event.preventDefault();

    if ((titleValue, writerValue)) {
      const newList = {
        id: Date.now(),
        title: titleValue,
        writer: writerValue,
        content: contentValue,
      };
      dispatch(addList(newList));
      settitleValue("");
      setWriterValue("");
      setContentValue("");
    } else {
      alert("빈 칸을 채워주세요");
    }
  };

  return (
    <StDiv>
      <form onSubmit={onCreate}>
        <StDiv4>
          <StDiv1>
            <h2>작성자</h2>
            <Stinput1
              type="text"
              ref={inputRef}
              onChange={(event) => setWriterValue(event.target.value)}
              value={writerValue}
              placeholder="작성자 "
            />
            <h2>제목</h2>
            <Stinput1
              type="text"
              onChange={(event) => settitleValue(event.target.value)}
              value={titleValue}
              placeholder="제목을 입력해주세요 "
            />
            <h2>오늘 할 일</h2>
            <textarea
              cols="183"
              rows="30"
              type="text"
              onChange={(event) => setContentValue(event.target.value)}
              value={contentValue}
              placeholder="계획을 입력해주세요"
            />
            <br />
          </StDiv1>
        </StDiv4>
        <div>
          <StBtn type="submit">
            <MdAddCircle />{" "}
          </StBtn>
        </div>
      </form>
    </StDiv>
  );
}

export default Add;

const StDiv = styled.div`
  margin: 1% 3% 1% 3%;
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

const Stinput1 = styled.input`
  font-size: 20px;
  border-radius: 1rem;
  width: 90%;
  height: 3vh;
  border: 1px solid black;
`;

const StDiv1 = styled.div`
  margin: auto;
  padding: 1rem;
  min-height: 900px;
  height: 95%;
  width: 100%;
  border: 5px solid white;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 10px 5px 10px 5px rgb(0, 0, 0, 0.4);

  textarea {
    font-size: 24px;
    border-radius: 1rem;
    resize: none;
    width: 100%;
    height: 40vh;
  }
`;

const StDiv4 = styled.div`
  padding: 16rem;
  margin: auto;

  display: flex;
  width: 50%;
  min-height: 90px;
`;
