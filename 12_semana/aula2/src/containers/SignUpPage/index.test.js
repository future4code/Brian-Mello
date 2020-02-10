import React from 'react'
import {shallow} from 'enzyme'
import renderer from "react-test-renderer";
import { SignUpPage } from './index'

describe('Teste Container Da SignUpPage', () => {

    it('Snapshot', () => {
        const signUpPage = renderer.create(<SignUpPage/>).toJSON();
        expect(signUpPage).toMatchSnapshot();
    })
})