import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "../EditTask/EditTask";
import "./todolist.css";
import { deletetask, isdone } from "../../JS/Actions/ActionTASK";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todo.map((el) => (
        <div className="ulbtn">
          <ul>
            <li style={el.isDone ? { textDecoration: "line-through" } : null}>
              {" "}
              {el.description}
            </li>
          </ul>

          <button className="bouton" onClick={() => dispatch(isdone(el.id))}>
            {el.isDone ? "unDone" : "isDone"}
          </button>
          <button className="bouton" onClick={() => dispatch(deletetask({ id: el.id }))}>
            Delete
          </button>
          <EditTask item={el} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
