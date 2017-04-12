'use strict';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import Store from './store';
import Actions from './actions';
import history from 'router/history';

import Swiper from 'components/common/swiper/SliderComponent';
import Slider from 'components/common/Slider/SliderComponent';
import CountDown from 'components/common/CountDowmComponent/CountDowmComponent';

require('styles/index/Index.less');

class IndexComponent extends React.Component {
  render() {
  	 return (
      <div className="index-component">
      		<Swiper/>
        	<Slider/>
        	<CountDown/>
      </div>
    );
  }
}

IndexComponent.displayName = 'IndexIndexComponent';
IndexComponent.defaultProps = {}


export default IndexComponent;
