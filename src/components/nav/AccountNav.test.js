import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import AccountNav from './AccountNav'
import AccountType from '../models/AccountType'

beforeAll(() => {
    AccountNav.prototype.setupFirebase = jest.fn()
})

it('renders', () => {
    const component = shallow(
        <AccountNav type={AccountType.BUDGET} />
    )
    expect(toJson(component)).toMatchSnapshot()
})

it('displays appropriate title', () => {
    const component = shallow(
        <AccountNav type={AccountType.BUDGET} />
    )
    expect(component.find('strong').text()).toEqual('Budget Accounts')
})
