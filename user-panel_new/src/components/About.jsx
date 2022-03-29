import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio perspiciatis doloribus aliquam, sed atque! Vitae aperiam, fugit possimus, repellat reiciendis consequuntur aliquam sunt nam quibusdam quas maiores ea id! Sunt a adipisci dicta perferendis laudantium autem hic iusto dolorem. Ut explicabo laudantium repudiandae culpa. Molestiae harum commodi culpa explicabo! Distinctio minima iusto error impedit consequuntur harum amet hic, necessitatibus nisi reprehenderit possimus nobis unde! Unde porro voluptate placeat ipsum aut beatae, facilis, sed rerum ea praesentium omnis dolore cum, cumque sequi. Quaerat in quos id accusantium perferendis vitae magni ex quae debitis. Blanditiis quibusdam quasi, architecto aperiam consequatur sapiente?</p>
            <Link to='/contact' className='btn btn-outline-primary px-3'>Contact us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/image/about.jpg" height='400' width='400' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About