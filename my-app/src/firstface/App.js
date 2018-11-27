import React, {
  Component
} from 'react';
import './App.css';
import Login from './login/app';
import Register from './register/app';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  render() {

    return ( <div className = "root-container" > 
    <div className="box-controller">
       <div
         className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showLoginBox
         .bind(this)}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showRegisterBox
         .bind(this)}>
         Register
       </div>
     </div>
     <div className="box-cu"> {
      this.state.isLoginOpen && < Login showFirst={this.props.showFirst} />
    } {
      this.state.isRegisterOpen && < Register showFirst={this.props.showFirst}/>
    }
</div>
      </div>
    );
  }
}

export default App;