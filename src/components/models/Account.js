// @flow

import Transaction from '../models/Transaction'
import AccountType from '../models/AccountType'

class Account {
    static parseFirebase(val, id): Account {
        if (!val) return new Account()

        const account = val
        account.id = id

        account.transactions = Object.keys(account.transactions || {}).map((key) => {
            return Transaction.parseFirebase(account.transactions[key], key)
        })

        return account
    }

    id: string
    name: string
    transactions: Array<Transaction>
    type: AccountType

    constructor() {
        this.name = ''
        this.transactions = []
    }
}

export default Account