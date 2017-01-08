import React, {Component} from 'react'
import * as firebase from 'firebase'

class AccountNav extends Component {

    constructor() {
        super()
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        this.accountRef = firebase.database().ref().child('accounts')
        this.accountRef.on('value', snapshot => {
            this.setState({
                accounts: snapshot.val() || []
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.accounts.map((account, i) => <div key={i}>{account}</div>)}
                <br/>
                <input
                    ref={(account) => {
                        this.accountInput = account
                    }}
                    type="text"
                    placeholder="Enter account"/>
                <input onClick={() => this.addAccount()} type="button" value="Add Account"/>
            </div>
        )
    }

    addAccount() {
        this.accountRef.set(this.state.accounts.concat(this.accountInput.value))
        this.accountInput.value = null
    }
}

export default AccountNav