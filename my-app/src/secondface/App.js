import React, { Component } from 'react';
import './App.css';
import First from './firtstcontent/app';
import Second from './secondcontent/app';


class App extends Component {
constructor(props) {
  super(props);
    this.state = {
    
    }
  }
  newOrder(){
    document.getElementById('statusOrder').setAttribute('class','hidden');
    document.getElementById('newOrder').removeAttribute('class');
    document.getElementById('newOrder').setAttribute('class','col-12 col-md-8');
  }
  statusOrder(){
    document.getElementById('newOrder').setAttribute('class','hidden');
    document.getElementById('statusOrder').removeAttribute('class');
    document.getElementById('statusOrder').setAttribute('class','col-12 col-md-8');
  }
  render() {    
    return (
    <div className="root-container container-fluid">
      <div className="row">
      <div className="col-12  col-md-4 ">
          <First exist={this.props.showSecond} newOrder={this.newOrder}  statusOrder={this.statusOrder}  ></First>
      </div>
      <div id='newOrder' ><Second/></div>
      <div id='statusOrder' className="hidden">yrrrrrrrrrrreeeeeeeeeeeeerr</div> 
      </div>
    </div>
    );
  }
}
export default App;