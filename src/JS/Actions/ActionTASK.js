import {
  ADDTASK,
  EDITTASK,
  DELETETASK,
  ISDONE,
  FILTER_DONE,
} from "../constantes/actiontypes";
export const Addtask = (payload) => {
  return {
    type: ADDTASK,
    payload,
  };
};
export const edittask = (payload) => {
  return {
    type: EDITTASK,
    payload,
  };
};
export const deletetask = (payload) => {
  return {
    type: DELETETASK,
    payload,
  };
};
export const isdone = (payload) => {
  return {
    type: ISDONE,
    payload,
  };
};
export const filterDone = () => {
  return {
    type: FILTER_DONE,
  };
};
