import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/temple1.jpg" className="d-block w-100" alt="Kunnath" />
            <div className="carousel-caption d-none d-md-block">
              <h5>കുന്നത്ത് ശ്രീഭഗവതി ക്ഷേത്രം</h5>
              <p>Experience spirituality and divine blessings at our temple.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/temple2.jpg" className="d-block w-100" alt="Temple 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Join Our Events</h5>
              <p>Celebrate festivals with devotion and joy.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/temple3.jpg" className="d-block w-100" alt="Temple 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Peaceful Atmosphere</h5>
              <p>Find tranquility and spiritual connection.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="overlay-text">
        <h1>കുന്നത്ത് ശ്രീഭഗവതി ക്ഷേത്രം</h1>
        <p>"അമ്മേ നാരായണ"</p>
        <p>"ഓം സർവ്വ മംഗള മംഗല്യേ</p>
        <p>ശിവേ സർവ്വാർത്ഥ സാധികേ</p>
        <p>ശരണ്യേ ത്രയംബകേ ഗൗരി</p>
        <p>നാരായണീ നമോസ്തുതേ"</p>
      </div>
    </div>
  );
}

export default Home;