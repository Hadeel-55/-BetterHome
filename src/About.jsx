import about1 from "./assets/about1.jpg";
import about2 from "./assets/about2.jpg";
import proImg1 from "./assets/proImg1.jpg";
import proImg2 from "./assets/proImg2.jpg";
import proImg3 from "./assets/proImg3.jpg";
import proImg4 from "./assets/proImg4.jpg";
import proImg5 from "./assets/proImg5.jpg";
import proImg6 from "./assets/proImg6.jpg";
import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";
import service4 from "./assets/service4.jpg";
import team1 from "./assets/team1.jpg";
import team2 from "./assets/team2.jpg";
import team3 from "./assets/team3.jpg";
import team4 from "./assets/team4.jpg";


const About = () => {
  return (
    <div id="About">
      <div className="container pt-5 pb-5" style={{ fontFamily: "initial" }}>
        <div className="row mt-5">
          <div className="col-lg-3 col-6">
            <div>
              <img
                className="img-fluid aboutImg1"
                style={{}}
                src={about1}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-6 ">
            <div
              style={{ width: "100%", height: "100%" }}
              className=" position-relative"
            >
              <div
                className="aboutImg2 img-fluid"
                style={{
                  backgroundImage: `url(${about2})`,
                  width: "100%",
                  height: "100%",
                }}
              />

              <div className="aboutTitle2Bg ">
                <p className="mt-1" style={{ fontFamily: "initial" }}>
                  Award Winning Studio Since 1990
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12  ">
            <div className="">
              <strong
                style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                className="p-2 fs-1 fw-medium text-uppercase "
              >
                History
              </strong>
              <strong className="p-3 fs-1 fw-medium">of Our Creation </strong>
            </div>
            <p className="text-muted mt-5 " style={{ fontFamily: "initial" }}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>

            <p className="text-muted mt-4 " style={{ fontFamily: "initial" }}>
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>

            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check fs-1" style={{ color: "#2c3e50" }}>
                    {" "}
                  </i>
                  <span
                    className=""
                    style={{ fontFamily: "initial", fontSize: "15px" }}
                  >
                    Award Winning
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check fs-1" style={{ color: "#2c3e50" }}>
                    {" "}
                  </i>
                  <span
                    className=""
                    style={{ fontFamily: "initial", fontSize: "15px" }}
                  >
                    24/7 Support
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check fs-1" style={{ color: "#2c3e50" }}>
                    {" "}
                  </i>
                  <span
                    className=""
                    style={{ fontFamily: "initial", fontSize: "15px" }}
                  >
                    Professional Staff
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check fs-1" style={{ color: "#2c3e50" }}>
                    {" "}
                  </i>
                  <span
                    className=""
                    style={{ fontFamily: "initial", fontSize: "15px" }}
                  >
                    Fair Prices
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-4 ">
              <div className="col-lg-8 col-12 ">
                <div className="d-flex gap-3">
                  <button
                    style={{
                      backgroundColor: "#2c3e50",
                      fontFamily: "initial",
                    }}
                    className="border-0"
                  >
                    <a href="" className="text-decoration-none text-white p-4">
                      Read More
                    </a>
                  </button>
                  <div
                    className="text-center iconAbout"
                    style={{
                      borderColor: "#2c3e50",
                      border: "2px solid #2c3e50",
                      padding: "5px",
                      width: "30px",
                    }}
                  >
                    <a href="" className="text-decoration-none">
                      {" "}
                      <i className="bi bi-facebook iconColor "></i>
                    </a>
                  </div>
                  <div
                    className="text-center iconAbout"
                    style={{
                      borderColor: "#2c3e50",
                      border: "2px solid #2c3e50",
                      padding: "5px",
                      width: "30px",
                    }}
                  >
                    <a href="" className="text-decoration-none">
                      <i className="bi bi-twitter iconColor"></i>
                    </a>
                  </div>

                  <div
                    className="text-center iconAbout"
                    style={{
                      borderColor: "#2c3e50",
                      border: "2px solid #2c3e50",
                      padding: "5px",
                      width: "30px",
                    }}
                  >
                    <a href="" className="text-decoration-none">
                      <i className="bi bi-instagram iconColor"></i>
                    </a>
                  </div>
                  <div
                    className="text-center iconAbout"
                    style={{
                      borderColor: "#2c3e50",
                      border: "2px solid #2c3e50",
                      padding: "5px",
                      width: "30px",
                    }}
                  >
                    <a href="" className="text-decoration-none">
                      {" "}
                      <i className="bi bi-linkedin iconColor"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5 mt-5 ">
          <div className="pt-5 pb-5 d-flex justify-content-center align-items-center">
            <strong className="p-3 fs-1 fw-medium">Why People</strong>{" "}
            <strong
              style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
              className="p-2 fs-1 fw-medium text-uppercase"
            >
              Choose Us
            </strong>
          </div>
        </div>
        <div className="row gy-5 gx-5 pt-5">
          <div className="col-lg-4 col-12 col-sm-6 ">
            <div className="text-center">
              <i
                className="fa fa-calendar-alt fa-5x mb-4"
                style={{ color: "#2c3e50" }}
              ></i>
              <p className="fw-medium fs-5 ">25+ Years Experience</p>
              <p className="text-muted p-4 pt-0">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-sm-6">
            <div className="text-center ">
              <i
                className="fa fa-tasks fa-5x mb-4"
                style={{ color: "#2c3e50" }}
              ></i>
              <p className="fw-medium fs-5 ">Best Interior Design</p>
              <p className="text-muted p-4 pt-0">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-sm-6">
            <div className="text-center ">
              <i
                className="fa fa-pencil-ruler fa-5x  mb-4"
                style={{ color: "#2c3e50" }}
              ></i>
              <p className="fw-medium fs-5 ">Innovative Architects</p>
              <p className="text-muted p-4 pt-0">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-sm-6">
            <div className="text-center ">
              <i
                className="fa fa-user fa-5x  mb-4"
                style={{ color: "#2c3e50" }}
              ></i>
              <p className="fw-medium fs-5 ">Customer Satisfaction</p>
              <p className="text-muted p-4 pt-0">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-sm-6">
            <div className="text-center ">
              <i
                className="fa fa-hand-holding-usd fa-5x mb-4"
                style={{ color: "#2c3e50" }}
              ></i>
              <p className="fw-medium fs-5 ">Budget Friendly</p>
              <p className="text-muted p-4 pt-0">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-sm-6">
            <div className="text-center ">
              <i
                className="fa fa-check fa-5x mb-4"
                style={{ color: "#2c3e50" }}
              ></i>
              <p className="fw-medium fs-5 ">Sustainable Material</p>
              <p className="text-muted p-4 pt-0">
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-0">
          <div className="col-lg-5 col-12 ">
            <div
              style={{ backgroundColor: "#2c3e50" }}
              className="h-100  text-center "
            >
              <div className="d-flex ms-5 align-items-center h-50">
                <strong className="pe-3 fs-1 fw-medium text-white ">
                  Our Latest{" "}
                </strong>{" "}
                <strong
                  style={{
                    backgroundColor: "#ecf0f1",
                    color: "#2c3e50",
                  }}
                  className="p-2 fs-2 fw-medium text-uppercase"
                >
                  Projects
                </strong>
              </div>
              <div className="text-white pb-5 me-4 pe-5">
                <strong className="" style={{ fontSize: "80px" }}>
                  6
                </strong>
                <span className="fs-3 me-5"> of our latest projects</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 col-sm-12 ">
            <div className="row g-0">
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className="projectsImg img-fluid position-relative  overflow-hidden"
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={proImg1}
                    alt="project"
                    className="w-100 h-100 position-absolute imgZoom"
                    style={{
                      filter: "brightness(0.8)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" ms-2 position-absolute"
                    style={{
                      top: "67%",
                      zIndex: 2,
                    }}
                  >
                    <p className="text-white fs-4 mb-0 ">Kitchen</p>
                    <span className="text-white">72 Projects</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className="projectsImg img-fluid position-relative  overflow-hidden"
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={proImg2}
                    alt="project"
                    className="w-100 h-100 position-absolute imgZoom"
                    style={{
                      filter: "brightness(0.8)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" ms-2 position-absolute"
                    style={{
                      top: "67%",
                      zIndex: 2,
                    }}
                  >
                    <p className="text-white fs-4 mb-0 ">Bathroom</p>
                    <span className="text-white">67 Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className="projectsImg img-fluid position-relative  overflow-hidden"
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={proImg3}
                    alt="project"
                    className="w-100 h-100 position-absolute imgZoom"
                    style={{
                      filter: "brightness(0.8)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" ms-2 position-absolute"
                    style={{
                      top: "67%",
                      zIndex: 2,
                    }}
                  >
                    <p className="text-white fs-4 mb-0 ">Bedroom</p>
                    <span className="text-white">53 Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className="projectsImg img-fluid position-relative  overflow-hidden"
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={proImg4}
                    alt="project"
                    className="w-100 h-100 position-absolute imgZoom"
                    style={{
                      filter: "brightness(0.8)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" ms-2 position-absolute"
                    style={{
                      top: "67%",
                      zIndex: 2,
                    }}
                  >
                    <p className="text-white fs-4 mb-0 ">Living Room</p>
                    <span className="text-white">33 Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className="projectsImg img-fluid position-relative  overflow-hidden"
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={proImg5}
                    alt="project"
                    className="w-100 h-100 position-absolute imgZoom"
                    style={{
                      filter: "brightness(0.8)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" ms-2 position-absolute"
                    style={{
                      top: "67%",
                      zIndex: 2,
                    }}
                  >
                    <p className="text-white fs-4 mb-0 ">Furniture</p>
                    <span className="text-white">87 Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className="projectsImg img-fluid position-relative  overflow-hidden"
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={proImg6}
                    alt="project"
                    className="w-100 h-100 position-absolute imgZoom"
                    style={{
                      filter: "brightness(0.8)",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" ms-2 position-absolute"
                    style={{
                      top: "67%",
                      zIndex: 2,
                    }}
                  >
                    <p className="text-white fs-4 mb-0 ">Rennovvation</p>
                    <span className="text-white">69 Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5 align-items-center">
          <div className="col-lg-5 col-12 ">
            <div>
              <div className="d-flex mb-5 align-items-center">
                <strong className="pe-3 fs-1 fw-medium ">Our Latest </strong>{" "}
                <strong
                  style={{
                    backgroundColor: "#ecf0f1",
                    color: "#2c3e50",
                  }}
                  className="p-2 fs-2 fw-medium text-uppercase"
                >
                  Projects
                </strong>
              </div>
              <p className="text-muted" style={{ fontSize: "18px" }}>
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor eirmod magna dolore erat amet
              </p>

              <p className="text-muted">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>

              <div
                className="d-flex mt-5"
                style={{ backgroundColor: "#ecf0f1" }}
              >
                <div
                  className=" me-4 p-4 d-flex align-items-center"
                  style={{ backgroundColor: "#2c3e50" }}
                >
                  <i className="fas fa-phone fs-1 text-white"></i>
                </div>
                <div>
                  <p className="mb-0 fs-2 mt-1 ">+01234567890</p>
                  <p className="text-muted ">
                    Call us direct 24/7 for get a free consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12 mt-5">
            <div className="row g-0 justify-content-center ">
              <div className="col-lg-6 col-sm-12 col-md-9" style={{}}>
                <div className="serviceBox1" style={{ height: "350px" }}>
                  <div className="serviceBox">
                    <div
                      className="pt-5 ps-4 pe-4"
                      style={{ position: "relative" }}
                    >
                      <img
                        className=""
                        src={service1}
                        alt=""
                        style={{
                          width: "100%",
                          height: "140px",
                          overflow: "hidden",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="title1" style={{}}>
                      Interior Design
                    </div>

                    <p className="description ps-4 pe-4">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-9 ">
                <div className="serviceBox2" style={{ height: "350px" }}>
                  <div className="serviceBox ">
                    <div
                      className="pt-5 ps-4 pe-4"
                      style={{ position: "relative" }}
                    >
                      <img
                        className=""
                        src={service2}
                        alt=""
                        style={{
                          width: "100%",
                          height: "140px",
                          overflow: "hidden",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="content ">
                      <div className="title2" style={{}}>
                        Imlement
                      </div>
                      <p className="description ps-4 pe-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-9">
                <div className="serviceBox3" style={{ height: "350px" }}>
                  <div className="serviceBox">
                    <div
                      className="pt-5 ps-4 pe-4"
                      style={{ position: "relative" }}
                    >
                      <img
                        className=""
                        src={service3}
                        alt=""
                        style={{
                          width: "100%",
                          height: "140px",
                          overflow: "hidden",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="content ">
                      <div className="title3" style={{}}>
                        Renovation
                      </div>
                      <p className="description  ps-4 pe-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-9">
                <div className="serviceBox4" style={{ height: "350px" }}>
                  <div className="serviceBox">
                    <div
                      className="pt-5 ps-4 pe-4"
                      style={{ position: "relative" }}
                    >
                      <img
                        className=""
                        src={service4}
                        alt=""
                        style={{
                          width: "100%",
                          height: "140px",
                          overflow: "hidden",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="content ">
                      <div className="title4" style={{}}>
                        Commercial
                      </div>
                      <p className="description ps-4 pe-4 ">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* team */}
      </div>
      <div className="pb-5"
        style={{ backgroundColor: "#ecf0f1 ", width: "100%", height: "100%" }}
      >
        <div className="container">
          <div className="pt-5">
            <span className="fs-1 text-capitalize fw-medium" style={{}}>
              Our Professional
            </span>{" "}
            <span
              className="fs-1 text-capitalize fw-medium "
              style={{ color: "#2c3e50" }}
            >
              Designers
            </span>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-12 mt-3">
              <div
                className="position-relative zoomContainer"
                style={{ height: "auto" }}
              >
                <img
                  className="teamImg"
                  src={team1}
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />

                <div
                  className="position-absolute top-0 start-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top ,rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="position-absolute "
                  style={{
                    bottom: "0",
                    left: "0",
                    zIndex: 2,
                    padding: "0 15px 15px 15px",
                  }}
                >
                  <div
                    className=" text-white ps-3 pe-3"
                    style={{ backgroundColor: " #2c3e50", width: "100px" }}
                  >
                    Architect
                  </div>

                  <p className="text-white fw-semibold fs-2 mb-2">
                    Boris Johnson
                  </p>

                  <div className="d-flex gap-2">
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-facebook iconColor "></i>
                      </a>
                    </div>

                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-twitter iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-instagram iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-linkedin iconColor"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mt-3">
              <div
                className="position-relative zoomContainer"
                style={{ height: "auto" }}
              >
                <img
                  className="teamImg"
                  src={team2}
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />

                <div
                  className="position-absolute top-0 start-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top ,rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="position-absolute "
                  style={{
                    bottom: "0",
                    left: "0",
                    zIndex: 2,
                    padding: "0 15px 15px 15px",
                  }}
                >
                  <div
                    className=" text-white ps-3 pe-3"
                    style={{ backgroundColor: " #2c3e50", width: "100px" }}
                  >
                    Architect
                  </div>

                  <p className="text-white fw-semibold fs-2 mb-2">
                    Donald Pakura
                  </p>

                  <div className="d-flex gap-2">
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-facebook iconColor "></i>
                      </a>
                    </div>

                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-twitter iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-instagram iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-linkedin iconColor"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mt-3">
              <div
                className="position-relative zoomContainer"
                style={{ height: "auto" }}
              >
                <img
                  className="teamImg"
                  src={team3}
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />

                <div
                  className="position-absolute top-0 start-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top ,rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="position-absolute "
                  style={{
                    bottom: "0",
                    left: "0",
                    zIndex: 2,
                    padding: "0 15px 15px 15px",
                  }}
                >
                  <div
                    className=" text-white ps-3 pe-3"
                    style={{ backgroundColor: " #2c3e50", width: "100px" }}
                  >
                    Architect
                  </div>

                  <p className="text-white fw-semibold fs-2 mb-2">
                    Bradley Gordon
                  </p>

                  <div className="d-flex gap-2">
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-facebook iconColor "></i>
                      </a>
                    </div>

                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-twitter iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-instagram iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-linkedin iconColor"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mt-3">
              <div
                className="position-relative zoomContainer"
                style={{ height: "auto" }}
              >
                <img
                  className="teamImg"
                  src={team4}
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />

                <div
                  className="position-absolute top-0 start-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top ,rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="position-absolute "
                  style={{
                    bottom: "0",
                    left: "0",
                    zIndex: 2,
                    padding: "0 15px 15px 15px",
                  }}
                >
                  <div
                    className=" text-white ps-3 pe-3"
                    style={{ backgroundColor: " #2c3e50", width: "100px" }}
                  >
                    Architect
                  </div>

                  <p className="text-white fw-semibold fs-2 mb-2">
                    Alexander Bell
                  </p>

                  <div className="d-flex gap-2">
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-facebook iconColor "></i>
                      </a>
                    </div>

                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-twitter iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-instagram iconColor"></i>
                      </a>
                    </div>
                    <div
                      className="text-center iconAbout"
                      style={{
                        borderColor: "#2c3e50",
                        border: "2px solid #2c3e50",
                        padding: "5px",
                        width: "30px",
                      }}
                    >
                      <a href="" className="text-decoration-none">
                        <i className="bi bi-linkedin iconColor"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* carousel */}
 
    </div>
  );
};
export default About;
