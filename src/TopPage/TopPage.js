import React, {Component} from 'react';
import { withRouter } from 'react-router';
import posed from 'react-pose'

import './TopPage.css';

import AppBar from '@material-ui/core/AppBar/AppBar'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LaptopChromebookOutlined from '@material-ui/icons/LaptopChromebookOutlined'


import '../component/Prompt_card/Prompt_card'
import Prompt_card from '../component/Prompt_card/Prompt_card';

const Box = posed.div({
  visible: { rotate: 5 },
  hidden: { rotate: -5 }
});
const Monitor = posed.div({
  stay: { top: '50%', left: '50%', width: '60vw', height: '60vw', color: 'black', fontSize: '1em' },
  go: { top: '50%', left: '50%', width: '200%', height: '200%', transition: {eace: 'circIn', duration:1000}, fontSize: '-10em' }
});

class TopPage extends Component{
  constructor() {
    super();
    this.state = {
      isVisible: false,
      routing_trigger: false
    }
  }
  trans_page = () => {
    this.props.history.push('/watch')
  }
  shake_state = () => {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 300);
  }
  second_shake_state = () => {
    setInterval(() => {
      this.shake_state()
    }, 500);
  }
  componentDidMount() {
    setInterval(() => {
      this.second_shake_state()
    }, 700);
    setInterval(() => {
      this.setState({ routing_trigger: !this.state.routing_trigger });
    }, 700);
  }
  render(){
    return(
      <div>
        {/*
        <AppBar id="AppBar" colorPrimary="#5E4B4B" position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        */}
        <Monitor pose={this.state.routing_trigger ? 'go' : 'stay'} id="Circle-ad" onClick={this.trans_page} >
          <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}><LaptopChromebookOutlined id="phone-icon" fontSize="large"/></Box>
          <div id="start"><h3>はじめる</h3></div>
        </Monitor>
        {/*<Prompt_card />*/}
      </div>
    );
  }
}

export default withRouter(TopPage);