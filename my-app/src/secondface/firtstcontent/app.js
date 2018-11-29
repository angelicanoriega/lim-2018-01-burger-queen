import React, { Component } from 'react';
import Btn from './btn/app'

class Firts extends Component {

    constructor(props) {
      super(props);
      this.state = {
        exist:props.showSecond
      };
    }
    render() {
      return (
        <div className="row border border-dark space d-flex justify-content-center align-items-center text-center">
          <div className='col-4 col-md-12'>
            <Btn function={this.state.exist} icon='fas fa-plus icon '></Btn>
          </div>  
          <div className='col-4 col-md-12'>
            <Btn function={this.state.exist} icon='fas fa-tasks icon'></Btn>
          </div>
            <div className='col-4 col-md-12'>
            <Btn function={this.state.exist} icon='fas fa-times icon'></Btn>
        </div> 
      </div>
      );
    }
  
  }
  export default Firts;
