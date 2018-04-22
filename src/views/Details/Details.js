import React, {Component} from 'react';
import _ from 'lodash';
// import components
import Signature from '../../components/Signature/Signature';
import Footer from '../../components/Footer/Footer';

//images
import testImg from '../../images/assets/image2.jpg';

// dummy data
import content from '../../content.json';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            footer: {},
            sliderPictures: {},
            sliderArticles: {},
            signature: {},
            details: {}
        }
    }

    componentDidMount() {
        // set window scoll position to top.
        window.scrollTo(0, 0); 
        // Here I deconstructed content and assigned it to state using set Timeout to
        // mimic a Ajax request to a server.
        const {footer, signature, slider1, slider2} = content
        let details = {}
        // Since pictures and articles had ids that overlaped I seperated them by type
        // then id to get the information.
        if (this.props.match.params.type === 'picture') {
            // console.log('picture', this.props)
            // console.log('find', _.find(slider1.slides, (x) => {
            //     return x.id === this.props.match.params.id * 1
            // }))
            details = _.find(slider1.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            })
        } else {
            // console.log('article', this.props)
            // console.log('find', _.find(slider2.slides, (x) => {
            //     return x.id === this.props.match.params.id * 1
            // }))
            details = _.find(slider2.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            })
        }
        setTimeout(() => {
            this.setState({footer: footer, sliderPictures: slider1, sliderArticles: slider2, signature: signature, details: details})
        }, 1000)
    }

    render() {
        return (
            <div className='Details'>
               <div className='baseGrid'>
                <div className='detailsCard'>
                    <div className='mainImage'>
                        <img src={testImg} alt="" />
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
               </div>
                <Signature content={this.state.signature}/>
                <Footer content={this.state.footer}/>
            </div>
        )
    }
}

export default Details;
