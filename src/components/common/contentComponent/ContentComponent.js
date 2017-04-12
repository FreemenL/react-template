'use strict';
 import React,{Component} from 'react';
require('styles/common/content.less');

class ContentComponent extends Component{
	constructor(props){
		super(props);
	}
    render(){
    	var _this=this;
        return(
            <div className={this.props.contentClass(this.props.index)} >
            	<div className="data-container">
            		{this.props.val.map((item,index)=>{
				          return(
										<div key={index} className={_this.props.type}style={{backgroundImage:'url('+item.imgUrl+')'}}>
											<p><span>{item.title}：</span>{item.data}</p>
										</div>
            			)
            		})}
            	</div>
            </div>
        )
    }


};

export default ContentComponent;