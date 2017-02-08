// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import AccountNav from './AccountNav'
import AccountType from '../models/AccountType'
import Account from '../models/Account'
import * as firebase from 'firebase'

jest.mock('firebase', () => {
    return {
        database: () => {
            return {
                ref: () => {
                    return {
                        orderByChild: () => {
                            return {
                                equalTo: () => {
                                    return {
                                        on: () => {

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

it('renders correctly', () => {
    const component = renderer.create(
        <AccountNav type={AccountType.BUDGET} />
    )
    expect(component.toJSON()).toMatchSnapshot();
})