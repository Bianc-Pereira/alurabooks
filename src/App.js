import React from 'react';
import './App.css';
import ComponenteLogo from './components/logo'; // Certifique-se que o caminho está correto
import OpcoesMenuNav from './components/headerMenu';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
         <ComponenteLogo/>
         <OpcoesMenuNav/>
      </header>
    </div>
  );
}

export default App;
