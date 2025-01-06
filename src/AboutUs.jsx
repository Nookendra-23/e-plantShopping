import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

function AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Kumar's Plants, A Haven of Green and Peace!</p>
      <p className="about-us-content">
        At Kumar's Plants, we specialize in offering a diverse range of thriving, healthy plants, from hardy succulents and elegant orchids to sturdy trees and colorful blooms.
       Each plant is carefully chosen to flourish in your unique environment. Our intuitive website features detailed care guides, expert gardening tips, and personalized advice to help your plants thrive. 
       Whether you're an experienced gardener or just beginning your plant journey, Kumar's Plants is your go-to resource for cultivating a lush and vibrant green space.
      </p>
      <p className="about-us-content">
        Our dedicated team ensures that every plant meets our high standards for quality and care. Whether you're seasoned in gardening or new to the world of plants, 
        we're here to assist you in every step. Browse our extensive collection, reach out with any questions, and let us help you find the perfect addition to your home or office.
      </p>
      <p className="about-us-content">
      Join our mission to create a greener, healthier world. Explore Kumar's Plants today and bring the beauty of nature right to your doorstep.  
      </p>
    </div>
  );
}

export default AboutUs;
