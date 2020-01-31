import React from 'react';
import {App} from '.';
import renderer from 'react-test-renderer';

describe('Teste Do App Container', () => {
    it('Snapshot', () => {
        const app = renderer.create(<App/>).toJSON();
        expect(app).toMatchSnapshot();
    });
});