import React from 'react';
import bgImage2 from '../../images/assets/background2.jpg'
import _ from 'lodash';

function Signature(props) {
    return (
        <div className='Signature'>
            {_.isEmpty(props.content)
                ? null
                : <div className='baseGrid'>
                    <img className='bgImage' src={bgImage2} alt=""/>
                    <div className='subGrid'>
                        <div className='info'>
                            <h5>{props.content[0].subtitle}</h5>
                            <h3>{props.content[0].title}</h3>
                            <p>{props.content[0].text}</p>
                        </div>
                    </div>
                </div>
}

        </div>
    )
}

export default Signature