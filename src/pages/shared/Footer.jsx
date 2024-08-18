import img from "../../assets/logo1.png";
const Footer = () => {
  return (
    <div>
      <div className=" mt-10">
        <footer className="footer bg-[#383a49] top-0 p-10 text-white">
          <div>
            <div className="h-16 w-20">
              <img src={img} alt="" />
            </div>
            <p>
              Campus Reserve Ltd.
              <br />
              Providing reliable tech since 2023
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">College</a>
            <a className="link link-hover">Course</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">Sports</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
