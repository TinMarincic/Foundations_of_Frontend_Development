import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bella.css';

function Bella() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.json'); // Adjust path if necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <div className="text-box">
        <h1>Your hair at its best</h1>
        <p>
          A small business run with a lot of care, supported by our happy
          customers. This is our story...
        </p>
        <Link to="/about_us" className="About-us-btn-link">About us</Link>
      </div>

      <section className="reviews">
        <h1>Reviews</h1>
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </section>

      <section className="picss">
        <h1><b>Our clients</b></h1>
        <div className="picss-row">
          <img src="/images/random girl3 haircut.png" alt="Random Girl Haircut" />
          <img src="/images/Ryan_Reynolds.jpg" alt="Random Guy Haircut" />
          <img src="/images/kid haircut.jpg" alt="Kid Haircut" />
        </div>
      </section>
    </>
  );
}

export default Bella;
