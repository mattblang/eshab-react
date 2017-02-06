// @flow

import React, {Component} from 'react'
import TransactionSearch from './TransactionSearch'
import Account from '../models/Account'
import Transaction from '../models/Transaction'
import * as firebase from 'firebase'

type AccountOverviewProps = {
    params: {
        id: any
    }
}
type AccountOverviewState = {
    account: Account
}

class AccountOverview extends Component {
    static propTypes = {}
    static defaultProps = {}

    props: AccountOverviewProps
    state: AccountOverviewState
    accountRef = {}
    payeeInput = {}
    categoryInput = {}
    memoInput = {}
    outflowInput = {}
    inflowInput = {}

    constructor(props: AccountOverviewProps) {
        super(props)
        this.state = {
            account: new Account()
        }
    }

    componentWillReceiveProps() {
        this.accountRef = firebase.database().ref('accounts/' + this.props.params.id)
        this.accountRef.on('value', snapshot => {
            this.setState({
                account: Account.parseFirebase(snapshot.val(), this.props.params.id)
            })
        })
    }

    render() {
        return (
            <div>
                <TransactionSearch search={this.searchTransactions} />

                {/*FIXME*/}
                <br/>

                {this.state.account.transactions && this.state.account.transactions.map((transaction, i) =>
                    <div key={i}>
                        <span>{transaction.payee}</span>
                        <button onClick={() => this.removeTransaction(transaction)}>Delete</button>
                    </div>
                )}

                <br/>
                <input
                    ref={(payee) => {
                        this.payeeInput = payee
                    }}
                    type="text"
                    placeholder="payee"/>
                <input
                    ref={(category) => {
                        this.categoryInput = category
                    }}
                    type="text"
                    placeholder="category"/>
                <input
                    ref={(memo) => {
                        this.memoInput = memo
                    }}
                    type="text"
                    placeholder="memo"/>
                <input
                    ref={(outflow) => {
                        this.outflowInput = outflow
                    }}
                    type="number"
                    step="any"
                    placeholder="outflow"/>
                <input
                    ref={(inflow) => {
                        this.inflowInput = inflow
                    }}
                    type="number"
                    step="any"
                    placeholder="inflow"/>
                <input onClick={() => this.addTransaction()} type="button" value="Add Transaction"/>
            </div>
        )
    }

    addTransaction() {
        const transaction = {
            payee: this.payeeInput.value,
            category: this.categoryInput.value,
            memo: this.memoInput.value,
            outflow: this.outflowInput.value,
            inflow: this.inflowInput.value
        }

        this.accountRef.child('transactions').push(transaction)

        this.payeeInput.value = null
        this.categoryInput.value = null
        this.memoInput.value = null
        this.outflowInput.value = null
        this.inflowInput.value = null
    }

    removeTransaction(transaction: Transaction) {
        this.accountRef.child('transactions').child(transaction.id).remove()
    }

    searchTransactions(query: string) {
        window.alert(`Searched ${query}`)
        console.log(query)
    }
}

export default AccountOverview
