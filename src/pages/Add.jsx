import React, { useState } from "react";
import { Link } from "react-router-dom";
import { __getTodos } from "../redux/modules/todosSlice";

function Add() {
  const [inputValue, setInputValue] = useState("");
  // const onCreate = (event) => {
  //   if (inputValue) {
  //     const newTodo = { title: inputValue };
  //     dispatchEvent(addList(newTodo));
  //     setInputValue("");
  //   }
  // };
  return (
    <form>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button type="submit">추가~!!</button>
      <h1>
        <Link to={"/"}>홈으로!</Link>
      </h1>
    </form>
  );
}

export default Add;
