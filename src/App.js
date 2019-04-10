import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter, Link } from 'react-router-dom'

import TopPage from './TopPage/TopPage'
import InductionToMobile from './InductionToMobile/InductionToMobile'

class App extends Component {
  componentDidMount() {
    let getDevice = (() => {
      let ua = navigator.userAgent;
      if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
          return 'sp';
      }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
          return 'tab';
      }else{
          return 'other';
      }
    })();
    if( getDevice ) {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Route path='/' render={ () => <TopPage /> } />
          <Route path='induction' render={ () => <InductionToMobile />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default  App;
