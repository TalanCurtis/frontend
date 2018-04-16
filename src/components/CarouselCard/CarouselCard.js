import React from 'react';
import commentImg from '../../images/assets/comment.png';
import trippleDotImg from '../../images/assets/tripple-dot.png';
import heartImg from '../../images/assets/heart.png';
// import images
import image1 from '../../images/assets/image1.jpg';
import image2 from '../../images/assets/image2.jpg';
import image3 from '../../images/assets/image3.jpg';
import image4 from '../../images/assets/image4.jpg';
import image5 from '../../images/assets/image5.jpg';
import image6 from '../../images/assets/image6.jpg';

function CarouselCard(props) {
    let image=''
    switch (props.content.image) {
        case 'image1.jpg':image = image1 ; break;
        case 'image2.jpg':image = image2 ; break;
        case 'image3.jpg':image = image3 ; break;
        case 'image4.jpg':image = image4 ; break;
        case 'image5.jpg':image = image5 ; break;
        case 'image6.jpg':image = image6 ; break;
        default:console.log('image switch defaulted'); break;
    }
    return (
        <div className='CarouselCard'>
            <div className='mainImage' style={{backgroundImage: `linear-gradient(45deg, grey 15px, transparent 0), url(${image})`}}>
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