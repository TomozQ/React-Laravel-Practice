import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import StartWork from './StartWork'

const App = () => {
    return(
        <>
            <Navigation />
            <StartWork />
        </>
    )
}

export default App

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'))
}