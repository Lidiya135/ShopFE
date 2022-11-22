import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Belanja from '../../img/belanjavector.png';

const Logo = ({ title, link, size }) => {
  return (
    <NavLink to={{ link }}>
      <img src={Belanja} alt="Belanja" className="d-inline-block align-text-center" />
      <span className="{Logo}" style={{ fontsize: size }}>
        {title}
      </span>
    </NavLink>
  );
};

export default Logo;