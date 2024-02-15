import React from 'react'
// import './Carousel.css';
export default function Video() {
  return (
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <video className="d-block w-100" autoPlay muted loop>
            <source src="%PUBLIC_URL%/video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
    {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div> */}
  </div>
</div>
  )
}
