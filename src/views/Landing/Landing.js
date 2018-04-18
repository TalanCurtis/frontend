import React, {Component} from 'react';
import _ from 'lodash';

// import components
import Intro from '../../components/Intro/Intro';
import Carousel from '../../components/Carousel/Carousel';
import Signature from '../../components/Signature/Signature';
import Footer from '../../components/Footer/Footer';

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
        let articalColumns = _.isEmpty(this.state.sliderArticles)?null: this.state.sliderArticles.columns.map((x,i)=>{return(
            <div key={i} className='column'>
                <h4>{x.title}</h4>
                <p>{x.description}</p>
            </div>
        )})
        return (
            <div className='Landing'>
                <Intro content={this.state.intro}/>
                <Carousel content={this.state.sliderPictures} />
                <div className='pictureParagraphs'>
                    <p className='p1'>{this.state.sliderPictures.para1}</p>
                    <p className='p2'>{this.state.sliderPictures.para2}</p>
                </div>
                <Carousel content={this.state.sliderArticles} />
                <div className='articalColumns'>
                    <div className='blank'></div>
                    {articalColumns}
                </div>
                <Signature content={this.state.signature}/>
                <Footer content={this.state.footer}/>
            </div>
        )
    }
}

export default Landing;
