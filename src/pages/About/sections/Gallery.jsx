import React from 'react';
import galleryData from './content/galleryData';

const Gallery = () => {
    return ( 
        <div className="gallery-container grid">
            {galleryData.map((item) => (
                <div key={item.id} className="gallery-item">
                    <img src={item.img} alt={item.alt} className="gallery-img" />
                </div>
            ))}
        </div>
    )
}

export default Gallery