import { useState, useCallback } from 'react';

const FLICKR_API_URL = process.env.REACT_APP_FLICKR_API_URL;
const PHOTOS_PER_PAGE = 5;

function useFetchPhotos(initialPage = 1) {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchMorePics = useCallback(async (isInitialFetch = false) => {
        if (loading || (!hasMore && !isInitialFetch)) return;
        setLoading(true);
        try {
            const response = await fetch(`${FLICKR_API_URL}&page=${page}&per_page=${PHOTOS_PER_PAGE}`);
            const data = await response.json();
            const newPics = data.photos.photo;
            console.log(`Fetched ${newPics.length} new photos`);
            
            setPhotos(prevPhotos => {
                if (isInitialFetch) {
                    return newPics;
                } else {
                    return [...prevPhotos, ...newPics];
                }
            });
            
            setPage(prevPage => prevPage + 1);
            setHasMore(newPics.length === PHOTOS_PER_PAGE);
        } catch (error) {
            console.error('Error while fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    const resetPhotos = useCallback(() => {
        setPhotos([]);
        setPage(1);
        setHasMore(true);
    }, []);

    return { photos, fetchMorePics, resetPhotos, loading, hasMore };
}

export default useFetchPhotos;