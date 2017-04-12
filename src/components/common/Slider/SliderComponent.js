import React,{Component} from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import Store from './store';
import Actions from './actions';


require('styles/sliderList/sliderlist.less');

class SliderComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			listData:[],
			top:0
		}
		Actions.getList();
	}
	onChange(type,data){
		if(type=='listData'){
			this.setState({
				listData:data.concat(data)
			})
		}
		var ulHeight = this.refs.list.offsetHeight/2;
		console.log(ulHeight);
		var top =Math.abs (parseInt(this.refs.list.style.top));
		this.timer = setInterval(()=>{
		this.setState({
			top:Math.abs(this.state.top)>=ulHeight?-2:this.state.top-2
			})
		},50)
	}
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	render(){
		return (
			<div className='SliderComponent'>
				<ul className='listWrapper' ref='list' style={{top:this.state.top}}>
					{this.state.listData.map(function(item,index){
						return(
							<li key={index}>{item.content}</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

ReactMixin.onClass(SliderComponent,Reflux.listenTo(Store, 'onChange'));



export default SliderComponent;

































