import React, {Component} from 'react';

import './Prompt_card.css'

class Prompt_card extends Component{
  increment_count = () => {
    this.setState((prev) => {
        return {
          count: prev.count + 1
        };
    });
  }
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setInterval(this.increment_count, 1000)
  }
  render(){
    return(
      <div>{this.state.count}</div>
    );
  }
}

export default Prompt_card;