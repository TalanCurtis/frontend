import React, {Component}from 'react';
import _ from 'lodash';
// import components
import Signature from '../../components/Signature/Signature';
import Footer from '../../components/Footer/Footer';

// dummy data
import content from '../../content.json';

class Details extends Component{
    constructor() {
        super();
        this.state = {
            footer: {},
            sliderPictures: {},
            sliderArticles: {},
            signature: {},
            details:{}
        }
    }

    componentDidMount() {
        // Here I deconstructed content and assigned it to state using set Timeout to
        // mimic a Ajax request to a server.
        const {footer, signature, slider1, slider2} = content
        let details = {}
        if(this.props.match.params.type==='picture'){
            console.log('picture', this.props)
            console.log('find',_.find(slider1.slides, (x)=>{return x.id === this.props.match.params.id*1 }))
            details= _.find(slider1.slides, (x)=>{return x.id === this.props.match.params.id*1 })
        }else{
            console.log('article', this.props)
            console.log('find',_.find(slider2.slides, (x)=>{return x.id === this.props.match.params.id*1 }))
            details= _.find(slider2.slides, (x)=>{return x.id === this.props.match.params.id*1 })
        }
        setTimeout(() => {
            this.setState({footer: footer, sliderPictures: slider1, sliderArticles: slider2, signature: signature, details: details})
        }, 1000)
    }

    render(){
        return(
        <div className='Details'>
            <div className='box1'>{JSON.stringify(this.state.details)}</div>
            <Signature content={this.state.signature} />
            <Footer content={this.state.footer} />
        </div>
        )
    }
}

export default Details;

