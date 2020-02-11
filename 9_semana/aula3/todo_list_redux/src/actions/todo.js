import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/brian/todos"

export const toggleTaskAction = (taskId) => ({
    type: "TOGGLE_TASK",
    payload: {
        taskId,
    }
});

export const setTasksAction = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
});

export const getTasks = () => async (dispatch, getState) => {
    const response = await axios.get(`${baseURL}`)
    
    dispatch(setTasksAction(response.data.tasks));

};

export const createTask = (text) => async (dispatch, getState) => {
    await axios.post(`${baseURL}`, {text: text});

    dispatch(getTasks());
};

export const toggleTask = (taskId) => async (dispatch, getState) => {
    await axios.put(`${baseURL}${taskId}/toggle`)

    dispatch(getTasks());
};

export const deleteTask = (taskId) => async (dispatch, getState) => {
    await axios.delete(`${baseURL}${taskId}`)

    dispatch(getTasks());
};