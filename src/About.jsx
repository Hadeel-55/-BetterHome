import about1 from "./assets/about1.jpg";
import about2 from "./assets/about2.jpg";

const About = () => {
  return (
    <div id="About">
      <div className="container">
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
                className="aboutImg2 "
                style={{
                  backgroundImage: `url(${about2})`,
                  width: "100%",
                  height: "100%",
                }}
              />

              <div className="aboutTitle2Bg ">
                <p className="mt-1" style={{ fontFamily: "initial",  }}>
                  Award Winning Studio Since 1990
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
