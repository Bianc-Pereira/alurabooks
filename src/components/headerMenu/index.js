import React from 'react';
import imgPerfil from '../../images/perfil.svg';
import imgSacola from '../../images/sacola.svg';
import './style.css';

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
const iconesNav = [imgPerfil, imgSacola]
function headerMenu() {
    return (
        <div className='menu_nav'>
            <ul className='opcoes'>
                {textoOpcoes.map((texto) => (
                    <li className='opcao'>{texto}</li>
                ))}
            </ul>

            <ul className='icones'>
                {iconesNav.map((icone) => (
                    <li className='icone'>
                        <img className='imagem_icone' src={icone}></img>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default headerMenu; // Apenas uma exportação padrão
