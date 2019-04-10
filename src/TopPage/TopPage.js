import React, {Component} from 'react';

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

import posed from 'react-pose'

import '../component/Prompt_card/Prompt_card'
import Prompt_card from '../component/Prompt_card/Prompt_card';

const Box = posed.div({
  visible: { rotate: 5 },
  hidden: { rotate: -5 }
});

class TopPage extends Component{
  constructor() {
    super();
    this.state = {
      isVisible: false
    }
  }
  trans_page = () => {

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
  }
  render(){
    return(
      <div>
        <AppBar id="AppBar" colorPrimary="#5E4B4B" position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div id="Circle-ad" onClick={this.trans_page} >
          <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}><LaptopChromebookOutlined id="phone-icon" fontSize="large"/></Box>
          <div id="start"><h3>はじめる</h3></div>
        </div>
        {/*<Prompt_card />*/}
      </div>
    );
  }
}

export default TopPage;