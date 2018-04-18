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
        // Here I deconstructed content and assigned it to state using set Timeout to
        // mimic a Ajax request to a server.
        const {footer, signature, slider1, slider2} = content
        let details = {}
        // Since pictures and articles had ids that overlaped I seperated them by type
        // then id to get the information.
        if (this.props.match.params.type === 'picture') {
            console.log('picture', this.props)
            console.log('find', _.find(slider1.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            }))
            details = _.find(slider1.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            })
        } else {
            console.log('article', this.props)
            console.log('find', _.find(slider2.slides, (x) => {
                return x.id === this.props.match.params.id * 1
            }))
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
                <div className='box1'>{JSON.stringify(this.state.details)}</div>
               <div className='baseGrid'>
                <div className='detailsCard'>
                    <div className='mainImage'>
                        <img src={testImg} alt="" />
                        {/* <img src={testImg} alt="" style={{backgroundImage: `linear-gradient(45deg, purple 15px, transparent 0), url(${testImg})`}}/> */}
                        {/* <div className='image'  style={{backgroundImage: `linear-gradient(45deg, grey 15px, transparent 0), url(${testImg})`}}></div> */}
                        <div className='imgText'>
                            <h1>{this.state.details.title}</h1>
                            <p>{this.state.details.description}</p>
                        </div>
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
