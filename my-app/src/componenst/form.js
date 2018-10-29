import React, { Component } from 'react';

class Second extends Component {
  render() {
    return (
      <div className='init'>
            <h1>Iniciar Seción</h1>
            <input type="email" placeholder="Usuario" />
            <input type='password'placeholder="Contraseña" />
            <input className='btn' type="button" value="Entrar" />
      </div>
    );
  }
}

export default Second;