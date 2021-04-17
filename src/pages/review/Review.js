import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
    // console.log(reviews);
  useEffect(() => {
    async function fetchReview() {
        const response = await fetch('http://localhost:5000/reviews')
        const data = await response.json();
        setReviews(data);
    }
    fetchReview();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className=" col-12  header my-4 text-center ">
          <h5 className="text-secondary">We are Happy</h5>
          <h1>What People Says</h1>
        </div>
      </div>
      <div className="row">
          {
              reviews.map(review => <SingleReview review = {review} key={review._id } />)
          }
        </div>
    </div>
  );
};

export default Review;
