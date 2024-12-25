import React from 'react';

function Services() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/images/service1.jpg" className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Puja Booking</h5>
              <p className="card-text">Book personalized pujas for your family.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/images/service2.jpg" className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Prasad Delivery</h5>
              <p className="card-text">Get holy prasad delivered to your doorstep.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/images/service3.jpg" className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Temple Tours</h5>
              <p className="card-text">Join guided tours of our historic temple.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;