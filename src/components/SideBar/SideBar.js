import React from 'react';
import menu_icon from '../../images/assets/menu-icon.png'

function SideBar(props) {
    return (
        <div className='SideBar' style={props.styles}>
            <div className= 'grid'>
                <div>

                <div className='box1'></div>
                </div>
                <div>

                <div className='box2'></div>
                </div>
                <div>

                <div className='box3'></div>
                </div>

            </div>
            {/* <div>
                <img
                    src={menu_icon}
                    onClick={() => console.log('menu clicked')}
                    alt=""
                    style={{
                    height: '40px'
                }}/>
            </div>
            <div>
                <h6>BL BL BL</h6>
            </div>
            <div>

                <p>This is date</p>
            </div> */}

        </div>
    )
}

export default SideBar