import tasks from "./weekTasksReducer";
import {setTaskDayAction} from '../actions';

describe('Testando o allTasks do reducer', () => {
    it('testando array de tarefas', () => {
        const initialState = {
            allTasks: []
        }

        const mockTask = [{
            id: 1,
            text: 'helloWorld',
            day: 'Segunda'
        }]

        const expectedStore = tasks(initialState, setTaskDayAction(mockTask))

        expect(expectedStore.allTasks).toHaveLength(1)
        expect(expectedStore.allTasks[0].text).toEqual('helloWorld')
    });
});