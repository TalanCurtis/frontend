import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import menu_icon from '../../images/assets/menu-icon.png'

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
            bgAlpha: 1
        }
    }

    handleMenuTransition() {
        console.log('handle menu Transition', this.state)
        if (this.state.isOpen) {
            // set these values when menu closes
            this.setState({menuPosition: -200, bgAlpha: this.props.scrollPercent})
        } else {
            // set these values when menu is opens
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
                    : this.props.scrollPercent})`
            }}>
                {/* hidden menu links displayed when menu roles out */}
                <div className='menuLinks'>
                    <Link to='/'>
                        <h5>Home</h5>
                    </Link>
                    <Link to='/'>
                        <h5>About</h5>
                    </Link>
                    <Link to='/'>
                        <h5>Contact</h5>
                    </Link>
                </div>

                {/* Tip of the menu displaying the info and menu activate button */}
                <div className='info'>
                    <div className='menu'>
                        <img src={menu_icon} onClick={() => this.handleMenuTransition()} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default SideBar