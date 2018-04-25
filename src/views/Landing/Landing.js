import React, {Component} from 'react';
import _ from 'lodash';
import Intro from '../../components/Intro/Intro';
import Carousel from '../../components/Carousel/Carousel';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import Signature from '../../components/Signature/Signature';
import {TweenMax} from 'gsap';

// dummy data
import content from '../../content.json';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            intro: {},
            sliderPictures: {},
            sliderArticles: {},
            signature: {},
            footer:{}
        }
    }

    componentDidMount() {
        const {footer, signature, intro, slider1, slider2} = content
        // Using setTimeout to mimic async AJAX request.
        setTimeout(() => {
            this.setState({ footer: footer, signature: signature, intro: intro, sliderPictures: slider1, sliderArticles: slider2})
            TweenMax.set('.Landing',  {opacity:0})
            TweenMax.to('.Landing', .5, {opacity:1})
        }, 1000)
    }

    render() {
        let articalColumns = _.isEmpty(this.state.sliderArticles) ? null : this.state.sliderArticles.columns.map((x,i)=>{return(
            <div key={i} className='column'>
                <h4>{x.title}</h4>
                <p>{x.description}</p>
            </div>
        )})
        return (
            // Check if I have infomation, if so display it. if not show loading screen.
            <div className='Landing'>
                {_.isEmpty(this.state.intro)
                    ?<Loading />
                    :<div>
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
                        <Signature content={this.state.signature} />
                        <Footer content={this.state.footer} />
                    </div>
                }
            </div>
        )
    }
}

export default Landing;
