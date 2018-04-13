import React, {Component} from 'react';

// import components
import SideBar from '../../components/SideBar/SideBar'

// dummy data
import content from '../../content.json';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
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
        this.setState({opacity: scrollPercent})
    }

    render() {
        return (
            <div>
                <SideBar styles={{ backgroundColor: `rgba(18, 3, 36 ,${this.state.opacity})` }}/>
                <div style={{backgroundColor:'green', height:'900px'}}>
                    <div className='TestRot'>
                    <h6>Helojkhsdfksjhfkjhfdskjhsfksjhf</h6>

                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
