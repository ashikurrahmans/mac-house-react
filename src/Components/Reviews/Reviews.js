import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-10 mb-5 ml-10 mr-10">
      {reviews.map((review) => (
        <Review review={review} key={review.id}></Review>
      ))}
    </div>
  );
};

export default Reviews;
