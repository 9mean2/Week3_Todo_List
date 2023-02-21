import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
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

  const onUpdateHandler = (event) => {
    event.preventDefault();
    navigate("/todos");
    dispatch(editList({ id: foundData.id, title, content, writer }));
    dispatch(__getTodos());
  };

  return (
    <>
      {data.length !== 0 ? (
        <div>
          {foundData.writer} <br />
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <textarea
            cols="200"
            rows="50"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <input
            value={writer}
            onChange={(event) => {
              setWriter(event.target.value);
            }}
          />
          <button onClick={onUpdateHandler}>수정</button>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
}

export default Edit;
