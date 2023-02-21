import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editList, __getTodos } from "../redux/modules/todosSlice";

function Edit() {
  const [content, setContent] = useState("");
  const data = useSelector((state) => {
    return state.todos.todos;
  });
  const dispatch = useDispatch();
  const params = useParams();
  const foundData = data.find((todos) => {
    return todos.id == params.id;
  });
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  const onUpdateHandler = async (id) => {
    await dispatch(editList(id));
  };

  return (
    <div>
      {foundData.writer} <br />
      <input
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button onClick={onUpdateHandler}>수정</button>
    </div>
  );
}

export default Edit;
