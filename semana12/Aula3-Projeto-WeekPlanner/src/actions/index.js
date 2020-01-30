import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-brian"

const setTaskDayAction = (task) => ({
    type: "SET_TASK_DAY_ACTION",
    payload: {
        task,
    }
})

export const getTasks = () => async (dispatch) => {

    try {
        const response = await axios.get(`${baseUrl}`)
        dispatch(setTaskDayAction(response.data))
    } catch (error) {
        window.alert ("Erro de renderização")
    }
}

export const createTask = (text, day) => async (dispatch) => {

    const newTask = {
        text,
        day
    }

    try {
        await axios.post(`${baseUrl}`, newTask)

        dispatch(getTasks())
    } catch (error) {
        window.alert("Erro na criação da tarefa")
    }
}