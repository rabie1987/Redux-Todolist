import {
  ADDTASK,
  EDITTASK,
  DELETETASK,
  ISDONE,
  FILTER_DONE,
} from "../constantes/actiontypes";
const initialState = {
  todo: [],
  // gofilter: true,
};
const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, todo: [...state.todo, action.payload] };

    case EDITTASK:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id
            ? { ...el, description: action.payload.description }
            : el
        ),
      };
    case DELETETASK:
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload.id),
      };
    case ISDONE:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case FILTER_DONE:
      // return {
      //   ...state,
      //   todo: [...state.todo.filter((el) => el.isDone === state.gofilter)],
      // };
      return { ...state, todo: state.todo.filter((el) => el.isDone === true) };
    default:
      return state;
  }
};
export default reducerTask;
