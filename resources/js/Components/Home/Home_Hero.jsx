import React from 'react';

const Home_Hero = () => {
  return (
    <div>

      {/* Hero Section */}

      <section className="hero-section-version2 hero-section-version3 position-relative">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-8 col-md-7">
              <div className="hero-v3-content">
                <h1
                  className="mb-xxl-14 mb-xl-9 mb-lg-7 mb-md-5 mb-5 text-md-start text-center"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <span
                    className="designers1 d-flex justify-content-md-start justify-content-center align-items-center"
                    data-aos="zoom-in-left"
                    data-aos-duration={1400}
                    data-aos-delay={5}
                  >
                    Welcome to{' '}
                  </span>
                  <span
                    className="d-flex justify-content-md-start justify-content-center align-items-center gap-xxl-5 gap-3"
                    data-aos="zoom-in-left"
                    data-aos-duration={1600}
                  >
                    <span className="italic white-clr designers1">Reez.ky</span>
                    <span
                      className="designers italic"
                      data-text="Server"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      Server
                    </span>
                  </span>
                </h1>
                <div className="col-xxl-8 col-md-12">
                  <p
                    className="justify-content-between mb-xxl-8 mt-8 mb-xl-6 mb-lg-5 mb-md-5 mb-5"
                    data-aos="zoom-in"
                    data-aos-duration={1800}
                    data-aos-delay={10}
                  >
                    Discover my personal portfolio, CV, and blog, showcasing a blend of frontend
                    {' '}
                    interactivity, robust backend services, and stylish design components.
                    {' '}
                    {' '}
                  </p>
                </div>
                <div className="row p-2 gap-2">
                  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
                    <button className="btn btn-outline btn-secondary">
                      <b>Public <br /> Server</b>
                      <div className="badge text-green-400">
                        <i className="fa-regular fa-circle-check me-1" /> ACTIVE
                      </div>
                    </button>
                  </div>
                  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
                    <button className="btn btn-outline btn-secondary">
                      <b>Private <br /> Server</b>
                      <div className="badge text-green-400">
                        <i className="fa-regular fa-circle-check me-1" /> ACTIVE
                      </div>
                    </button>
                  </div>
                  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
                    <button className="btn btn-outline btn-secondary">
                      <b>Tools <br /> Server</b>
                      <div className="badge text-green-400">
                        <i className="fa-regular fa-circle-check me-1" /> ACTIVE
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="hero-v3-thumb d-md-block d-none">
                <div className="mockup-phone">
                  <div className="camera" />
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <iframe
                        src="http://itsreezky.my.id/"
                        width={350}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-md-start text-start d-md-flex d-grid align-items-center justify-content-md-between justify-content-center mt-xxl-5 mt-xl-15 mt-lg-10 mt-md-0 mt-0">
            <div className="about-sponsor">
              <div
                className="brand d-flex gap-2 align-items-start mb-xxl-8 mb-xl-7 mb-lg-5 mb-5"
                data-aos="zoom-in-up"
                data-aos-duration={1600}
                data-aos-delay={5}
              >
                <span className="designers1 mt-xxl-0 mt-0">
                  <i className="fa-solid fa-circle-info me-2" />Server builder
                </span>
                <span className="brand-border d-xxl-block d-none" />
              </div>
              <div
                className="ringle-content"
                data-aos="zoom-in-up"
                data-aos-duration={1800}
                data-aos-delay={7}
              >
                <ul>
                  <li>
                    -
                    {' '}
                    <b className="text-blue-300">
                      <i className="fab fa-react" /> React.js
                    </b>
                    {' '}
                    <span className="d-md-inline d-none">
                      for interactive frontend development.
                    </span>
                  </li>
                  <li>
                    -
                    {' '}
                    <b className="text-red-500">
                      <i className="fab fa-laravel" /> Laravel
                    </b>
                    {' '}
                    <span className="d-md-inline d-none">
                      for robust backend services.
                    </span>
                  </li>
                  <li>
                    -
                    {' '}
                    <b className="text-green-500">
                    <i className="fa-brands fa-vimeo-v"></i> Vite
                    </b>
                    {' '}
                    <span className="d-md-inline d-none">
                      for optimize the performance.
                    </span>
                  </li>
                  <li>
                    -
                    {' '}
                    <b className="text-teal-500">
                      <i className="fa-solid fa-wind" /> TailwindCSS
                    </b>
                    {' '}
                    <span className="d-md-inline d-none">
                      for stylish design components.
                    </span>
                  </li>
                  <li>
                    -
                    {' '}
                    <b className="text-purple-500">
                      <i className="fab fa-bootstrap" /> Bootstrap
                    </b>
                    {' '}
                    <span className="d-md-inline d-none">
                      for responsive and intuitive design.
                    </span>
                  </li>
                  <li>
                    -
                    {' '}
                    <b className="text-blue-500">
                      <i className="fab fa-font-awesome" /> Font Awesome{' '}
                    </b>
                    {' '}
                    <span className="d-md-inline d-none">
                      for stylish and scalable icons.
                    </span>
                  </li>
                </ul>
              </div>

            </div>
            <div
              className="sponsor-inner mt-5 align-items-center mb-xxl-10 mb-xl-7 mb-lg-6 mb-6 d-md-block d-none"
              data-aos="zoom-in-up"
              data-aos-duration={1700}
              data-aos-delay={6}
            >
              <div className="stats bg-inherit">

                <div className="stat">
                  <div className="stat-figure text-pink-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div className="stat-title">Total Likes</div>
                  <div className="stat-value text-pink-600">25.6K</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="stat-title">Page Views</div>
                  <div className="stat-value text-blue-600">2.6M</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <div className="w-16">
                      <img src="assets/img/itsreezky/itsreezky.png" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Element */}
        <img
          src="assets/img/element/cmn-dost.png"
          alt="img"
          className="hero-v2-element"
        />
        {/* Element */}
        {/* Social */}
        <div className="spilit-socail d-flex align-items-center gap-xxl-6 gap-xl-8 gap-5">
          <a href="https://github.com/itsreezky">
            <center>
              <i className="fa-brands fa-github" />
            </center>
            <span className="designers1 ms-3 d-md-block d-none">Github</span>
          </a>
          <a href="https://linkedin.com/itsreezky">
            <center>
              <i className="fa-brands fa-linkedin" />
            </center>
            <span className="designers1 ms-3 d-md-block d-none">Linkedin</span>
          </a>
          <a href="https://instagram.com/reezky.0x00">
            <center>
              <i className="fa-brands fa-instagram" />
            </center>
            <span className="designers1 ms-3 d-md-block d-none">Instagram</span>
          </a>
          <a href="https://x.com/itscoldhuman">
            <center>
              <i className="fa-brands fa-x" />
            </center>
            <span className="designers1 ms-3 d-md-block d-none">Twitter</span>
          </a>
          <a href="https://itsreezky.my,id">
            <center>
              <i className="fa-solid fa-globe" />
            </center>
            <span className="designers1 ms-3 d-md-block d-none">Website</span>
          </a>
        </div>
        {/* Social */}
      </section>

      {/* Hero Section */}

    </div>
  );
}

export default Home_Hero;
