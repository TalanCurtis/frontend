import React, {Component} from 'react';
// import Home from './home/Home';
import './styles/main.css';
import Landing from './views/Landing/Landing';
import Details from './views/Details/Details';
import Test from './views/Tests/Fonts';
import {Switch, Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/Details/:type/:id" component={Details} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
