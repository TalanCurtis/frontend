import React from 'react';
import loadingIcon from '../../images/added/puff.svg';

function Loading (){
    return(
               <div className='Loading'>
                    <div>
                        <h4>Loading</h4>
                        <img className='loadingIcon' src={loadingIcon} alt="loading"/>
                    </div>
                </div>
    )
}

export default Loading;