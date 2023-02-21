import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "../pages/Add";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="/todos/add" element={<Add />} />
        <Route path="/todos/:id" element={<Detail />} />
        <Route path="/todos/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
