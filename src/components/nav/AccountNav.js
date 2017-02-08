// @flow

import React, {Component} from 'react'
import {Link} from 'react-router'
import * as firebase from 'firebase'
import Account from '../models/Account'
import AccountType from '../models/AccountType'

type AccountNavProps = {
    type: number
}
type AccountNavState = {
    accounts: Array<Account>
}

class AccountNav extends Component {

    props: AccountNavProps
    state: AccountNavState
    accountsRef = {}
    accountInput = {}

    constructor(props: AccountNavProps) {
        super(props)
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        // this.accountsRef = firebase.database().ref('accounts')
        // this.accountsRef.orderByChild('type').equalTo(this.props.type).on('value', snapshot => {
        //     const val = snapshot.val() || {}
        //     this.setState({
        //         accounts: Object.keys(val).map((key) => {
        //             return Account.parseFirebase(val[key], key)
        //         })
        //     })
        // })
    }

    render() {
        return (
            <nav style={styles.container}>
                <div><strong>{this.getLabel()}</strong></div>
                {this.state.accounts.map((account, i) =>
                    <div key={i}>
                        <Link to={`/account/${account.id}`}>{account.name}</Link>
                        <button onClick={() => this.removeAccount(account)}>Delete</button>
                    </div>
                )}
                <input
                    ref={(account) => {
                        this.accountInput = account
                    }}
                    type="text"
                    placeholder="Enter account"/>
                <input onClick={() => this.addAccount()} type="button" value="Add Account"/>
            </nav>
        )
    }

    getLabel() {
        switch (this.props.type) {
            case AccountType.BUDGET:
                return 'Budget Accounts'
            case AccountType.OFF_BUDGET:
                return 'Off-Budget Accounts'
            case AccountType.CLOSED:
                return 'Closed Accounts'
            default:
                return null
        }

    }

    addAccount() {
        this.accountsRef.push({
            name: this.accountInput.value,
            type: this.props.type
        })
        this.accountInput.value = null
    }

    removeAccount(account: Account) {
        this.accountsRef.child(account.id).remove()
    }
}

let styles = {
    container: {
        backgroundColor: 'blue',
        color: 'red'
    }
}

export default AccountNav