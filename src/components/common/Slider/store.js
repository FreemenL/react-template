import Reflux from 'reflux'
import actions from './actions'
import Mixins from 'libs/CommonStore'


export default Reflux.createStore({
	mixins: [Mixins],
    //监听所有的actions
    listenables: [actions],
    //on开头的都是action触发后的回调函数
    onGetList() {
        var list = [
            {
                content:'全名抢购惊喜不停11',
            },{
                content:'限时秒杀惊喜不停22',
            },{
                content:'天天特价惊喜不停33',
            },{
                content:'最低折扣惊喜不停44',
            },{
                content:'疯狂清仓惊喜不停55',
            },
            {
                content:'疯狂清仓惊喜不停66',
            }
        ] ;
        this.trigger('listData',list);
    }
});

