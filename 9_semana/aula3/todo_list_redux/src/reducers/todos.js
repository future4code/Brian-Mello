const initialState = {
    allTasks: [],
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_TASK":
            const newTask = [...state.allTasks, action.payload.task]
            return {...state, allTasks: newTask};
        
        case "SET_TASKS":
            return { ...state, allTasks: action.payload.task };

        default:
            return state;
    }
}