import React, {Component} from 'react';
// import Home from './home/Home';
import './styles/main.css';
import Landing from './views/Landing/Landing';
import Details from './views/Details/Details';
import SideBar from './components/SideBar/SideBar';
import Test from './views/Tests/Fonts';
import {Switch, Route} from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const PageFade = (props) => (
    <CSSTransition 
      {...props}
      classNames="fadeTranslate"
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
    />
  )

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <SideBar />
                    <Route render={(location)=>(
                        <TransitionGroup>
                        <PageFade key={location.location.key}>
                    <Switch location={location.location} >
                        <Route exact path="/" component={Landing} />
                        <Route path="/Details/:type/:id" component={Details} />
                        <Route path="/test" component={Test} />
                    </Switch>
                    </PageFade>
                    </TransitionGroup>
                        )}/>
                </div>
            </div>
        );
    }
}

export default App;
