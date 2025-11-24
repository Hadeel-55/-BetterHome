import header1 from "./assets/header1.jpg";
import header2 from "./assets/header2.jpg";
import header3 from "./assets/header3.jpg";
const Home = () => {
  return (
    <header id="Home">
      <div className="headerBg pb-5">
        <div className="container">
          <div className="row pt-5 ">
            <div className="col-lg-6 col-12 mt-5 pt-5  ">
              <h1 className="headerTitle1">
                We Make Your <span className="headerTitle1-1">Home</span> Better
              </h1>

              <div
                className="mt-5 headerDivText"
                style={{ border: "2px solid #ffff" }}
              >
                <p
                  className="d-flex align-items-center justify-content-center fs-5 mt-3"
                  style={{ fontFamily: "initial" }}
                >
                  An Award Winning Studio Since 1990
                </p>
              </div>
            </div>

            {/* <div className="col-lg-6 col-12 mt-5 pt-5  position-relative "
  
           >
              <div
                className="carouselBackground mt-5 d-flex justfy-content-center aligin-items-center "
                style={{
                  width: "470px",
                  height: "450px",
                  backgroundColor: "#2C3E50",
                  overflow:'hidden',
                
                }}
              >
                <div
                  id="headerCarousel"
                  className="carousel slide "
                  data-be-ride="carousel"
                >
                  <div
                    className="carousel-inner carouselSlide  "
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="carousel-item active">
                      <img
                        className="img-fluid carouselImg"
                        
                        src={header1}
                        alt=""
                      />
                    </div>

                    <div className="carousel-item ">
                      <img
                        className="img-fluid carouselImg"
                         
                        src={header2}
                        alt=""
                      />
                    </div>

                    <div className="carousel-item ">
                      <img
                        className="img-fluid carouselImg"
                        
                        src={header3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 col-12 mt-5 pt-4 ">
<div
  className="position-relative "
  style={{
    maxWidth: "300px",
    height: "400px",
    backgroundColor: "#2C3E50",
  }}
>
  <div
    className="position-absolute d-flex justify-content-center align-items-center"
    style={{
      top: "50%",
      left: "40%",
      transform: "translate(-50%, -50%)",
      width: "80%", // أو أي حجم مناسب
      maxWidth: "600px",
    }}
  >
    <div
      id="carouselExample"
      className="carousel slide w-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded overflow-hidden">
        <div className="carousel-item active">
          <img
            src={header1}
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={header2}
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>

         <div className="carousel-item">
          <img
            src={header3}
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
      </div>
    </div>
  </div>
</div>
            </div> */}
            
          </div>

          <div className="row align-items-center mt-5">
            <div className=" col-lg-3 col-12 col-sm-6 ">
              <div className="d-flex align-items-center mt-5">
                <div className="border border-2 p-2 ">
                  <i
                    className="fas fa-robot"
                    style={{ fontSize: "16px ", color: "#2C3E50" }}
                  ></i>
                </div>
                <span
                  className="text-dark ms-3 "
                  style={{ fontFamily: "initial", fontSize: "20px" }}
                >
                  Crafted Furniture
                </span>
              </div>
            </div>
            <div className=" col-lg-3 col-12 col-sm-6">
              <div className="d-flex align-items-center mt-5">
                <div className="border border-2 p-2 ">
                  <i
                    className="fas fa-robot"
                    style={{ fontSize: "16px ", color: "#2C3E50" }}
                  ></i>
                </div>
                <span
                  className="text-dark ms-3 "
                  style={{ fontFamily: "initial", fontSize: "20px" }}
                >
                  Sustainable Material
                </span>
              </div>
            </div>
            <div className=" col-lg-3 col-12 col-sm-6">
              <div className="d-flex align-items-center mt-5">
                <div className="border border-2 p-2 ">
                  <i
                    className="fas fa-robot"
                    style={{ fontSize: "16px ", color: "#2C3E50" }}
                  ></i>
                </div>
                <span
                  className="text-dark ms-3 "
                  style={{ fontFamily: "initial", fontSize: "20px" }}
                >
                  Innovative Architects
                </span>
              </div>
            </div>
            <div className=" col-lg-3 col-12 col-sm-6">
              <div className="d-flex align-items-center mt-5">
                <div className="border border-2 p-2 ">
                  <i
                    className="fas fa-robot"
                    style={{ fontSize: "16px ", color: "#2C3E50" }}
                  ></i>
                </div>
                <span
                  className="text-dark ms-3 "
                  style={{ fontFamily: "initial", fontSize: "20px" }}
                >
                  Budget Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Home;
