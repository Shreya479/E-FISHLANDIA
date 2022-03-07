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
            <img src="https://www.highdefwallpaper.com/wp-content/uploads/2016/09/animated-aquarium-fish.jpg" alt="first" class="d-block w-100" height={670} />
          </div>
          <div class="carousel-item">
            <img src="https://th.bing.com/th/id/R.43263042e8891078e68a08c0b743e39e?rik=ipuDfeiO6H6LVg&riu=http%3a%2f%2ffc01.deviantart.net%2ffs71%2ff%2f2011%2f129%2f7%2fa%2ffish_animation_thingy_by_tranet-d3fyw89.gif&ehk=yRyJIB%2bGOu1zuM5Rz%2bodHu20weSU%2bmws01EUT%2fyQQnk%3d&risl=&pid=ImgRaw&r=0" alt="first" class="d-block w-100" height={670} />
          </div>
          <div class="carousel-item">
            <img src="https://3.bp.blogspot.com/-PoytWsNjL1M/Uai_JsC6LJI/AAAAAAAACdg/xSJns4AS1DE/s1600/Animated%2BFish%2BWallpaper-778219.jpg" alt="first" class="d-block w-100" height={670} />
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