import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addList, __getTodos } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
function Add() {
  const dispatch = useDispatch();
  const [titleValue, settitleValue] = useState("");
  const [writerValue, setWriterValue] = useState("");

  const onCreate = () => {
    if ((titleValue, writerValue)) {
      const newList = { title: titleValue, writer: writerValue };
      dispatch(addList(newList));
      settitleValue("");
      setWriterValue("");
    }
  };
  return (
    <form onSubmit={onCreate}>
      할 일 입력하셈! :
      <input
        type="text"
        onChange={(event) => settitleValue(event.target.value)}
        value={titleValue}
      />
      작성자 :
      <input
        type="text"
        onChange={(event) => setWriterValue(event.target.value)}
        value={writerValue}
      />
      <button type="submit">추가~!!</button>
      <h1>
        <Link to={"/"}>홈으로!</Link>
      </h1>
    </form>
  );
}

export default Add;
