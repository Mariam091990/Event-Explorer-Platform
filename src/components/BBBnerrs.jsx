import React from 'react';
import img1 from "../assets/images (1).jpeg"
import img2 from "../assets/images (3).jpeg"
import img3 from "../assets/images.jpeg"

const BBBnerrs = () => {
    return (
        <div>
            <div className="min-h-50 bg-base-200 flex items-center justify-center p-3 mt-3">
      <div className="w-full max-w-4xl">
        
        <div className="carousel w-full rounded-2xl shadow-xl">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div className="absolute left-6 top-6 bg-primary text-white px-4 py-2 rounded-lg z-10">
              <h2 className="text-lg font-bold">AI Innovation Summit</h2>
              <p className="text-sm opacity-90">Future of AI • Keynotes</p>
            </div>
            <img
              src={img1}
              className="w-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <div className="absolute left-6 top-6 bg-secondary text-white px-4 py-2 rounded-lg z-10">
              <h2 className="text-lg font-bold">React & Vite Workshop</h2>
              <p className="text-sm opacity-90">Hands-on coding • Live Q&A</p>
            </div>
            <img
              src={img2}
              alt="React Workshop"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <div className="absolute left-6 top-6 bg-accent text-white px-4 py-2 rounded-lg z-10">
              <h2 className="text-lg font-bold">Cybersecurity Expo 2025</h2>
              <p className="text-sm opacity-90">Stay secure • Latest trends</p>
            </div>
            <img
              src={img3}
              alt="Cybersecurity Event"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex w-full justify-center gap-2 py-4">
          <a href="#slide1" className="btn btn-xs">1</a>
          <a href="#slide2" className="btn btn-xs">2</a>
          <a href="#slide3" className="btn btn-xs">3</a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BBBnerrs;