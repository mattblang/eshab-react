import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import AccountOverview from './components/accounts/AccountOverview'
import BudgetOverview from './components/budget/BudgetOverview'
import ReportsDashboard from './components/reports/ReportsDashboard'
import * as firebase from 'firebase'
import './index.css'

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
})

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="budget" components={{main: BudgetOverview}} />
                <Route path="reports" components={{main: ReportsDashboard}} />
                <Route path="account/:id" components={{main: AccountOverview}} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
)

