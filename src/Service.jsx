import carouselService1 from "./assets/carouselService1.jpg";
import carouselService2 from "./assets/carouselService2.jpg";
import carouselService3 from "./assets/carouselService3.jpg";
function Service() {
  return (
    <div id="Service" className="mt-5 mb-5 pt-5">
      <div className="container">
        <div
          className="carousel slide"
          data-bs-ride="carousel"
          id="carouselService"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="caroBg p-5">
                    <img src={carouselService1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <h3 style={{ color: "#2c3e50" }}>Sustainable Material</h3>
                  <p>
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit. Sanctus clita duo justo et tempor eirmod magna dolore
                    erat amet
                  </p>
                  <span className="carotitle"></span>
                  <h5 className="ms-5" style={{ color: "#2c3e50" }}>
                    Boris Johnson
                  </h5>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="caroBg p-5">
                    <img src={carouselService2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 style={{ color: "#2c3e50" }}>Budget Friendly</h3>
                  <p>
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit. Sanctus clita duo justo et tempor eirmod magna dolore
                    erat amet
                  </p>
                  <span className="carotitle"></span>
                  <h5 className=" ms-5" style={{ color: "#2c3e50" }}>
                    Bradley Gordon
                  </h5>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div className="row align-items-center ">
                <div className="col-lg-6 col-12 ">
                  <div className="caroBg p-5 ">
                    <img className="" src={carouselService3} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <h3 style={{ color: "#2c3e50" }}>Customer Satisfaction</h3>
                  <p>
                    Clita erat ipsum et lorem et sit, sed stet no labore lorem
                    sit. Sanctus clita duo justo et tempor eirmod magna dolore
                    erat amet
                  </p>
                  <span className="carotitle"></span>
                  <h5 className="ms-5" style={{ color: "#2c3e50" }}>
                    Alexander Bell
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-end ">
            <button
              className="me-2 btn-costum active"
              aria-hidden="true"
              typeof="button"
              data-bs-target="#carouselService"
                data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
               style={{ width: "20px", height: "20px" }}
            >
           
            </button>
            <button
              className="me-2 btn-costum"
              typeof="button"
              data-bs-target="#carouselService"
              data-bs-slide="next"
                    data-bs-slide-to="1"
              aria-label="Slide 2"
               style={{ width: "20px", height: "20px" }}
            >
            
            </button>
            <button
              className="me-2 btn-costum"
              typeof="button"
              data-bs-target="#carouselService"
              data-bs-slide="next"
                    data-bs-slide-to="2"
              aria-label="Slide 3"
               style={{ width: "20px", height: "20px" }}
            >
           
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Service;
