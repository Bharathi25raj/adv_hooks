import uuid from "react-uuid";


function listReducers(state, action) {
    switch(action.type){
        case "ADD_TASK":
            const newList = {...action.payload, "id": uuid(), "isDone": false}
            return [...state, newList];
        case "REMOVE_TASK":
            const filteredTask = state.filter((item) => item.id !== action.payload)
            return filteredTask;
        case "DONE_TASK":
            const index = state.findIndex((item) => item.id === action.payload);
            const doneTask = [...state];
            doneTask[index].isDone = true;
            return doneTask;
        default: return state;
    }
}


function taskReducers(state, action){
    switch(action.type){
        case 'HANDLE_TASK': {
            return {...state, [action.field]: action.payload}
        }           
        
        default:{
            return state;
        }
            
    }
}

export { listReducers, taskReducers }