import React from 'react';

interface StarRatingProps {
    rating: number;
    hoveredRating: number;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    setHoveredRating: React.Dispatch<React.SetStateAction<number>>;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, hoveredRating, setRating,setHoveredRating }) => {

const handleStarHover = (starValue: number) => {
setHoveredRating(starValue);
};

const handleStarClick = (starValue: number) => {
setRating(starValue);
};
console.log(hoveredRating);

return (
<div className="flex">
    {/* length: 5, 5 is the maximum star rating in the reviews */}
    {Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    const isSelected = starValue <= rating;
    const isHovered = starValue <= hoveredRating;

    return (
        <div
        key={starValue}
        className={`cursor-pointer text-xl lg:text-2xl ${
            isSelected ? 'text-yellow-500' : 'text-gray-300'
        } ${isHovered ? 'hover:text-yellow-500' : ''}`}
        onMouseEnter={() => handleStarHover(starValue)}
        onMouseLeave={() => setHoveredRating(0)}
        onClick={() => handleStarClick(starValue)}
        >
        ★
        </div>
    );
    })}
</div>
);
};

export default StarRating;