import React from 'react';
import {Link} from 'react-router-dom';
import {TweenMax} from 'gsap';
import $ from 'jquery';

function CarouselCard(props) {

    $(".CarouselCard").hover(over, out);
    function over(){
        TweenMax.to(this, .5, {scale:1.05})
    }
    function out(){
        TweenMax.to(this, .5, {scale:1})
    }

    return (
        <div className='CarouselCard'>
        <Link to={'/Details/'+props.type+'/'+props.content.id} style={{textDecoration:'none'}}>
            <div className='mainImage' >
                <img className='bgImage' src={'/images/'+props.content.image} alt=""/>
                <div className='likes'>
                    <div className='heartIcon'></div>
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
                    <div className='commentIcon'></div>
                    <p>475 Comments</p>
                </div>
                <div className='trippleDotContainer'>
                    <div className='trippleDotIcon'></div>
                </div>
            </footer>
            </Link>
        </div>
    )
}

export default CarouselCard;