// InfiniteScrolling.jsx
import React, { useState, useEffect, useCallback } from "react";
import PhotoGallery from './picsGallery';

const FLICKR_API_KEY = '08698c6ed0a751a551e133fbe4c68158';
const FLICKR_API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&text=landscape&per_page=20`;

function InfiniteScrolling() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchMorePics = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const response = await fetch(`${FLICKR_API_URL}&page=${page}`);
            const data = await response.json();
            const newPics = data.photos.photo;
            setPhotos(prev => [...prev, ...newPics]);
            setPage(prev => prev + 1);
            setHasMore(newPics.length > 0);
        } catch (error) {
            console.log('Error while fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    useEffect(() => {
        setPhotos([]);
        setPage(1);
        setHasMore(true);
    }, []);

    useEffect(() => {
        fetchMorePics();
    }, [fetchMorePics]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
                fetchMorePics();
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchMorePics]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="infinite-scroll-photos">
            <PhotoGallery photos={photos} loading={loading} hasMore={hasMore} />
        </div>
    );
}

export default InfiniteScrolling;
