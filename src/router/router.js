import React from 'react';
import { Router, Route,IndexRedirect} from 'react-router';
import Index from 'components/index/IndexComponent';
import NoFound from 'components/error/ErrorComponent';
import history from 'router/history';

export const routes=(
  <Router history={history}>
    <Route path="/" >
      <Route path="index" component={Index} onEnter={share}/>
      <IndexRedirect  to="index" />
    </Route>
    <Route path="*" component={NoFound} />
  </Router>
)
function share(){
  /*
	jssdk.init(function(){
        jssdk.hideMenuItems();
    })*/
}

export default routes;

