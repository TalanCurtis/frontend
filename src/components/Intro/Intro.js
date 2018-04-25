import React from 'react';
import _ from 'lodash';

function Intro(props) {
    return (
        <div className='Intro'>
            {_.isEmpty(props.content)
                ? null
                : <div className='baseGrid'>
                    <img className='bgImage' src={'/images/'+props.content.header[0].backgroundImage} alt="Background"/>
                    <div className='subGrid'>
                        <img className='logo' src={'/images/'+props.content.header[0].logo} alt="Logo"/>
                        <div className='text'>
                            <h4>{props.content.header[0].title}</h4>
                            <p>{props.content.header[0].description.name}</p>
                        </div>
                        <div className='date'>
                            <p>April 19th 2016</p>
                        </div>
                    </div>
                </div>
}
        </div>
    )
}

export default Intro