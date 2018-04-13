import React, {Component} from 'react';
import Home from './home/Home';
import {Switch, Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
