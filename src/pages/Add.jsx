import React, { useState } from "react";
import { addList } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInputFoucs from "../hooks/useInputAutoFocus";
import styled from "styled-components";

function Add() {
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
      navigate("/todos");
      dispatch(addList(newList));
      settitleValue("");
      setWriterValue("");
      setContentValue("");
    } else {
      alert("음.. 뭐라도 입력을 하셔야겠죠..?");
    }
  };

  return (
    <StDiv>
      <form onSubmit={onCreate}>
        <h2>작성자</h2>
        <input
          type="text"
          ref={inputRef}
          onChange={(event) => setWriterValue(event.target.value)}
          value={writerValue}
          placeholder="이름이 뭔가요!!"
        />
        <h2>뭐라도 적어보셔</h2>
        <input
          type="text"
          onChange={(event) => settitleValue(event.target.value)}
          value={titleValue}
          placeholder="너가 할 일이 뭐가있냐 ! "
        />
        <h2>내용임!!</h2>
        <textarea
          cols="183"
          rows="30"
          type="text"
          onChange={(event) => setContentValue(event.target.value)}
          value={contentValue}
          placeholder="계획을 입력해주세요"
        />
        <br />
        <div>
          <StBtn type="submit">추가</StBtn>
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
