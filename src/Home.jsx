import header1 from "./assets/header1.jpg";
import header2 from "./assets/header2.jpg";
import header3 from "./assets/header3.jpg";
const Home = () => {
  return (
    <header id="Home">
      <div className="headerBg">
        <div className="container">
          <div className="row pt-5 align-items-center">
            <div className="col-lg-5 col-12 mt-5 pt-5  ">
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
          


          </div>
        </div>
      </div>
    </header>
  );
};
export default Home;
