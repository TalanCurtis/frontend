import React, {Component} from 'react';

// import components
import SideBar from '../../components/SideBar/SideBar'
import Intro from '../../components/Intro/Intro'
import Carousel from '../../components/Carousel/Carousel';

// dummy data
import content from '../../content.json';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            footer: {},
            intro: {},
            sliderPictures: {},
            sliderArticles: {},
            signature: {}
        }
    }

    componentDidMount() {
        // Here I deconstructed content and assigned it to state using set Timeout to
        // mimic a Ajax request to a server.
        const {footer, intro, signature, slider1, slider2} = content
        setTimeout(() => {
            this.setState({footer: footer, intro: intro, sliderPictures: slider1, sliderArticles: slider2, signature: signature})
        }, 1000)
    }

    render() {
        return (
            <div className='Landing'>
                <SideBar navText={this.state.intro.navText}/>
                <div className='sideBarFiller'></div>
                <Intro content={this.state.intro}/>
                <Carousel content={this.state.sliderPictures} />
                <Carousel content={this.state.sliderArticles} />
            </div>
        )
    }
}

export default Landing;
