import React from 'react'
const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.mos.cms.futurecdn.net/RY2EpSo74hvYXyAVpTN2Gg-1200-80.jpg" alt="first" class="d-block w-100" height={670} />
          </div>
          <div class="carousel-item">
            <img src="https://getwallpapers.com/wallpaper/full/e/e/d/646796.jpg" alt="first" class="d-block w-100" height={670} />
          </div>
          <div class="carousel-item">
            <img src="https://fishsubsidy.org/wp-content/uploads/2020/02/fish-tank.jpg" alt="first" class="d-block w-100" height={670} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Home