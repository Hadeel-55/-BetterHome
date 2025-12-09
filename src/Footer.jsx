function Footer() {
  return (
    <div id="footer" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-12 mt-5">
            <h1 className="text-white">ISTUDIO</h1>
            <p style={{ color: "#62778d" }}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
          </div>
          <div className="col-lg-3 col-12 mt-5  " style={{ fontSize: "18px" }}>
            <strong className="fs-5 text-white">Get In Touch</strong>
            <div className="mt-3" style={{ color: "#62778d" }}>
              <div>
                <i className="fa fa-map-marker-alt me-3"></i>{" "}
                <span>123 Street, New York, USA</span>
              </div>
              <div>
                <i className="fa fa-map-marker-alt me-3"></i>{" "}
                <span>+012 345 67890</span>
              </div>
              <div>
                <i className="fa fa-envelope me-3"></i>{" "}
                <span>info@example.com</span>
              </div>
            </div>

            <div className="d-flex gap-3 mt-3">
              <div
                className="text-center iconContact"
                style={{
                  borderColor: "#62778d",
                  border: "2px solid #62778d",
                  padding: "5px",
                  width: "30px",
                }}
              >
                <a href="" className="text-decoration-none">
                  <i className="bi bi-facebook iconColorCon "></i>
                </a>
              </div>

              <div
                className="text-center iconContact"
                style={{
                  borderColor: "#62778d",
                  border: "2px solid #62778d",
                  padding: "5px",
                  width: "30px",
                }}
              >
                <a href="" className="text-decoration-none">
                  <i className="bi bi-twitter iconColorCon"></i>
                </a>
              </div>
              <div
                className="text-center iconContact"
                style={{
                  borderColor: "#62778d",
                  border: "2px solid #62778d",
                  padding: "5px",
                  width: "30px",
                }}
              >
                <a href="" className="text-decoration-none">
                  <i className="bi bi-instagram iconColorCon"></i>
                </a>
              </div>
              <div
                className="text-center iconContact"
                style={{
                  borderColor: "#62778d",
                  border: "2px solid #62778d",
                  padding: "5px",
                  width: "30px",
                }}
              >
                <a href="" className="text-decoration-none">
                  <i className="bi bi-linkedin iconColorCon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12 mt-5">
            <strong className="fs-5 text-white">Popular Link</strong>
            <div className="mt-3">
              <ul className="list-unstyled">
                <li className="mt-2"> &gt; About Us</li>
                <li className="mt-2"> &gt; Contact Us</li>
                <li className="mt-2"> &gt; Privacy Policy</li>
                <li className="mt-2"> &gt; terms & Condition</li>
                <li className="mt-2"> &gt; Csreer</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-12 mt-5">
            <strong className="fs-5 text-white">Our Services</strong>
            <div className="mt-3">
              <ul className="list-unstyled">
                <li className="mt-2"> &gt; Interior Design</li>
                <li className="mt-2"> &gt; Projec Planning</li>
                <li className="mt-2"> &gt; Renovation</li>
                <li className="mt-2"> &gt; Implement</li>
                <li className="mt-2"> &gt; Landscape Design</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between">
            <div className="col-lg-7">
              <p className="text-white">  &copy; <a href="" style={{ color: "#62778d" }}>Your Site Name,</a>All Right Reserved. Designed By  <a href="" style={{ color: "#62778d" }}>HTML Codex.</a>Distributed by <a href="" style={{ color: "#62778d" }}>ThemeWagon</a></p>
            </div>
            <div className="col-lg-5 ">
                <div className="d-flex justify-content-end gap-3 text-white">
                       <p className="border-end pe-2">Home </p>
          
            <p className=" border-end pe-3">Cookies</p>
            <p className=" border-end pe-3">Help</p>
            <p className=" border-end pe-3">FAQs</p>
                </div>
             
              </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
