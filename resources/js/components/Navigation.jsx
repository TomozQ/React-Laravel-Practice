import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <ul>
                <Link to="/return">
                    <li>先頭に戻る</li>
                </Link>
                <Link to="/instock">
                    <li>入庫処理</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation