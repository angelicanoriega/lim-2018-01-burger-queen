import React, { Component } from 'react';
import Btn from './btn/app'

class Firts extends Component {

    constructor(props) {
      super(props);      
      this.state = {
        exist:props.exist,
        newOrder:props.newOrder,
        statusOrder:props.statusOrder,
      };
    }
    render() {      
      return (
        <div className="row space d-flex justify-content-center align-items-center text-center">
          <div className='col-4 col-md-12'>
            <Btn function={this.state.newOrder} icon='fas fa-plus icon mt-5 mb-5 '></Btn>
          </div>  
          <div className='col-4 col-md-12'>
            <Btn function={this.state.statusOrder} icon='fas fa-tasks icon mt-5 mb-5 '></Btn>
          </div>
            <div className='col-4 col-md-12'>
            <Btn function={this.state.exist} icon='fas fa-times icon mt-5 mb-5 '></Btn>
        </div> 
      </div>
      );
    }
  
  }
  export default Firts;
