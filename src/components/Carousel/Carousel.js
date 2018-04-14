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
            slides:[0, 1, 2, 3],
            left:0
        }
    }

    handleSlideBack() {
        console.log('slideBack')
        if(this.state.slideCount <= 1){
            this.setState({
                slideCount: this.state.slides.length,
                left: (this.state.slides.length-1) * -310
            })
        }else{
            this.setState({
                slideCount: this.state.slideCount - 1,
                left: this.state.left + 310
            })
        }
    }

    handleSlideForeword() {
        if(this.state.slideCount >= this.state.slides.length){
            this.setState({
                slideCount: 1,
                left: 0
            })
        }else{
            this.setState({
                slideCount: this.state.slideCount + 1,
                left: this.state.left - 310
            })

        }
    }

    render() {
        const slides = this.state.slides.map((x, i) => {
            return (<CarouselCard key={i} content={x}/>)
        })

        return (
            <div className='Carousel'>
                Carousel Comp
                <div>
                    <button onClick={() => this.handleSlideBack()}>Left</button>
                    <button onClick={() => this.handleSlideForeword()}>Right</button>
                </div>
                <div className='slideContainer'  style={{...styles, left: this.state.left}}>
                    {slides}
                </div>
            </div>
        )

    }
}

export default Carousel