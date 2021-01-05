import React from 'react'
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <>
            <h1>Apparel</h1>
            <h2>Inventory Control</h2>
        </>
    )
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}