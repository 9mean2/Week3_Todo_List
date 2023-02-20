import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addList } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Add() {
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
      };
      dispatch(addList(newList));
      settitleValue("");
      setWriterValue("");
    }
  };
  return (
    <form onSubmit={onCreate}>
      <h2>작성자</h2>
      <input
        type="text"
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
      <Link to={"/todos"}>작성한거 보러가시죠?</Link>;
    </form>
  );
}

export default Add;
