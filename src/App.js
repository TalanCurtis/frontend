import React, {Component} from 'react';
// import Home from './home/Home';
import './styles/main.css';
import Landing from './views/Landing/Landing';
import Details from './views/Details/Details';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Signature from './components/Signature/Signature';
import Test from './views/Tests/Fonts';
import {Switch, Route} from 'react-router';

// dummy data
import content from './content.json';

class App extends Component {
    constructor(){
        super();
        this.state={
            signature: {},
            footer:{}
        }
    }

    componentDidMount() {
        // Here I deconstructed content and assigned it to state using set Timeout to mimic a Ajax request to a server.
        const {footer, signature} = content
        setTimeout(() => {
            this.setState({footer: footer, signature: signature})
        }, 1000)
    }

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <SideBar />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/Details/:type/:id" component={Details} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
                <Signature content={this.state.signature}/>
                <Footer content={this.state.footer}/>
            </div>
        );
    }
}

export default App;
