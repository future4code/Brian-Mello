import {setTaskDayAction, getTasks, createTask} from '.'
import axios from 'axios';

const tasks = [{
    id: 1,
    text: 'helloWorld',
    day: 'Segunda'
}]

describe('Teste das actions', () => {

    it('teste para saber se o setTasks está retornando as tasks ', () => {
        
        const expectedAction = {
            type: "SET_TASK_DAY_ACTION",
            payload: {
                task: tasks
            }
        }

        const actions = setTaskDayAction(tasks)
        
        expect(actions).toEqual(expectedAction)
    });
});

describe('teste do getTasks', () => {
    it('teste para saber se o getTasks retorna um valor', async () => {

        const dispatchMock = jest.fn()

        axios.get = jest.fn(() => {
            return {
                data: tasks
            }
        })


        await getTasks()(dispatchMock)

        expect(dispatchMock).toHaveBeenCalledWith(setTaskDayAction(tasks))
    });
});

describe('testando se o CreateTask cria uma task', () => {
    it('testando a função de criar tarefas', async () => {

        const dispatchMock = jest.fn()
        axios.post = jest.fn().mockReturnValue( {
            status: 200
        })

        await createTask('ola', 'Segunda')(dispatchMock)

        expect(dispatchMock).toHaveBeenCalled()
    });
});
