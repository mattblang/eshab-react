// @flow

import Transaction from '../models/Transaction'

class Account {
    name: string
    transactions: Transaction[]

    constructor() {
        this.name = ''
        this.transactions = []
    }
}

export default Account