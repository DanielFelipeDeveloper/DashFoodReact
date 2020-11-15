import React from 'react';
import MaterialIcon from 'material-icons-react';
import logo from '../../assets/images/logo.png';

import './navbar.css'

function Navbar() {
  return (
    <nav className="sidebar">

        <div className="sidebar-title">
          <img src={logo} alt="Logo"/>
        </div>

        <div className="menu">

          <ul>
            <li>
              <div className="icon">
                <i><MaterialIcon icon="dashboard" color="#252627e1" size={35}/></i>
              </div>

              <a href="/">Início</a>
            </li>

            <li>
              <div className="icon">
                <MaterialIcon icon="point_of_sale" color="#252627e1" size={35}/>
              </div>

              <a href="/">Caixa/Venda</a>
            </li>

            <li>
              <div className="icon">
                <MaterialIcon icon="restaurant" color="#252627e1" size={35}/>
              </div>

              <a href="/">Pedidos/Mesas</a>
            </li>

            <li>
              <div className="icon">
                <MaterialIcon icon="border_all" color="#252627e1" size={35}/>
              </div>

              <a href="/">Produtos/Estoque</a>
            </li>

            <li>
              <div className="icon">
                <MaterialIcon icon="local_atm" color="#252627e1" size={35}/>
              </div>

              <a href="/">Movimento/Lucros</a>
            </li>
          </ul>

        </div>

      </nav>
  );
}

export default Navbar;