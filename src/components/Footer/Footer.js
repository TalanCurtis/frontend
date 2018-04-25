import React from 'react';
import _ from 'lodash';

function Footer(props) {
    let content = _.isEmpty(props.content)
        ? null
        : props.content.options.map((x, i) => {
                let descriptions = x.text.map((y, j) => {
                        return (
                            <div key={j}>
                                <p>{y.description}</p>
                            </div>
                        )
                    })
                return (
                    <div key={i} className={x.id}>
                        <h5>{x.id.toUpperCase()}</h5>
                        {descriptions}
                    </div>
                )
            })

    return (
        <div className='Footer'>
            {_.isEmpty(props.content)
                ? null
                : <div>
                    <div className='grid'>
                        {content}
                    </div>
                    <p className='copyright'>{props.content.copyright}</p>
                </div>
            }
        </div>
    )
}

export default Footer;