import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDone } from "../../JS/Actions/ActionTASK";
import "./filter.css";
const Filter = () => {
  // const gofilter = useSelector((state) => state.gofilter);
  const dispatch = useDispatch();
  const checked = (e) => {
    dispatch(filterDone());
  };
  return (
    <div className="checkbox">
      <input type="checkbox" onClick={checked} />
      <label id="checkDone"> Done </label>
      <input type="checkbox" onClick={checked} />
      <label>Not Done</label>
    </div>
  );
};
export default Filter;
