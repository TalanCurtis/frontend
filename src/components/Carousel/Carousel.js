import React, {Component} from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
import _ from 'lodash';
import {TweenMax, Power4} from 'gsap';

// transition styles for sliderContainer.
const styles = {
    transition: 'left .5s ease-in-out'
}

class Carousel extends Component {
    constructor(props) {
        super(props);
        // Keeping track of what slide is current and left is the position of the sliderContainer.
        this.state = {
            slideCount: 1,
            left: 0
        }
    }

    componentWillReceiveProps(){
        this.animation();
    }

    animation() {
        // Animations for card intro
        TweenMax.staggerFrom('.CarouselCard', 1, {
            scale: 1,
            opacity: 1,
            x: 0,
            delay: .25,
            ease:Power4.easeOut,
        }, .25)

        TweenMax.staggerFrom('.CarouselCard', 1, {
            scale: 1,
            opacity: 0,
            x: -272,
            delay: .25,
            ease:Power4.easeOut,
        }, .25)
    }

    handleSlideBack() {
        console.log('slideBack')
        if (this.state.slideCount <= 1) {
            // If you are at the beginning of the slides and hit back. it gets the number of
            // slides -1 then multiplies that by how far to move to take you to the last slide.
            this.setState({
                slideCount: this.props.content.slides.length,
                left: (this.props.content.slides.length - 1) * -272
            })
        } else {
            // the amount to move is the width of the CarouselCard image plus padding.
            this.setState({
                slideCount: this.state.slideCount - 1,
                left: this.state.left + 272
            })
        }
    }

    handleSlideForeword() {
        // moves left postition on sliderContainer and increments slideCount.
        if (this.state.slideCount >= this.props.content.slides.length) {
            this.setState({slideCount: 1, left: 0})
        } else {
            this.setState({
                slideCount: this.state.slideCount + 1,
                left: this.state.left - 272
            })
        }
    }

    render() {
        const slides = _.isEmpty(this.props.content)
            ? null
            : this.props.content.slides.map((x, i) => {
                return (<CarouselCard
                        key={i}
                        content={x}
                        // setting type to either picture or article based on defining object property
                        type={this.props.content.hasOwnProperty('para1') ? 'picture' : 'article'}/>)
                })
    
        return (
            <div className='baseGrid'>
                {_.isEmpty(this.props.content)
                    ? null
                    : <div className='Carousel'>
                        <header>
                            <div className='leftCheveron' onClick={() => this.handleSlideBack()}/>
                            <div className='rightCheveron' onClick={() => this.handleSlideForeword()}/>
                            <h5>{this.props.content.navText.toUpperCase()}</h5>
                        </header>
                        <div className='slideContainer' style={{...styles, left: this.state.left }}>
                            {slides}
                        </div>
                    </div>
}
            </div>
        )
    }
}

export default Carousel;