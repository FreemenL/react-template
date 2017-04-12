import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import Store from './store';
import Actions from './actions';
import Slider from 'libs/swiper/swiper.min.js';

require('libs/swiper/swiper.min.css');
class SliderComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			imgUrls:[]
		}
		Actions.getBanner();
	}	
	onChange(type,data){
    util.loading.hide();
    if(type=='banner'){
       this.setState({
        imgUrls:data
      })
		 new Swiper ('#header .swiper-container', {
			    loop: true,
			    pagination: '.swiper-pagination',
			    paginationClickable: true,
			    autoplay : 2000,
					autoplayDisableOnInteraction : false,		    
			}) 
    }
  }
	render(){
	let countId = 0;
    return (
      <div id="header">
    		<div className="swiper-container">
			    <div className="swiper-wrapper">
			    	{
			    		this.state.imgUrls.map((url) => {
			    			return <div className="swiper-slide" key={"header" + countId++} >
			    						<img className="img" src={url.url} />
			    						<p style={{position:'absolute','zIndex':'9999999',top:0}}>{url.title}</p>
			    				   </div>
			    		})
			    	}
			    </div>
				<div className="swiper-pagination"></div>
			</div>
	      </div>
    );
  }
}

ReactMixin.onClass(SliderComponent,Reflux.listenTo(Store, 'onChange'));
export default SliderComponent;






























