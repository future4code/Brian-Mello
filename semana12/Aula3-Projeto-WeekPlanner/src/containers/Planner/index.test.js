import React from 'react';
import {Planner} from '.';
import renderer from "react-test-renderer";


describe('Teste do planner container', () => {

    it('Snapshot', () => {
        const plannerSnapshot = renderer.create(<Planner getTasks={() =>{}} tasks={[]} />).toJSON();
        expect(plannerSnapshot).toMatchSnapshot();
    });
})
