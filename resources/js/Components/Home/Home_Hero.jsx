import React from 'react'; // Import the react library
import { useEffect, useState } from 'react'; // Import the useEffect and useState hooks
import { fetchPublicServerData, fetchPrivateServerData, fetchToolsServerData } from '../../Api/ServerStatus'; // Import the fetchPublicServerData, fetchPrivateServerData, and fetchToolsServerData functions
import { AddVisitor, CountVisitor } from '../../Api/VisitorData'; // Import the AddVisitor and CountVisitor functions
import { getGreeting } from '../../Api/Greetings'; // Import the getGreeting function

const Home_Hero = () => {
  // Create state variables
  const [apiDataPublic, setApiDataPublic] = useState(null); // Create a state variable called apiDataPublic and a function called setApiDataPublic to update the state variable
  const [apiDataPrivate, setApiDataPrivate] = useState(null); // Create a state variable called apiDataPrivate and a function called setApiDataPrivate to update the state variable
  const [apiDataTools, setApiDataTools] = useState(null); // Create a state variable called apiDataTools and a function called setApiDataTools to update the state variable
  const [visitorCount, setVisitorCount] = useState(null); // Create a state variable called visitorCount and a function called setVisitorCount to update the state variable
  const [greeting, setGreeting] = useState(''); // Create a state variable called greeting and a function called setGreeting to update the state variable

  const [setError] = useState(null); // Create a state variable called setError and a function called setError to update the state variable

  // Use the useEffect hook to run code when the component mounts
  useEffect(() => {
    // Fetch Status Public Server
    fetchPublicServerData()
      .then((response) => {
        setApiDataPublic(response.data);
      })
      // If there is an error fetching the data, log the error
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      });

    // Fetch Status Private Server
    fetchPrivateServerData()
      .then((response) => {
        setApiDataPrivate(response.data);
      })
      // If there is an error fetching the data, log the error
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      });

    // Fetch Status Tools Server
    fetchToolsServerData()
      .then((response) => {
        setApiDataTools(response.data);
      })
      // If there is an error fetching the data, log the error
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      });

    // Call AddVisitor when the component mounts
    AddVisitor()
      .then(() => {
        console.log('Visitor added successfully!');
        // After the visitor has been added, get the visitor count
        CountVisitor()
          .then((response) => {
            setVisitorCount(response.data.visitor);
          })
          .catch((error) => {
            console.error('Error fetching visitor count: ', error);
          });
      })
      // If there is an error adding the visitor, log the error
      .catch((error) => {
        console.error('Error adding visitor: ', error);
      });

    // Set the greeting state variable to the result of the getGreeting function
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 1000);
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
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
                    {greeting}
                    <br />
                    Welcome to{' '}
                  </span>
                  <span
                    className="d-flex justify-content-md-start justify-content-center align-items-center gap-xxl-5 gap-3"
                    data-aos="zoom-in-left"
                    data-aos-duration={1600}
                  >
                    <span className="italic white-clr designers1">Reez.ky</span>
                    <span className="designers italic" data-text="Server" data-aos="zoom-in" data-aos-duration="2000">
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
                    Discover my personal portfolio, CV, and blog, showcasing a blend of frontend interactivity, robust
                    backend services, and stylish design components.{' '}
                  </p>
                </div>
                <div className="row p-2 gap-2">
                  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
                    <button
                      className="btn btn-outline btn-secondary"
                      onClick={() => document.getElementById('public_server').showModal()}
                    >
                      <b>
                        Public <br /> Server
                      </b>
                      {apiDataPublic && apiDataPublic.success === true ? (
                        <div className="badge text-green-400">
                          <i className="fa-regular fa-circle-check me-1" /> ACTIVE
                        </div>
                      ) : (
                        <div className="badge text-red-400">
                          <i className="fa-regular fa-circle-x me-1" /> INACTIVE
                        </div>
                      )}
                    </button>
                    {/* Public Server Modal */}
                    <dialog id="public_server" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-pink-400">
                          <i className="fa-solid fa-circle-info me-3"></i>Information
                        </h3>
                        {apiDataPublic && (
                          <div>
                            <p className="mt-3 mb-2">
                              <strong className="text-pink-400">Website :</strong>
                              <br /> {apiDataPublic.website}
                            </p>
                            <p className="mb-2">
                              <strong className="text-pink-400">Response Status :</strong>
                              <br /> {apiDataPublic.response}
                            </p>
                            <p className="mb-2">
                              <strong className="text-pink-400">Response Date :</strong>
                              <br /> {apiDataPublic.date}
                            </p>
                          </div>
                        )}
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-outline btn-secondary">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
                    <button
                      className="btn btn-outline btn-secondary"
                      onClick={() => document.getElementById('private_server').showModal()}
                    >
                      <b>
                        Private <br /> Server
                      </b>
                      {apiDataPrivate && apiDataPrivate.success === true ? (
                        <div className="badge text-green-400">
                          <i className="fa-regular fa-circle-check me-1" /> ACTIVE
                        </div>
                      ) : (
                        <div className="badge text-red-400">
                          <i className="fa-regular fa-circle-x me-1" /> INACTIVE
                        </div>
                      )}
                    </button>
                    {/* Private Server Modal */}
                    <dialog id="private_server" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-pink-400">
                          <i className="fa-solid fa-circle-info me-3"></i>Information
                        </h3>
                        {apiDataPrivate && (
                          <div>
                            <p className="mt-3 mb-2">
                              <strong className="text-pink-400">Website :</strong>
                              <br /> {apiDataPrivate.website}
                            </p>
                            <p className="mb-2">
                              <strong className="text-pink-400">Response Status :</strong>
                              <br /> {apiDataPrivate.response}
                            </p>
                            <p className="mb-2">
                              <strong className="text-pink-400">Response Date :</strong>
                              <br /> {apiDataPrivate.date}
                            </p>
                          </div>
                        )}
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-outline btn-secondary">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                  <div className="col-xxl-2 col-md-4 mb-3 ms-10">
                    <button
                      className="btn btn-outline btn-secondary"
                      onClick={() => document.getElementById('tools_server').showModal()}
                    >
                      <b>
                        Tools <br /> Server
                      </b>
                      {apiDataTools && apiDataTools.success === true ? (
                        <div className="badge text-green-400">
                          <i className="fa-regular fa-circle-check me-1" /> ACTIVE
                        </div>
                      ) : (
                        <div className="badge text-red-400">
                          <i className="fa-regular fa-circle-x me-1" /> INACTIVE
                        </div>
                      )}
                    </button>
                    {/* Tools Server Modal */}
                    <dialog id="tools_server" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-pink-400">
                          <i className="fa-solid fa-circle-info me-3"></i>Information
                        </h3>
                        {apiDataTools && (
                          <div>
                            <p className="mt-3 mb-2">
                              <strong className="text-pink-400">Website :</strong>
                              <br /> {apiDataTools.website}
                            </p>
                            <p className="mb-2">
                              <strong className="text-pink-400">Response Status :</strong>
                              <br /> {apiDataTools.response}
                            </p>
                            <p className="mb-2">
                              <strong className="text-pink-400">Response Date :</strong>
                              <br /> {apiDataTools.date}
                            </p>
                          </div>
                        )}
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-outline btn-secondary">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
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
                      <iframe className="ms-2 mt-5" src="http://itsreezky.my.id" width={320} height={650} />
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
                  <i className="fa-solid fa-circle-info me-2" />
                  Server builder
                </span>
                <span className="brand-border d-xxl-block d-none" />
              </div>
              <div className="ringle-content" data-aos="zoom-in-up" data-aos-duration={1800} data-aos-delay={7}>
                <ul>
                  <li>
                    -{' '}
                    <b className="text-blue-300">
                      <i className="fab fa-react" /> React.js
                    </b>{' '}
                    <span className="d-md-inline d-none">for interactive frontend development.</span>
                  </li>
                  <li>
                    -{' '}
                    <b className="text-red-500">
                      <i className="fab fa-laravel" /> Laravel
                    </b>{' '}
                    <span className="d-md-inline d-none">for robust backend services.</span>
                  </li>
                  <li>
                    -{' '}
                    <b className="text-green-500">
                      <i className="fa-brands fa-vimeo-v" /> Vite
                    </b>{' '}
                    <span className="d-md-inline d-none">for optimize the performance.</span>
                  </li>
                  <li>
                    -{' '}
                    <b className="text-teal-500">
                      <i className="fa-solid fa-wind" /> TailwindCSS
                    </b>{' '}
                    <span className="d-md-inline d-none">for stylish design components.</span>
                  </li>
                  <li>
                    -{' '}
                    <b className="text-yellow-400">
                      <i className="fa-brands fa-uikit" /> DaisyUI
                    </b>{' '}
                    <span className="d-md-inline d-none">for stylish design components.</span>
                  </li>
                  <li>
                    -{' '}
                    <b className="text-purple-500">
                      <i className="fab fa-bootstrap" /> Bootstrap
                    </b>{' '}
                    <span className="d-md-inline d-none">for responsive and intuitive design.</span>
                  </li>
                  <li>
                    -{' '}
                    <b className="text-blue-500">
                      <i className="fab fa-font-awesome" /> Font Awesome{' '}
                    </b>{' '}
                    <span className="d-md-inline d-none">for stylish and scalable icons.</span>
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
                    <i className="fa-regular fa-eye fa-xl" />
                  </div>
                  <div className="stat-title">Visitor Today</div>
                  <div className="stat-value text-pink-600">{visitorCount && visitorCount.hari}</div>
                  <div className="stat-desc">Daily visitors will be reset every day</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-blue-500">
                    <i class="fa-solid fa-chart-line fa-xl"></i>
                  </div>
                  <div className="stat-title">Visitor Total</div>
                  <div className="stat-value text-blue-600">{visitorCount && visitorCount.total}</div>
                  <div className="stat-desc">Total visitors from the start of the server</div>
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
        <img src="assets/img/element/cmn-dost.png" alt="img" className="hero-v2-element" />
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
