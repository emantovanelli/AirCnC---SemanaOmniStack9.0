import React from 'react';
import './App.css';
import logo from './assets/logo.svg'
import api from './services/api';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC Logo"/>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> pra programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"/>
          <button className="btn" type="submit">ENTRAR</button>
        </form>

      </div>
    </div>
  );
}

export default App;
