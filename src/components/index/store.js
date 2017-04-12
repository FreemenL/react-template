import Reflux from 'reflux'
import actions from './actions'
import Mixins from 'libs/CommonStore'


export default Reflux.createStore({
	mixins: [Mixins],
    //监听所有的actions
    listenables: [actions],
    //on开头的都是action触发后的回调函数
    onGetBanner() {
        var data = [
            {
                title:'全名抢购',
                url:"http://localhost:3000/images/swiper/1.jpg"
            },{
                title:'限时秒杀',
                url:"http://localhost:3000/images/swiper/2.jpg"
            },{
                title:'天天特价',
                url:"http://localhost:3000/images/swiper/3.jpg"
            },{
                title:'最低折扣',
                url:"http://localhost:3000/images/swiper/4.jpg"
            },{
                title:'疯狂清仓',
                url:"http://localhost:3000/images/swiper/5.jpg"
            },
            {
                title:'疯狂清仓',
                url:"http://localhost:3000/images/swiper/5.jpg"
            }
        ] ;
        this.trigger('banner',data);
    }
});

