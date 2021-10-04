import React from 'react';
import Menu from '../Menu/Menu';

const Footer = () => {
  return (
    <div className="container">
      <div className="row">

        <footer className="py-3 my-4 border-top border-dark">
          <Menu></Menu>
          <p className="text-center text-muted">&copy; 2021 Tech Station, All Right Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;