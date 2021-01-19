import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <ul className='nav-ul'>
                <Link to="/">
                    <li className='nav-li'>始める</li>
                </Link>
                <Link to="/instock">
                    <li className='nav-li'>入庫処理</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation