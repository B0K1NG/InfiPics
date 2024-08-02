import React from 'react';

function PhotoGallery({ photos, loading, hasMore }) {
    return (
        <div className="photo-gallery">
            {photos.map(photo => (
                <div key={photo.id} className="photo-item">
                    <img
                        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
                        alt={photo.title}
                    />
                    <p>{photo.title}</p>
                </div>
            ))}
            {loading && <p>Loading more photos...</p>}
            {!hasMore && <p>No more photos available.</p>}
        </div>
    );
}

export default PhotoGallery;
