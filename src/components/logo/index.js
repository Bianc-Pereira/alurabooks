import React from 'react';
import logo from '../../images/logo.svg'; 

import './styles.css';

function ComponenteLogo() {
  return (
    <div className='header_logo'>
      <img src={logo} alt="Logo" className='header_logo_imagem'/>
      <p className='header_logo_texto'><strong>Alura</strong>Books</p>
    </div>
  );
}

export default ComponenteLogo; // Apenas uma exportação padrão
