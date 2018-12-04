import React, {Component} from 'react';
import Btntwo from './btn2/app';

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakfastOpen: true,
      isLunchOpen: false,
      isDrinksOpen: false,
    };
  }
  isBreakfastOpen=()=> {      
    this.setState({isBreakfastOpen: true, isLunchOpen: false, isDrinksOpen: false });
  }
  isLunchOpen=()=> {
    this.setState({isBreakfastOpen: false, isLunchOpen: true, isDrinksOpen: false });
  }
  isDrinksOpen=()=> {
    this.setState({isBreakfastOpen: false, isLunchOpen: false, isDrinksOpen: true });
  }
  render() {      
        console.log(this.state)

    return ( 
        
        <div className="row space d-flex justify-content-center align-items-center text-center">
        <div className='col-12 col-md-12'>
        <div className='row'>
            <div className='col-4 col-md-4'>
            <div onClick = {this.isBreakfastOpen}>
            < Btntwo icon = 'fas fa-stroopwafel icon mt-5 mb-5 '/>
            </div>
            </div>  
            <div className='col-4 col-md-4'>
            <div  onClick = {this.isLunchOpen}>
            <Btntwo  icon='fas fa-utensils icon mt-5 mb-5 '/>
            </div>
            </div>
            <div className='col-4 col-md-4'>
            <div onClick = {this.isDrinksOpen}>
            <Btntwo icon='fas fa-coffee icon mt-5 mb-5 ' />
            </div>
            </div> 
        </div>
        </div>
     
      <div className='col-4 col-md-12'>
      {this.state.isBreakfastOpen && 'desayuno'}
      {this.state.isLunchOpen && 'almuerzo'}
      {this.state.isDrinksOpen && 'bebida'}
         </div> 
    </div>
    )
  }
}

export default Second;
