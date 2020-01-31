import React from 'react'
import {shallow} from 'enzyme'
import {renderer} from "react-test-renderer";
import { FeedPage } from './index'

describe('Teste Container Da feedPage', () => {

    it('Snapshot', () => {
        const feedPage = renderer.create(<FeedPage goToLoginPage={() => {}} posts={[]}/>).toJSON();
        expect(feedPage).toMatchSnapshot();
    })
})