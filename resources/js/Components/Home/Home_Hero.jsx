import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPublicServerData, fetchPrivateServerData, fetchToolsServerData } from '../../Api/ServerStatus';

const Home_Hero = () => {
    const [apiData1, setApiData1] = useState(null);
    const [apiData2, setApiData2] = useState(null);
    const [apiData3, setApiData3] = useState(null);
    const [setError] = useState(null);

    useEffect(() => {
      fetchPublicServerData()
        .then(response => {
          setApiData1(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setError(error);
        });

      fetchPrivateServerData()
        .then(response => {
          setApiData2(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setError(error);
        });

      fetchToolsServerData()
        .then(response => {
          setApiData3(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setError(error);
        });
    }, []);

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
      {apiData1 && apiData1.success === true ? (
        <div className="badge text-green-400">
          <i className="fa-regular fa-circle-check me-1" /> ACTIVE
        </div>
      ) : (
        <div className="badge text-red-400">
          <i className="fa-regular fa-circle-x me-1" /> INACTIVE
        </div>
      )}
    </button>
  </div>
  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
    <button className="btn btn-outline btn-secondary">
      <b>Private <br /> Server</b>
      {apiData2 && apiData2.success === true ? (
        <div className="badge text-green-400">
          <i className="fa-regular fa-circle-check me-1" /> ACTIVE
        </div>
      ) : (
        <div className="badge text-red-400">
          <i className="fa-regular fa-circle-x me-1" /> INACTIVE
        </div>
      )}
    </button>
  </div>
  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
    <button className="btn btn-outline btn-secondary">
      <b>Tools <br /> Server</b>
      {apiData3 && apiData3.success === true ? (
        <div className="badge text-green-400">
          <i className="fa-regular fa-circle-check me-1" /> ACTIVE
        </div>
      ) : (
        <div className="badge text-red-400">
          <i className="fa-regular fa-circle-x me-1" /> INACTIVE
        </div>
      )}
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
                        className="ms-2"
                        src="http://127.0.0.1:8000/"
                        width={320}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-md-start text-start d-md-flex d-grid align-items-center justify-content-md-between justify-content-center mt-xxl-3 mt-xl-12 mt-lg-10 mt-md-0 mt-0">
            <div className="about-sponsor">
              <div
                className="brand d-flex gap-2 align-items-start mb-xxl-1 mb-xl-5 mb-lg-3 mb-3"
                data-aos="zoom-in-up"
                data-aos-duration={1600}
                data-aos-delay={5}
              >
                <span className="designers1 mt-xxl-0 mt-0 mb-2">
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
                      <i className="fa-brands fa-vimeo-v" /> Vite
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
                    <b className="text-yellow-400">
                      <i className="fa-brands fa-uikit" /> DaisyUI
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
                    <i className="fa-solid fa-magnifying-glass fa-xl" />
                  </div>
                  <div className="stat-title">Page Searched</div>
                  <div className="stat-value text-pink-600">624</div>
                  <div className="stat-desc">14% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-blue-500">
                    <i className="fa-regular fa-eye fa-xl" />
                  </div>
                  <div className="stat-title">Page Views</div>
                  <div className="stat-value text-blue-600">1.2K</div>
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
              <i className="fa-brands fa-twitter" />
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
};

export default Home_Hero;
