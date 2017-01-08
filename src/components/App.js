import React, {Component} from 'react'
import MainNav from './nav/MainNav'
import AccountNav from './nav/AccountNav'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="App-nav">
                    <MainNav/>
                    <br/>
                    <AccountNav/>
                </nav>
                <main className="App-main">
                    <span>content</span>
                </main>
            </div>
        )
    }
}

export default App