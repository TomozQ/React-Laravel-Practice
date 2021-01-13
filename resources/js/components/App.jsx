import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return(
        <>
            This is App Component from React
        </>
    )
}

export default App

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'))
}