const initialState = {
    allTasks: []
}

const tasks = (state=initialState, action) => {
    switch(action.type) {
        case "SET_TASKS_ACTION":
            return { ...state, allTasks: action.payload.tasks}
        
        default:
            return state
    }
}

export default tasks;