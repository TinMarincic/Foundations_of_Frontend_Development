import React from 'react';
import {Link} from 'react-router-dom';
import './bella.css';

function Bella() {
  return (
    <>
      <div className="text-box">
        <h1>Your hair at its best</h1>
        <p>
          A small business run with a lot of care, supported by our happy
          customers. This is our story...
        </p>
        <Link to ="/about_us" className="About-us-btn-link">About us</Link>
      </div>
    
      <section className="reviews">
        <h1>Reviews</h1>
    
        <div className="review">
          <h3>Dženan</h3>
          <p>
            The best haircuts, with good people and an overall great experience!
          </p>
        </div>
        <div className="review">
          <h3>Hana</h3>
          <p>They always manage to do exactly what i wish for!</p>
        </div>
        <div className="review">
          <h3>Namik</h3>
          <p>
            I've been cutting my hair here since I was a kid and I couldn't
            recommend them enough!
          </p>
        </div>
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
