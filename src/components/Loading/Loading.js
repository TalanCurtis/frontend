import React from 'react';
import loadingIcon from '../../imgs/puff.svg';

function Loading (){
    return(
               <div className='center'>
                    <div>
                        <h4>Loading</h4>
                        <img className='loading' src={loadingIcon} alt="loading"/>
                    </div>
                </div>
    )
}

export default Loading;