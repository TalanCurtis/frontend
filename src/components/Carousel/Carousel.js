import React, {Component} from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
import _ from 'lodash';
import {TweenMax, Power4, Bounce} from 'gsap';

// transition styles.
const styles = {
    transition: 'left .5s ease-in-out'
}

class Carousel extends Component {
    constructor(props) {
        super(props);
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
        }, .5)

        TweenMax.staggerFrom('.CarouselCard', 1, {
            scale: 1,
            opacity: 0,
            x: -272,
            delay: .25,
            ease:Power4.easeOut,
            zIndex: -10,
        }, .5)
    }

    handleSlideBack() {
        console.log('slideBack')
        if (this.state.slideCount <= 1) {
            // If you are at the begginng of the slides and hit back. it gets the number of
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
            : this
                .props
                .content
                .slides
                .map((x, i) => {

                    return (<CarouselCard
                        key={i}
                        content={x}
                        type={this
                        .props
                        .content
                        .hasOwnProperty('para1')
                        ? 'picture'
                        : 'article'}/>)
                })
    
        return (
            <div className='baseGrid'>
                {_.isEmpty(this.props.content)
                    ? null
                    : <div className='Carousel'>
                        <header>
                            <div className='leftCheveron' onClick={() => this.handleSlideBack()}/>
                            <div className='rightCheveron' onClick={() => this.handleSlideForeword()}/>
                            <h5>{this
                                    .props
                                    .content
                                    .navText
                                    .toUpperCase()}</h5>
                        </header>
                        <div
                            className='slideContainer'
                            style={{
                            ...styles,
                            left: this.state.left
                        }}>
                            {slides}
                        </div>
                    </div>
}
            </div>
        )
    }
}

export default Carousel