import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import InStock from './InStock'
import StartWork from './StartWork'
import GoodsIssue from './GoodsIssue'

const App = () => {
    return(
        <>
            <HashRouter>
            <React.Fragment>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={ StartWork } />
                    <Route path="/instock" component={ InStock } />
                    <Route path="/goodsissue" component={ GoodsIssue } />
                </Switch>
            </React.Fragment>
            </HashRouter>
        </>
    )
}

if (document.getElementById('react')) {
    ReactDOM.render(<App />, document.getElementById('react'))
}