import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Introduction = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, [videoLoaded]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  return (
    <section className="introduction-section">
      <div ref={ref} className={`introduction-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
        <div className="introduction-video-container">
          <video 
            ref={videoRef}
            className="introduction-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
          >
            <source src={`${process.env.PUBLIC_URL}/intro-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!videoLoaded && !videoError && (
            <div className="video-placeholder">
              <p>Loading video...</p>
            </div>
          )}
          {videoError && (
            <div className="video-placeholder">
              <p>Video not found. Please check the file path.</p>
            </div>
          )}
        </div>
        <div className="introduction-text-content">
          <h3 className="introduction-subheading">
            About <span className="introduction-underline">Dentisol</span>
          </h3>
          <h2 className="introduction-main-heading">
          From Scan to Smile
          </h2>
          <p className="introduction-paragraph">
            Dentisol combines orthodontic expertise with advanced digital tools to deliver the most accurate treatment planning solutions in the industry.
            Our mission is simple: to empower dental professionals through precision, technology, and collaboration.
          </p>
          <Link to="/about" className="introduction-cta-button">
            Learn More About Us
            <FaArrowRight className="cta-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

