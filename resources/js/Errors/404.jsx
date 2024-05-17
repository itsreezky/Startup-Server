import React from 'react';

const NotFound = () => {
  return (
    <div>
      <section className="breadcrumnd-banner blog-grid pt-space pb-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-content text-center">
                <div
                  className="thumb mb-xxl-15 mb-xl-10 mb-lg-8 mb-md-6 mb-5 w-100"
                  data-aos="zoom-in"
                  data-aos-duration={1400}
                >
                  <img src="assets/img/error/opps.png" alt="img" className="w-100" />
                </div>
                <h2 className="white-clr mb-xxl-7 mb-xl-6 mb-5">
                  <span className="theme-clr">Oops!</span> Page not found
                </h2>
                <p className="white-clr mb-xxl-12 mb-xl-9 mb-lg-8 mb-5">The page you are looking for does not exist</p>
                <a href="/" className="cmn-btn themebg py-xxl-4 py-3 px-xxl-6 px-5 text-whitess">
                  Back To Home Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
