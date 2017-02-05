// @flow

class Transaction {
    static parseFirebase(val, id): Transaction {
        if (!val) return new Transaction()

        const transaction = val
        transaction.id = id

        return transaction
    }

    id: string
    payee: string

    constructor() {
        this.payee = ''
    }
}

export default Transaction