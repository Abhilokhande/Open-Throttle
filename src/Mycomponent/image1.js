import React from 'react';

export default function Image1() {
  return (<>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <img src={process.env.PUBLIC_URL + '/bike3.jpg'} class="img-fluid" alt="..."></img>
  </div>
  </>
  );
}
