import React from "react";

function PicsGallery({ photos = [] }) { 
    return (
        <div className="photo-gallery">
            {photos.length === 0 ? (
                <p>No photos available</p>
            ) : (
                photos.map(photo => (
                    <div key={photo.id} className="photo-item">
                        <img
                            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
                            alt={photo.title}
                        />
                        <p>{photo.title}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default PicsGallery;
