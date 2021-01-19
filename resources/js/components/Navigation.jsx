import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <ul className='nav-ul'>
                <Link to="/">
                    <li className='nav-li'>Get started</li>
                </Link>
                <Link to="/instock">
                    <li className='nav-li'>Arrival</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation