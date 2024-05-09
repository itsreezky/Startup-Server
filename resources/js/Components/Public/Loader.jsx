import React from 'react'

const Loader = () => {
  return (
    <div>
          {/* Preloader Start */}
  <div id="preloader" className="preloader">
    <div className="animation-preloader">
      <div className="spinner">
      </div>
      <div className="txt-loading">
        <span data-text-preloader="R" className="letters-loading">
          R
        </span>
        <span data-text-preloader="e" className="letters-loading">
          e
        </span>
        <span data-text-preloader="e" className="letters-loading">
          e
        </span>
        <span data-text-preloader="z" className="letters-loading">
          z
        </span>
        <span data-text-preloader="." className="letters-loading">
          .
        </span>
        <span data-text-preloader="K" className="letters-loading">
          K
        </span>
        <span data-text-preloader="Y" className="letters-loading">
          Y
        </span>
      </div>
      <p className="text-center">Loading</p>
    </div>
    <div className="loader">
      <div className="row">
        <div className="col-3 loader-section section-left">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-left">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-right">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-right">
          <div className="bg" />
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Loader
