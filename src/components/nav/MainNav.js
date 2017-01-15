import React, {Component} from 'react'
import {Link} from 'react-router'

class MainNav extends Component {
    render() {
        return (
            <nav>
                <div>
                    <Link to={`/budget`}>Budget</Link>
                </div>
                <div>
                    <Link to={`/reports`}>Reports</Link>
                </div>
                {/*<Link to={`/accounts/`}>All Accounts</Link>*/}
            </nav>
        )
    }
}

export default MainNav
