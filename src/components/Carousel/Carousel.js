import React, {Component} from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';

// transition styles.
const styles = {
    transition: 'left .5s ease-in-out'
}

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideCount: 1,
            slides: [],
            left: 0
        }
    }

    componentDidMount() {
        this.setState({slides: this.props.content.slides})
    }

    handleSlideBack() {
        console.log('slideBack')
        if (this.state.slideCount <= 1) {
            // If you are at the begginng of the slides and hit back. it gets the number of
            // slides -1 then multiplies that by how far to move to take you to the last
            // slide.
            this.setState({
                slideCount: this.state.slides.length,
                left: (this.state.slides.length - 1) * -270
            })
        } else {
            // the amount to move is the width of the CarouselCard image plus padding.
            this.setState({
                slideCount: this.state.slideCount - 1,
                left: this.state.left + 270
            })
        }
    }

    handleSlideForeword() {
        if (this.state.slideCount >= this.state.slides.length) {
            this.setState({slideCount: 1, left: 0})
        } else {
            this.setState({
                slideCount: this.state.slideCount + 1,
                left: this.state.left - 270
            })
        }
    }

    render() {
        const slides = this
            .state
            .slides
            .map((x, i) => {
                return (<CarouselCard key={i} content={x}/>)
            })

        return (
            <div className='Carousel'>
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
        )
    }
}

export default Carousel