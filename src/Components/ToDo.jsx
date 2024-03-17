import { useState } from "react"
import uuid from 'react-uuid'
import { TiTick, TiTrash  } from "react-icons/ti";

export default function ToDo() {

    const [list, setList] = useState([]);
    const [task, setTask] = useState({
        title: "",
        by: ""
    })


    function handleTask(e){
        let key = e.target.name;
        let value = e.target.value;
        setTask({...task, [key]: value});
    }

    function handleAddTask(){
        const newList = {...task, "id": uuid(), "isDone": false}
        setList([...list, newList])
    }

    function markDone(itemId){
        const index = list.findIndex((task) => task.id === itemId);
        const doneTask = [...list];
        doneTask[index].isDone = true;
        setList(doneTask);
    }

    function deleteTask(itemId){
        const filteredTask = list.filter((item) => {
            return item.id !== itemId
        })

        setList(filteredTask);
    }

    return (
        <>
            <div>
                <h1>My ToDo List</h1>
                <div>I want to do <input value={task.title}  type="text" name="title" onChange={handleTask}/> by {" "}
                    <input value={task.by} type="date" name="by" onChange={handleTask} /> {" "}
                    <button onClick={handleAddTask}>Add a Task</button>
                </div>
                <ul>
                    {
                        list.map((item) => {
                            return <li key={item.id}>
                                <span style={{textDecoration: item.isDone ? "line-through" : ""}}>
                                    <strong>{item.title}</strong> is due by {item.by}
                                </span>
                                <span><TiTick size={24} onClick={() => {markDone(item.id)}}/></span>
                                <span><TiTrash size={24} onClick={() => {deleteTask(item.id)}}/></span>

                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}