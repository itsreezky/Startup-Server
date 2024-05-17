import React from 'react';

const Portofolio_Breadcrumnd = () => {
  return (
    <section className="breadcrumnd-banner position-relative">
      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h1 className="stitle designers1 mb-xxl-10 mb-xl-8 mb-6" data-aos="zoom-in-left" data-aos-duration={1800}>
                Reezky's Portofolio
              </h1>
              <ul className="d-inline-flex align-items-center gap-2 pra-border radius100 py-xxl-3 py-2 px-xxl-4 px-4">
                <li>
                  <a href="/">
                    <span className="inline-flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      Home <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <span className="inline-flex gap-2 items-center text-pink-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    Portofolio
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Element*/}
      <img src="assets/img/element/cmn-dost.png" alt="img" className="cmn-dots" />
      <div className="cmn-svg-shape cmn-svg cmn-dots">
        <img src="assets/img/element/cmn-dost.png" alt="img" />
      </div>
    </section>
  );
};

export default Portofolio_Breadcrumnd;
