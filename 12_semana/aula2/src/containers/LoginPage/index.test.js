import React from 'react'
import {shallow} from 'enzyme'
import renderer from "react-test-renderer";
import { LoginPage } from './index'

describe('Teste Container Do LoginPage', () => {

    it('Snapshot', () => {
        const loginPage = renderer.create(<LoginPage/>).toJSON();
        expect(loginPage).toMatchSnapshot();
    })
})