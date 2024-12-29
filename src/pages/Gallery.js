import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    { id: 1, src: '/assets/images/gallery1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/assets/images/gallery2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/assets/images/gallery3.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: '/assets/images/gallery4.jpg', alt: 'Gallery Image 4' },
  ];
  

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;