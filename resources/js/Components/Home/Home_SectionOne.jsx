import React from 'react'

const Home_SectionOne = () => {
  return (
    <div>
            {/* Product That Start */}
<section className="about-product about-section-version3 pb-20">
  <div className="container position-relative">
    <div className="row gy-lg-0 gy-7 justify-content-between">
      <div className="col-lg-6">
        <div className="about-version3-thumb w-100 h-full" data-aos="zoom-in-down" data-aos-duration={2000}>
          <img src="assets/img/itsreezky/itsreezky-moockup1.png" alt="img" className="w-100" />
          <span className="arrow-element">
            <img src="assets/img/itsreezky/itsreezky.png" alt="img" />
          </span>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-content-v3">
          <div className="pricing-title">
            <div className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
             <b className="text-pink-400">ABOUT REEZ.KY</b>
            </div>
            <h3 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" data-aos="fade-up" data-aos-duration={2000}>
              <b className="text-pink-400">Reez.ky is a server</b> leverages a
              <span className="regular">
              powerful tech stack comprising.
              </span>
            </h3>
<div data-aos="fade-in" data-aos-duration={2000}>
  <p className="text-lg text-white mb-6">
    Dynamic web application that embodies innovation and versatility. Leveraging a powerful tech stack using
    <b className="text-blue-400"> React.js</b>,
    <b className="text-red-500"> Laravel</b>,
    <b className="text-green-500"> Vite</b>,
    <b className="text-teal-500"> Tailwind CSS</b>,
    <b className="text-purple-500"> Bootstrap</b>, and
    <b className="text-blue-500"> Font Awesome</b>,
    this project delivers cutting-edge solutions across frontend, backend, and design components.
  </p>
  <p className="text-lg text-white mb-6">
    Our platform showcases a diverse range of features:
  </p><ul className="list-disc pl-6 mb-6">
    <li>Personal Portfolio: Explore my projects and achievements in one place.</li>
    <li>CV (Curriculum Vitae): Learn about my professional background and skills.</li>
    <li>Blog: Dive into insightful articles on technology, development, and more.</li>
    <li>Online Services: Experience seamless user interfaces and robust backend services.</li>
  </ul>
  <p />
  </div>

            <div className="global-counting mb-xxl-10 mb-xl-8 mb-6 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
              <div className="counting-item">
                <h6>
                  <span className="count">3</span>
                  <span>+</span>
                </h6>
                <span className="pra-clr">
                  years of experience
                </span>
              </div>
              <div className="counting-item">
                <h6>
                  <span className="count">100</span>
                  <span>+</span>
                </h6>
                <span className="pra-clr">
                  freelance projects
                </span>
              </div>
              <div className="counting-item">
                <h6>
                  <span className="count">3</span>
                  <span></span>
                </h6>
                <span className="pra-clr">
                  certificates and awards
                </span>
              </div>
            </div>
            <a href="/about" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
              Explore More
              <span className="rot60 d-inline-block">
                <i className="fas fa-arrow-up theme-clr" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Product That End */}
    </div>
  )
}

export default Home_SectionOne
