import React from 'react';
import _ from 'lodash';
import testImg from '../../images/assets/image1.jpg'

function Slider(props) {
    const slides= ()=>{return props.content.slides.map((x,i)=>{return(
        <div key={i} className='slideCard'>
            <div className='imageContainer'>
                <img src={testImg} alt="" width='200px'/>
            </div>
            {/* <div>
                <h3>{x.title}</h3>
                <p>{x.description}</p>
            </div> */}
        </div>
    )})}

return (
        <div className='Slider'>
            {_.isEmpty(props.content)
                ? null
                : <div className='grid'>
                    <header>
                        <button onClick={()=>{console.log('left click')}}>Left</button>
                        <button onClick={()=>{console.log('Right click')}}>Right</button>
                        <h4>{props.content.navText}</h4>
                    </header>
                    <div className='slidesContainer'>
                        {slides()}
                    </div>
                </div>
}
            <button onClick={() => {
                console.log(props)
            }}>TESTING PROSps</button>
        </div>
    )
}

export default Slider