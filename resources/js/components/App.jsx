import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import InStock from './InStock'
import StartWork from './StartWork'

const App = () => {
    return(
        <>
            <HashRouter>
            <React.Fragment>
                <Navigation />
                <Switch>
                    <Route path="/return" component={ StartWork } />
                    <Route path="/instock" component={ InStock } />
                </Switch>
            </React.Fragment>
            </HashRouter>
        </>
    )
}

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'))
}