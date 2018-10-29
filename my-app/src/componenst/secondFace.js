import React, { Component } from 'react';
import BtnSee from './btnSee';
import MoreFood from './moreFood';
import BtnFood from './btnFood';
import './sf.css'

class Second extends Component {
  render() {
    return (
      <div className="container-fluid slider">
        <div className='row'>
            <div className="col-12 col-md-2 bg-dark p-2">
              <BtnSee/>
            </div>      
            <div className="col-12 col-md-6 bg-danger p-2">
                 <BtnFood/>
                 <MoreFood className='content p-4'/>

              </div>
              <div className="col-12 col-md-4 bg-dark p-2" >

            </div>
            </div>      
      </div>
    );
  }
}

export default Second;