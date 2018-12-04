import React, { Component } from 'react';


class Btntwo extends Component {

    constructor(props) {
      super(props);    
      this.state = {

      };  
    }
    render() {
      return (
      <div className="inner-container">
        <div className={this.props.icon}/>
      </div>
      );
    }
  
  }
  export default Btntwo;
