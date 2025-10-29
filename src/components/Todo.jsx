import {useSelector} from "react-redux";
import Addform from "./Addform";
import {useDispatch} from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {


    const dispatch= useDispatch()
    


    const todos=useSelector((state)=> state.todos);
    console.log(todos);
    return (
        <>
        <h3>TODO LIST APP</h3>
        <br></br>
        <Addform/>
        
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
{todos.map((todo)=>(
    <li key = {todo.id} style={{ textDecoration: todo.isDone ? "line-through" : "none"  }}>{todo.task} {" "} <button onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button> {" "}<button onClick={() => dispatch(markAsDone(todo.id))}>DONE</button>{" "}</li>
   
    
))

}


        </ul>
        
        </>
    );
}