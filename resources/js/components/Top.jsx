import React from 'react'
import ReactDOM from 'react-dom';

const Top = () => {
    return(
        <>
            <h1>Apparel</h1>
            <h2>Inventory Control</h2>
        </>
    )
}

export default Top

if (document.getElementById('root')) {
    ReactDOM.render(<Top />, document.getElementById('root'))
}