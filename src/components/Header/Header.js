import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <Menu></Menu>
        <hr />
      </div>
    </div>
  );
};

export default Header;