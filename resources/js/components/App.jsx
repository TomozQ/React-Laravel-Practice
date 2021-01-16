import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import StartWork from './StartWork'

const App = () => {
    return(
        <>
            <HashRouter>
                <div>
                    <Navigation>
                        <Switch>
                            <Route path='/sample'/>
                            <Route path='/test'/>
                        </Switch>
                    </Navigation>
                </div>
            </HashRouter>
            <StartWork />
        </>
    )
}

export default App

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'))
}