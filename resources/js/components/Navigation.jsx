import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    
    return(
            <nav>
                <ul>
                    <Link to='/sample'>
                        <li>sample</li>
                    </Link>
                    <Link to='/test'>
                        <li>test</li>
                    </Link>
                </ul>
            </nav>
        ) 
}

export default Navigation