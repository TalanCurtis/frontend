import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// transition styles for the menu to slide and fade.
const styles = {
    transition: 'left .5s ease-in-out, background-color .5s ease-in-out'
}

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            menuPosition: -200,
            bgAlpha: 1,
            scrollPercent: 1,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
        // add event listener for scrolling
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        // remove the event lister for scolling
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        // offsetHeight - innerHeight = max scroll distance, then divide it by current scroll position.
        let scrollPercent = (1 - (window.scrollY / (document.body.offsetHeight - window.innerHeight))).toFixed(2) * 1
        this.setState({scrollPercent: scrollPercent})
    }

    handleMenuTransition() {
        if (this.state.isOpen) {
            // set these values when menu closes
            this.setState({menuPosition: -200, bgAlpha: this.state.scrollPercent})
        } else {
            // set these values when menu opens
            this.setState({menuPosition: 0, bgAlpha: 1})
        }
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div
                className='SideBar'
                style={{
                ...styles,
                left: this.state.menuPosition,
                backgroundColor: `rgba(18, 3, 36 ,${this.state.isOpen
                    ? this.state.bgAlpha
                    : this.state.scrollPercent})`
            }}>
                {/* links display when menu roles out */}
                <div className='menuLinks'>
                    <Link to='/' onClick={()=>{this.handleMenuTransition()}}>
                        <h5>Home</h5>
                    </Link>
                    <Link to='/' onClick={()=>{this.handleMenuTransition()}}>
                        <h5>About</h5>
                    </Link>
                    <Link to='/' onClick={()=>{this.handleMenuTransition()}}>
                        <h5>Contact</h5>
                    </Link>
                </div>

                {/* menu displaying the hamburger icon */}
                <div className='info'>
                    <div className='menu'>
                        {this.state.isOpen
                            ? <div className='xIcon' onClick={()=>this.handleMenuTransition()}></div>
                            : <div className='menuIcon' onClick={()=>this.handleMenuTransition()}></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;