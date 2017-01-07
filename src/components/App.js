import React, {Component} from 'react'
import Nav from './Nav'
import AccountList from './AccountList'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="App-nav">
                    <Nav/>
                    <AccountList/>
                </nav>
                <main className="App-main">
                    <span>content</span>
                </main>
            </div>
        )
    }
}
