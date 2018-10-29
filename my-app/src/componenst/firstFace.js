import React, { Component } from 'react';
import Form from './form';
import Title from './title';
import './form.css';
class First extends Component {
  render() {
    return (
      <div>
      <div>          
       <Title/>
      </div>
      <div className="container-fluid slider d-flex justify-content-center align-items-center">
        <Form/>
      </div>
      </div>
    );
  }
}

export default First;