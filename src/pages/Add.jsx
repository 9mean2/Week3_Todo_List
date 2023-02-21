import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addList } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInputFoucs from "../hooks/useInputAutoFocus";

function Add() {
  const inputRef = useInputFoucs();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleValue, settitleValue] = useState("");
  const [writerValue, setWriterValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const onCreate = (event) => {
    event.preventDefault();
    navigate("/todos");
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
      alert("뭐라도 적어야겠죠?");
    }
  };

  return (
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
        cols="200"
        rows="50"
        type="text"
        onChange={(event) => setContentValue(event.target.value)}
        value={contentValue}
        placeholder="계획을 입력해주세요"
      />
      <br />
      <button type="submit">추가</button>
    </form>
  );
}

export default Add;
