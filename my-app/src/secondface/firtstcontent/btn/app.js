import React, { Component } from 'react';


class Btn extends Component {

    constructor(props) {
      super(props);    
      this.state = {
        function:props.function
      };  
    }
    function(){      
      this.state.function();
    }
    render() {
      return (
      <div className="inner-container">
        <div className={this.props.icon}
        onClick={this
        .function
        .bind(this)}/>
      </div>
      );
    }
  
  }
  export default Btn;
