// @flow

import Transaction from '../models/Transaction'
import AccountType from '../models/AccountType'

class Account {
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