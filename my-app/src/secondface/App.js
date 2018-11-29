import React, { Component } from 'react';
import './App.css';
import First from './firtstcontent/app';

class App extends Component {
constructor() {
  super();
    this.state = {
    }
  }
  render() {
    return (
    <div className="root-container container-fluid">
      <div className="row">
      <div className="col-12  col-md-4 ">
          <First showSecond={this.props.showSecond} ></First>
      </div>
      <div className="col-12 col-md-4">y</div>
      <div className="col-12 col-md-4">y</div>   </div>
         
    </div>
    );
  }
}
export default App;