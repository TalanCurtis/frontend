import React from 'react';
import testImgBG from '../../images/assets/background1.jpg';
import testImgLogo from '../../images/assets/logo.png';
import _ from 'lodash';


function Intro(props) {
    return (
        <div className='Intro'>
            {_.isEmpty(props.content)
                ? null
                : <div className='baseGrid'>
                    <img className='bgImage' src={testImgBG} alt=""/>
                    <div className='subGrid'>
                        <img className='logo' src={testImgLogo} alt=""/>
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