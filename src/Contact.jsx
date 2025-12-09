import contact from "./assets/contact.jpg";
function Contact() {
  return (
    <div id="Contact" className="headerBg">
      <div className="containar">
        <div className="row align-items-center ">
          <div className="col-lg-5 col-12">
            <div>
              <img
                className="img-fluid"
                style={{ width: "100%", height: "100%" }}
                src={contact}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 col-9 mt-5 formEmail">
            <div className="ps-4">
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
            <div className="position-relative" style={{ width: "100%" }}>
              <div className="">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className=" form-control  mt-5 p-4"
                />
              </div>

              <button className="position-absolute end-0 top-0 mt-3 me-3 border-0 bg-transparent" type="submit">
                <i className="bi bi-send-fill text-primary fs-4 "></i>
              </button>
            </div>
            <p className="text-muted mt-2 fs-moduim" style={{fontSize:'19px'}}>Diam sed sed dolor stet amet eirmod</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
