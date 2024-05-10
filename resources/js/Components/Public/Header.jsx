const Header = () => {
  return (
    <div>
      {/* Custom Header Start */}
      <header className="header-section cmn-fixed py-lg-0 py-6">
        <div className="container">
          <div className="main-navbar">
            <nav className="navbar-custom">
              <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                <div className="d-flex align-items-center justify-content-between">
                  <a href="index-2.html" className="brand-logo">
                    <img
                      className="w-75"
                      src="assets/img/itsreezky/itsreezky-black.png"
                      alt="logo"
                    />
                  </a>
                  <div className="d-flex align-items-center gap-xxl-5 gap-5">
                    <a
                      href="javascript:void(0)"
                      className="search-trigger search-icon d-lg-none d-block"
                    >
                      <i className="fal fa-search" />
                    </a>
                    <button
                      className="navbar-toggle-btn d-block d-lg-none"
                      type="button"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
                <div className="navbar-toggle-item">
                  <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
                    <li className="menu-item position-relative">
                      <a href="/">
                      <button className="position-relative ps-5  white-clr fw_500 cus-z1">
                        Home
                      </button>
                      </a>
                    </li>
                    <li className="menu-item position-relative">
                      <button className="position-relative  ps-5 fw_500 white-clr cus-z1">
                        Pages
                      </button>
                      <ul className="sub-menu px-lg-4 py-xxl-3 py-2">
                        <li className="menu-link py-1">
                          <a href="https://server.itsreezky.my.id" className="fw_500 white-clr">
                            Private Server
                          </a>
                        </li>
                        <li className="menu-link py-1">
                          <a href="http://tools.itsreezky.my.id" className="fw_500 white-clr">
                            Tools Server
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item position-relative">
                        <a href="/portofolio">
                      <button className="position-relative  ps-5 fw_500 white-clr cus-z1">
                        Portofolio
                      </button>
                      </a>
                    </li>
                    <li className="menu-item position-relative">
                      <button className="position-relative  ps-5 fw_500 white-clr cus-z1">
                        Blog & News
                      </button>
                    </li>
                    <li className="menu-item position-relative">
                      <a href="/contact" className="fw_500">
                      <button className="position-relative  ps-5 fw_500 white-clr cus-z1">
                        Contact Us
                      </button>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-lg-flex d-none d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                  <div className="search-shopcart d-flex gap-xxl-9 gap-xl-5 gap-3">
                    <a
                      href="javascript:void(0)"
                      className="search-trigger search-icon"
                    >
                      <i className="fal fa-search" />
                    </a>
                  </div>
                  <a
                    href="/contact"
                    className="d-flex align-items-center gap-sm-3 gap-2 touch-btn cmn-btn"
                  >
                    <span className="rot60">
                      <i className="fas fa-arrow-up" />
                    </span>
                    Get In Touch
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Custom Header End */}
    </div>
  );
}

export default Header;
