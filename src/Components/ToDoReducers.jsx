import { useReducer } from "react";
import { TiTick, TiTrash  } from "react-icons/ti";
import { listReducers, taskReducers } from "./Reducers";


export default function ToDoReducers(){

    const [list, dispatchList] = useReducer(listReducers, []);
    const [task, dispatchTask] = useReducer(taskReducers, {
        title: "",
        by: ""
    })

    const handleTask = (e) =>{
        // e.preventDefault();
        dispatchTask({
            type: "HANDLE_TASK",
            field: e.target.name,
            payload: e.target.value
        })
    }

    return (
        <div>
            <h2>My ToDo List</h2>
            <div>
                I want to do <input type="text" name="title" onChange={handleTask}/> by {" "}
                <input type="date" name="by" onChange={handleTask}/> {" "}
                <button onClick={() => dispatchList({type: 'ADD_TASK', payload: task})}>Add a Task</button>
            </div>
            <ul>
                {
                    list.map((item) => {
                        console.log(item);
                        return <li key={item.id}>
                                    <span style={{textDecoration: item.isDone ? "line-through" : ""}} >
                                        <strong>{item.title} is due by {item.by}</strong>
                                    </span>
                                    <span><TiTick size={24} onClick={() => dispatchList({type: 'DONE_TASK', payload: item.id})}/></span>
                                    <span><TiTrash size={24} onClick={() => dispatchList({type: 'REMOVE_TASK', payload: item.id})}/></span>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}