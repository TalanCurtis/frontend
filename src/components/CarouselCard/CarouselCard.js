import React from 'react';

function CarouselCard(props) {
    return (
        <div className='CarouselCard'>
            <h5>
                Card {props.content}
            </h5>
        </div>
    )
}

export default CarouselCard