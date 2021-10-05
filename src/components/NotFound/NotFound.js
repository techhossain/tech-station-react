import React from 'react';
import notfound from '../../img/not-found.jpg';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Page not found</h2>
          <img className="img-fluid" src={notfound} alt="Not Found" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;