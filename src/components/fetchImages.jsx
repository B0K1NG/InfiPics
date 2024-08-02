import React, { useState, useEffect } from "react";

const FLICKR_API_KEY = '08698c6ed0a751a551e133fbe4c68158';
const FLICKR_API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&text=landscape`;

function FetchFlicker() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(FLICKR_API_URL)
            .then(response => response.json())
            .then(data => {
                setPhotos(data.photos.photo);
            })
            .catch(error => console.error('Error while fetching data:', error));
    }, []);

    return (
        <div className="fetch-flicker">
            <h1>infiPics</h1>
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
            </div>
        </div>
    );
}

export default FetchFlicker;
