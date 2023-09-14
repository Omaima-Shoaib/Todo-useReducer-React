import React from "react";
import { ACTIONS } from "../App";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircle from "@mui/icons-material/CheckCircle";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function Todo(props) {
  return (
    <div
      className={`${
        props.todo.complete ? "bg-green-100" : "bg-red-100"
      } font-semibold  m-2 px-2 py-1 rounded-md flex justify-between text-slate-700`}
    >
      <div>{props.todo.name}</div>
      <div className="  flex justify-between">
       <div className="px-2">
       <button onClick={()=>props.dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:props.todo.id}})}>{props.todo.complete?<CancelOutlinedIcon></CancelOutlinedIcon>:<CheckCircleOutline></CheckCircleOutline>}</button>
       </div>
        <button  onClick={()=>props.dispatch({type:ACTIONS.DELETE_TODO,payload:{id:props.todo.id}})}><DeleteOutlineIcon></DeleteOutlineIcon></button>
      </div>
    </div>
  );
}

export default Todo;
