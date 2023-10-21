import React from 'react'
import icon5 from './images/icon5.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import image1 from './images/shubh.jpg'
import image2 from './images/abdullah.jpeg'
import image3 from './images/aniket.jpeg'
import image4 from './images/avneesh.jpeg'
import image5 from './images/daizy.jpeg'
import image6 from './images/shoaib.jpeg'
import image7 from './images/vaishnavi.jpeg'
import image8 from './images/shivam.jpeg'


const Home = () => {
  return (

    <div>
      <Navbar />
      <>
        <div className="about-section">
          <h1>About ESD</h1>
          <p>Welcome To Employable Skill development Program </p>
        </div>
        <section class="bg-light py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">Our Team</h2>
        <p class="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0 gx-xxl-5">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev mh-50" loading="lazy" src={image1} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Shubh P. Shukla</h4>
                <p class="text-secondary mb-0">Front end Developer Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev h-50" loading="lazy" src={image2} alt="abdullah image"/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Abdullah Afzal</h4>
                <p class="text-secondary mb-0">Front end Developer Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev" loading="lazy" src={image8} alt="shivam image"/>
              <figcaption class="m-0 p-4"> 
                <h4 class="mb-1">Shivam Tiwari</h4>
                <p class="text-secondary mb-0">Back end Developer <br/>Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev" loading="lazy" src={image5} alt="daizy image"/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Daisy Khan</h4>
                <p class="text-secondary mb-0">Back end Developer <br/>Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0 gx-xxl-5">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev" loading="lazy" src={image7} alt="vaishnavi image"/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Vaishnavi Mishra</h4>
                <p class="text-secondary mb-0">Tester <br/>Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev" loading="lazy" src={image6} alt="shoaib image"/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Shoaib Khan</h4>
                <p class="text-secondary mb-0">Tester<br/> Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev" loading="lazy" src= {image3} alt="aniket image"/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Aniket Kumar</h4>
                <p class="text-secondary mb-0">Database Administrator Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid image-home-dev" loading="lazy" src={image4} alt="avneesh image"/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Avneesh Kumar</h4>
                <p class="text-secondary mb-0">Database Administrator Trainee</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </>


      <footer className="text-center text-lg-start bg-dark text-muted">
        {/* Section: Links  */}

        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center text-white p-4 bg-dark">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#">
            {" "}
            ESD
          </a>
        </div>
        {/* Copyright */}
      </footer>

    </div>
  )
}

export default Home