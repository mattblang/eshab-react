import React, {Component} from 'react'
import * as firebase from 'firebase'

class AccountList extends Component {

    constructor() {
        super()
        this.state = {
            test: 1,
            accounts: []
        }
    }

    componentDidMount() {
        const testRef = firebase.database().ref().child('test')

        testRef.on('value', snapshot => {
            console.log(snapshot)
            this.setState({
                test: snapshot.val()
            })
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.test}</span>
                {this.state.accounts.map((account, i) => <div key={i}>{account}</div>)}
                <br/>
                <input
                    ref={(account) => {this.accountInput = account}}
                    type="text"
                    placeholder="Enter account"/>
                <input onClick={() => this.addAccount()} type="button" value="Add Account"/>
            </div>
        )
    }

    addAccount() {
        this.setState({
            accounts: this.state.accounts.concat(this.accountInput.value)
        })
        this.accountInput.value = null
    }
}

export default AccountList