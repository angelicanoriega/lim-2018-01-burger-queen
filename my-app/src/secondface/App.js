import React, { Component } from 'react';
import './App.css';
import { todos } from './todos.json';
import Form from './form/app';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.upList = this.upList.bind(this);
    this.complet = this.complet.bind(this);
  }

  removelist(index) {
    console.log(index);
    
   if (window.confirm('Estas segur@ de eliminar esta lista?')) {
    this.setState({
    todos: this.state.todos.filter((e, i) => {
    return i !== index
      })
    }); 
    } 
  }
  complet(index){
   if(document.getElementById(this.state.todos[index].title).hasAttribute('class')){
    document.getElementById(this.state.todos[index].title).removeAttribute('class')
   }
   else{
    document.getElementById(this.state.todos[index].title).setAttribute('class','change');
   }
  }
 
  upList(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
            <div  id={todo.title}>
            <p >{todo.description}</p>
            </div>
            </div>
            <div className="card-footer text-center">
            <div className="row">
              <div className=" col-6 col-md-6">
                <button
                className="btn btn-danger"
                onClick={this.removelist.bind(this, i)}>
                Borrar
                </button>
              </div>
              <div className=" col-6 col-md-6  text-center">
                <button
                className="btn btn-warning text-white"
                onClick={this.complet.bind(this, i)}>
                 Completada
                </button> 
              </div>
            <div/>
            </div>
          </div>
          </div>
          </div>
      )
    });
    return (
      <div className="App pt-3">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <Form onAddTodo={this.upList} showSecond={this.props.showSecond}></Form>
            </div>
            <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
              <div className="row cuadro">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;