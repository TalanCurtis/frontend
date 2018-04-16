import React from 'react';
import commentImg from '../../images/assets/comment.png';
import trippleDotImg from '../../images/assets/tripple-dot.png';
import heartImg from '../../images/assets/heart.png';

function CarouselCard(props) {
    return (
        <div className='CarouselCard'>
            {/* <img src="../images/assets/image1.jpg" alt=""/> */}
            {/* <img src="../../images/assets/image1.jpg" alt=""/> */}
            {/* <img src={`url("../images/assets/image1.jpg")`} alt=""/> */}
            <div className='mainImage'>
                <div className='likes'>
                    <img className='heartImg' src={heartImg} alt=""/>
                    <p>382</p>
                </div>
            </div>
            <div className='info'>
                <h5>{props.content.title}</h5>
                <div>
                    <p>{props.content.description}</p>
                </div>
            </div>
            <footer>
                <div className='footerInfo'>
                    <img className='commentImg' src={commentImg} alt=""/>
                    <p>475 Comments</p>
                </div>
                <img className='trippleDotImg' src={trippleDotImg} alt=""/>
            </footer>
        </div>
    )
}

export default CarouselCard