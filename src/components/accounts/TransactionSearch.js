// @flow

import React, {Component} from 'react'
import _ from 'lodash'

type TransactionSearchProps = {
    search: Function
}
type TransactionSearchState = {}

class TransactionSearch extends Component {
    static propTypes = {}
    static defaultProps = {}

    props: TransactionSearchProps
    state: TransactionSearchState
    handleInputChangeDebounced: Function

    constructor(props: TransactionSearchProps) {
        super(props)
        this.props = props
        this.state = {}
        this.handleInputChangeDebounced = _.debounce((event: SyntheticInputEvent) => {
            if(this.props.search) {
                this.props.search(event.target.value)
            }
        }, 500)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search Transactions" onChange={this.handleInputChange}/>
            </div>
        )
    }

    handleInputChange = (event: SyntheticEvent) => {
        event.persist()
        this.handleInputChangeDebounced(event)
    }
}

export default TransactionSearch
