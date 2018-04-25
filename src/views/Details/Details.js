import React, {Component} from 'react';
import _ from 'lodash';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import Signature from '../../components/Signature/Signature';
import TweenMax from 'gsap';

// dummy data
import content from '../../content.json';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            sliderPictures: {},
            sliderArticles: {},
            details: {},
            signature: {},
            footer:{}
        }
    }

    componentDidMount() {
        const {footer, signature, slider1, slider2} = content
        let details = {}
        // Since pictures and articles had ids that overlaped I seperated them by type then used id to get the information.
        if (this.props.match.params.type === 'picture') {
            details = _.find(slider1.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            })
        } else {
            details = _.find(slider2.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            })
        }
        
        setTimeout(() => {
            this.setState({ footer: footer, signature: signature, sliderPictures: slider1, sliderArticles: slider2,details: details})
            TweenMax.set('.Details',  {opacity:0})
            TweenMax.to('.Details', .5, {opacity:1})
        }, 1000)
    }

    render() {
        return (
            <div className='Details'>
                {_.isEmpty(this.state.details)?
                    <Loading />
                :
               <div className='baseGrid'>
                <div className='detailsCard'>
                    <div className='mainImage'>
                        <img src={'/images/'+this.state.details.image} alt="detailImage" />
                        <div className='imgText'>
                            <h1>{this.state.details.title}</h1>
                            <p>{this.state.details.description}</p>
                        </div>
                    </div>
                    <div className="info">
                        <hr/>
                        <p>
                           Ipsum dolor sit amet, consectetur adipisicing elit. Facilis, tionem commodi beatae a nam s amet laborum itaque nostrum. Ex ab, sint qui eius eos quidem provident aspernatur molestias minima repudiandae ducimus pariatur rerum quia.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit, alias aliquid illo nihil mollitia veritatis, voluptate dicta corrupti reprehenderit itaque esse facere. Iusto asperiores similique consectetur aut accusamus repellendus.
                        Inventore fugiat aliquid vitae laboriosam quas natus eaque nulla, ratione ullam sed minima itaque doloribus quaerat aut commodi adipisci enim rerum. Libero, commodi soluta aspernatur velit ex obcaecati incidunt corrupti?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum veniam autem, aliquam recusandae provident!
                        </p>
                        <p>
                           Facilis, tionem commodi beatae a nam s amet laborum itaque nostrum. Ex ab, sint qui eius eos quidem provident aspernatur molestias minima repudiandae ducimus pariatur rerum quia.
                        </p>
                        <p>Accusantium suscipit, alias aliquid illo nihil mollitia veritatis, voluptate dicta corrupti reprehenderit itaque esse facere. Iusto asperiores similique consectetur aut accusamus repellendus.
                        Inventore fugiat aliquid vitae laboriosam quas natus eaque nulla, ratione ullam sed minima itaque doloribus quaerat aut commodi adipisci enim rerum. Libero, commodi soluta aspernatur velit ex obcaecati incidunt corrupti?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum veniam autem, aliquam recusandae provident!
                        </p>
                    </div>
                </div>
                <Signature content={this.state.signature} />
                <Footer content={this.state.footer} />
               </div>
                }
            </div>
        )
    }
}

export default Details;
