import React, { Component } from 'react';

class Form extends Component {
  constructor (props) {
    super(props);    
    this.state = {
      title: '',
      description: '',
    };
    this.InputChange = this.InputChange.bind(this);
    this.Submit = this.Submit.bind(this);
    this.exits = this.exits.bind(this);

  }

  Submit(e) {
    e.preventDefault();
    if(this.state.title||this.state.description !==''){
      this.props.onAddTodo(this.state);
      this.setState({
        title: '',
        description: '',
      });
    }
    else{
      alert('completa los campos faltantes')
    }
  }

  InputChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }
  exits(){
    this.props.showSecond();
  }
  render() {
    return (
      <div className=" text-center row">
      <div className="col-md-12 card">
        <form onSubmit={this.Submit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.InputChange}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.InputChange}
              placeholder="Contenido"
              />
          </div>     
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <input type='button' value='Salir' className="btn btn-danger ml-4" onClick={this.exits}/>
        </form>
        </div>
      </div>
    )
  }
}

export default Form;