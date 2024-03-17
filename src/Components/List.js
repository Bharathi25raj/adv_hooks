import { useState, useTransition } from "react"

export default function List() {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const [isPending, setTransition] = useTransition();

    function handleInput(e){
        e.preventDefault();
        setInput(e.target.value);

        setTransition(() => {
            const newList = [];
            for(let i = 0; i < 10000; i++){
                newList.push(e.target.value);
            }
            setList(newList);
        })
    }

    return (
        <div>
            <input value={input} type="text" onChange={handleInput}/>
            <ul>
                {
                    isPending ? <h2>...Loading</h2> :
                    list.map((val) => {
                        return <li>{val}</li>
                    })
                }
            </ul>
        </div>
    )
}