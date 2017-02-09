// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import AccountNav from './AccountNav'
import AccountType from '../models/AccountType'

it('renders correctly', () => {
    const component = renderer.create(
        <AccountNav type={AccountType.BUDGET} />
    )

    expect(component.toJSON()).toMatchSnapshot()
})

it('displays appropriate text', () => {
    const component = shallow(
        <AccountNav type={AccountType.BUDGET} />
    )
    expect(component.find('strong').text()).toEqual('Budget Accounts')
})
