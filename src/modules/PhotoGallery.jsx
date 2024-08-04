import React from "react";
import FavoriteButton from "./Favouriting";

function PicsGallery({ photos = [] }) { 
    return (
        <div className="photo-gallery">
            {photos.map(photo => (
                    <div key={photo.id} className="photo-gallery__item">
                        <img className="photo-gallery__image"
                            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
                            alt={photo.title}
                        />
                    <p className="photo-gallery__title">{photo.title}</p>
                    <FavoriteButton itemId={photo.id}/>
                    </div>
            ))}
        </div>
    );
}

export default PicsGallery;
