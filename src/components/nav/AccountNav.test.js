import React from 'react'
import renderer from 'react-test-renderer'
import AccountNav from './AccountNav'
import AccountType from '../models/AccountType'

it('renders correctly', () => {
    const component = renderer.create(
        <AccountNav type={AccountType.BUDGET} />
    )

    expect(component.toJSON()).toMatchSnapshot();
})
