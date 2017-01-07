import React, {Component} from 'react'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div>Budget</div>
                <div>Reports</div>
                <div>All Accounts</div>
            </div>
        )
    }
}
