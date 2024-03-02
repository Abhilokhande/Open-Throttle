import React from 'react';

export default function Image1() {
  return (<>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <img src={process.env.PUBLIC_URL + '/bac.jpeg'} className="img-fluid" alt="..."></img>
  </div>
  </>
  );
}
