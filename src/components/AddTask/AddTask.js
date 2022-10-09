import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtask } from "../../JS/Actions/ActionTASK";
import "./addtask.css";

const AddTask = () => {
  const [myinput, SetMyinput] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    if (myinput) {
      dispatch(
        Addtask({ description: myinput, id: Math.random(), isDone: false })
      );
    } else {
      alert("Oups its empty!");
    }
    SetMyinput("");
  };
  return (
    <div className="inputaddd">
      <input
        className="inputadd"
        type="text"
        placeholder="write here your task"
        onChange={(e) => SetMyinput(e.target.value)}
        value={myinput}
      />
      <button onClick={add}>
        {" "}
        <span> Add </span>
      </button>
    </div>
  );
};

export default AddTask;
