import React from 'react'

import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return (
            <nav>
                <ul>
                    <li>
                    <Link to="/">Carmodels</Link>
                    </li>
                    <li>
                    <Link to="/employees/">Employees</Link>
                    </li>
                    <li>
                    <Link to="/user/">Users</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;