// @flow

import React, {Component} from 'react'
import MainNav from './nav/MainNav'
import AccountNav from './nav/AccountNav'
import AccountType from './models/AccountType'
import './App.css'

class App extends Component {
    render() {
        const {main} = this.props

        return (
            <div className="App">
                <nav className="AppNav">
                    <MainNav/>
                    <AccountNav type={AccountType.BUDGET} />
                    <AccountNav type={AccountType.OFF_BUDGET} />
                    <AccountNav type={AccountType.CLOSED} />
                </nav>
                <main>
                    {main}
                </main>
            </div>
        )
    }
}

export default App