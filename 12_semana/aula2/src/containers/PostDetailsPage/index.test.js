import React from 'react'
import {shallow} from 'enzyme'
import renderer from "react-test-renderer";
import { PostDetailsPage } from './index'

describe('Teste Container Do PostDetailsPage', () => {

    it('Snapshot', () => {
        const postDetailsPage = renderer.create(<PostDetailsPage goToLoginPage={() => {}} selectedPost={""}/>).toJSON();
        expect(postDetailsPage).toMatchSnapshot();
    })
})