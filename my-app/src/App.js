import React, { Component } from 'react';
import Firstpage from './firstface/App';
import Secondpage from './secondface/App';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstpage: true,
      isSecondpage: false
    };
  }
  showFirstpage() {
    document.getElementById('first').setAttribute('class','hidden');
    document.getElementById('second').removeAttribute('class');
  }
  showSecondpage() {
    document.getElementById('second').setAttribute('class','hidden');
    document.getElementById('first').removeAttribute('class');
  }
  render() {
    return (
  <div >
    <div  id='first' >
      <Firstpage showFirst={this.showFirstpage} />
    </div>
    <div id='second' className='hidden'>
      <Secondpage showSecond={this.showSecondpage} />
    </div>
  </div>
    );
  }
}

export default App;
