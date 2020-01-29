import axios from 'axios';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-brian"

const setTasksAction = (tasks) => ({
    type: "SET_TASKS_ACTION",
    payload: {
        tasks,
    }
})

export const getTasks = () => async (dispatch) => {

    try {
        const response = await axios.get (`${baseUrl}`)
        dispatch(setTasksAction(response.data.tasks))
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

        window.alert("Tarefa Criada com sucesso")

        dispatch(getTasks())
    } catch (error) {
        window.alert("Erro na criação da tarefa")
    }
}