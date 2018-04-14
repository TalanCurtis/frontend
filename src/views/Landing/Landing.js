import React, {Component} from 'react';

// import components
import SideBar from '../../components/SideBar/SideBar'
import Intro from '../../components/Intro/Intro'
import Slider from '../../components/Slider/Slider'

// dummy data
import content from '../../content.json';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            scrollPercent: 1,
            footer: {},
            intro: {},
            sliderPictures: {},
            sliderArticles: {},
            signature: {}
        }
        this.handleScroll = this
            .handleScroll
            .bind(this)
    }

    componentDidMount() {
        // add event listener for scrolling
        window.addEventListener('scroll', this.handleScroll);

        // Here I deconstructed content and assigned it to state using set Timeout to
        // mimic a Ajax request to a server.
        const {footer, intro, signature, slider1, slider2} = content
        setTimeout(() => {
            this.setState({footer: footer, intro: intro, sliderPictures: slider1, sliderArticles: slider2, signature: signature})
        }, 1000)
    }

    componentWillUnmount() {
        // remove the event lister for scolling
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        // offsetHeight  - inner height = max scroll distance then divide it by current
        // scrollY let scrollPercent = (window.scrollY / (document.body.offsetHeight -
        // window.innerHeight)).toFixed(2) * 1 then subtract from 1 being 100% opaque
        let scrollPercent = (1 - (window.scrollY / (document.body.offsetHeight - window.innerHeight))).toFixed(2) * 1
        // console.log('Scroll', scrollPercent)
        this.setState({scrollPercent: scrollPercent})
    }

    render() {
        return (
            <div>
                {/* passing down scroll percent to handle fade of scroll position. Maybe I can put this on the sidebar?*/}
                <SideBar navText={this.state.intro.navText} scrollPercent={this.state.scrollPercent}/>
                <Intro content={this.state.intro}/>
                <Slider content={this.state.sliderPictures}/>
                {/* <div className='center' style={{backgroundColor:'green', height:'900px'}}>
                <button onClick={()=>console.log(this.state)}>state</button>                
                </div> */}
            </div>
        )
    }
}

export default Landing;
