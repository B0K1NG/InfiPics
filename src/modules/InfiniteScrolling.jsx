import React, { useEffect, useCallback, useState } from 'react';
import PicsGallery from './PhotoGallery.jsx';
import useFetchPhotos from './FetchFlickr.jsx';
import { throttle } from 'lodash';

function InfiniteScrolling() {
    const { photos, fetchMorePics, resetPhotos, loading, hasMore } = useFetchPhotos();
    const [initialFetchDone, setInitialFetchDone] = useState(false);

    const handleScroll = useCallback(throttle(() => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !loading && hasMore) {
            fetchMorePics();
        }
    }, 200), [fetchMorePics, loading, hasMore]);

    useEffect(() => {
        if (!initialFetchDone) {
            resetPhotos();
            fetchMorePics(true);
            setInitialFetchDone(true);
        }
    }, [fetchMorePics, resetPhotos, initialFetchDone]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(`Rendering ${photos.length} photos`);

    return (
        <div className="infinite-scroll-photos">
            <PicsGallery photos={photos} />
            {loading && <p>Loading more photos...</p>}
            {!loading && !hasMore && <p>No more photos available</p>}
        </div>
    );
}

export default InfiniteScrolling;
