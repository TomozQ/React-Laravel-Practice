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
                <Link to="/goodsissue">
                    <li className='nav-li'>Goods issue</li>
                </Link>
                <a href='/dashboard'>
                    <li className='nav-li'>DashBoard</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navigation