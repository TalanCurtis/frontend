import React from 'react';
import testImgBG from '../../images/assets/background1.jpg'
import testImgLogo from '../../images/assets/logo.png'

function Intro(props) {
    return (
        <div className='Intro'>
            <button onClick={() => console.log(props)}>THISI IS SIS SI</button>

            {props.content.navText
                ? <div className='contain'>
                        <img className='bgImage' src={testImgBG} alt="" style={{width:'100vw'}}/>
                        <img className='logo' src={testImgLogo} alt="" style={{width:'25vw'}}/>
                        <div className='text'>
                        {/* Left off Here fix problem!!! when i add text it breaks my grid. Why? */}
                        {/* {props.content.header[0].description.name}
                        {props.content.header[0].description.text} */}
                            {/* <h4>{props.content.header[0].description.name}</h4>
                            <p>{props.content.header[0].description.text}</p> */}
                        </div>
                        <div className='date'>

                        </div>
                    </div>
                : null
}

        </div>
    )
}

export default Intro