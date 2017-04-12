import React,{Component} from 'react';
 

class CountDowmComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			dateTime:{
				d:'',
				h:'',
				m:'',
				s:''
			},
			actDetail:''
		}
	}
	componentWillMount(){
		var newdate = new Date().getTime();
		var date = new Date().toLocaleString().replace(/[^\x00-\xff]/g,'');
		this.doCountDowm('2017/4/13 7:34:04');
		this.timer = setInterval(()=>{
	  	this.doCountDowm('2017/4/13 7:34:04');
	  },1000)
	}
  doCountDowm(time){
    var deadTime=time||this.state.actDetail.end_time_dt;
    deadTime=deadTime.replace(/\-/g, '/');
    var EndTime= new Date(deadTime); //截止时间     
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();

    if(t<=0){
      clearInterval(this.Timer);
      util.loading.hide();
    }else{
      var d=Math.floor(t/1000/60/60/24)>=0?Math.floor(t/1000/60/60/24):0;
      var h=Math.floor(t/1000/60/60%24)>=0?Math.floor(t/1000/60/60%24):0;
      var m=Math.floor(t/1000/60%60)>=0?Math.floor(t/1000/60%60):0;
      var s=Math.floor(t/1000%60)>=0?Math.floor(t/1000%60):0;
      
      if(d>0){
          d=d.toString();
          var d_l=d.substr(d.length-1,1);
          var d_h=d.length>1?d.substr(d.length-2,1):0;
      }else{
          var d_l=''+0;
          var d_h=''+0;
      }

      if(h>0){
          h=h.toString();
          var h_l=h.substr(h.length-1,1);
          var h_h=h.length>1?h.substr(h.length-2,1):0;
      }else{
          var h_l=''+0;
          var h_h=''+0;
      }

      if(m>0){
          m=m.toString();
          var m_l=m.substr(m.length-1,1);
          var m_h=m.length>1?m.substr(m.length-2,1):0;
      }else{
          var m_l=''+0;
          var m_h=''+0;
      }
      if(s>0){
          s=s.toString();
          var s_l=s.substr(s.length-1,1);
          var s_h=s.length>1?s.substr(s.length-2,1):0;
      }else{
          var s_l=''+0;
          var s_h=''+0;
      }
      var dateTime={
        d:d_h+d_l,
        h:h_h+h_l,
        m:m_h+m_l,
        s:s_h+s_l
      }
      util.loading.hide();
      this.setState({dateTime:dateTime})
    } 
    
  }
	render(){
		return(
			<div>
		      <span>{this.state.dateTime.d}</span>天
          <span>{this.state.dateTime.h}</span>时
          <span>{this.state.dateTime.m}</span>分
          <span>{this.state.dateTime.s}</span>秒
			</div>
		)
	}
}
export default CountDowmComponent;


