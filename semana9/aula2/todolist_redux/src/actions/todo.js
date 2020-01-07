export const newTaskAction = newTask => {
    return {
        type: "TASK_POST",
        payload: {
            newTask: newTask
        }
    }
}

export const deleteTaskAction = deleteTask => {
    return {
        type: "DELETE_TASK",
        payload: {
            deleteTask: deleteTask
        }
    }
}

export const checkTasksAction = checkTasks => {
    return {
        type: "CHECK_TASK",
        payload: {
            checkTasks: checkTasks
        }
    }
}

export const checkAllTasksAction = checkAllTasks => {
    return {
        type: "CHECK_ALL_TASKS",
        payload: {
            checkAllTasks: checkAllTasks
        }
    }
}

export const filterAllTasksAction = filterAllTasks => {
    return {
        type: "FILTER_ALL_TASKS",
        payload: {
            filterAllTasks: filterAllTasks
        }
    }
}

export const filterpendentsTasksAction = pendentsTasks => {
    return {
        type: "FILTER_PENDENTS_TASKS",
        payload: {
            pendentsTasks: pendentsTasks
        }
    }
}

export const filterCompletedTasks = CompletedTasks => {
    return {
        type: "FILTER_COMPLETED_TASKS",
        payload: {
            CompletedTasks: CompletedTasks
        }
    }
}

export const removeCompletedTaskAction = removeCompletedTask => {
    return {
        type: "REMOVE_COMPLETED_TASKS",
        payload: {
            removeCompletedTask: removeCompletedTask
        }
    }
}