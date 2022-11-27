import React from "react";
import { Carrousel } from "../../components";

import about from "../../image/assets/icons/about.jpg";
import home1 from "../../image/assets/icons/home1.jpg";
import home2 from "../../image/assets/icons/home2.jpg";
import home3 from "../../image/assets/icons/home3.jpg";
import project1 from "../../image/assets/icons/project1.jpg";
import project2 from "../../image/assets/icons/project2.jpg";
import project3 from "../../image/assets/icons/project3.jpg";
import team1 from "../../image/assets/icons/team1.jpg";
import team2 from "../../image/assets/icons/team2.jpg";
import team3 from "../../image/assets/icons/team3.jpg";
import team4 from "../../image/assets/icons/team4.jpg";
import cancha1 from "../../image/assets/icons/Cancha1.jpg";
import cancha2 from "../../image/assets/icons/Cancha2.jpg";
import cancha3 from "../../image/assets/icons/Cancha3.jpg";

function LandingPage() {
  return (
    <div>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={home1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Your Dream House</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p>
                <a href="#" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home2} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Always Dedicated</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p>
                <a href="#" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home3} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>True Construction</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p>
                <a href="#" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div>
        <Carrousel />
      </div>
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src={about} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>
                  We Provide the Best Quality <br /> Services Ever
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam, labore reiciendis. Assumenda eos quod animi! Soluta
                  nesciunt inventore dolores excepturi provident, culpa beatae
                  tempora, explicabo corporis quibusdam corrupti. Autem,
                  quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum
                  dolor, ipsa perferendis porro doloribus obcaecati placeat
                  natus iste odio est non earum?
                </p>
                <a href="#" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-padding" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-laptop"></i>
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-journal"></i>
                  <h3 className="card-title">Sustainability</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-intersect"></i>
                  <h3 className="card-title">Integrity</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      src={cancha1}
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: 6}}
                    />
                  </div>
                  <h3 className="card-title">Building Make</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      src={cancha2}
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: 6}}
                    />
                  </div>
                  <h3 className="card-title">Building Make</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      src={cancha3}
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: 6}}
                    />
                  </div>
                  <h3 className="card-title">Building Make</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team section-padding" id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src={team1}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>

                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src={team2}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src={team3}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src={team4}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-padding">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className="bg-light p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Email"
                        required=""
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        required=""
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning btn-lg btn-block mt-3"
                    type="button"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
