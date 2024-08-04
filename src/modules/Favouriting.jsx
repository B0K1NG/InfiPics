import React, { useState, useEffect } from "react";

const FavoriteButton = ({ itemId }) => {
    const getInitialFavoriteState = () => {
        const savedState = localStorage.getItem(`favorite-${itemId}`)
        return savedState === 'true';
    };

    const [isFavorite, setIsFavorite] = useState(getInitialFavoriteState);

    useEffect(() => {
        localStorage.setItem(`favorite-${itemId}`, isFavorite);
    }, [isFavorite, itemId]);

    const handleClick = () => {
        setIsFavorite(prevState => !prevState)
    };

    return (
        <button onClick={handleClick}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    );
};

export default FavoriteButton