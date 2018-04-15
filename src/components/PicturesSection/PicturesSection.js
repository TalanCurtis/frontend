import React from 'react';
import Carousel from '../Carousel/Carousel';
import _ from 'lodash';

function PicturesSection(props) {
    return (
        <div className='PicturesSection'>
            {_.isEmpty(props.content)
                ? null
                : <div>

                    <div className='grid'>
                        <Carousel/>
                    </div>
                    <div className='paragraphsGrid'>
                        {/* <p className='rotate'>january 2016</p> */}
                        <p className='para1'>{props.content.para1}</p>
                        <p className='para2'>{props.content.para2}</p>
                    </div>
                </div>
}
        </div>
    )
}

export default PicturesSection