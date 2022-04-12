import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <section className="footer-area pt-80px bg-dark position-relative">
    <span className="vertical-bar-shape vertical-bar-shape-1"></span>
    <span className="vertical-bar-shape vertical-bar-shape-2"></span>
    <span className="vertical-bar-shape vertical-bar-shape-3"></span>
    <span className="vertical-bar-shape vertical-bar-shape-4"></span>
    <div className="container">
        <div className="row">
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Company</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="#">Advertising</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Legal Stuff</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Service</Link></li>
                        <li><Link to="#">Cookie Policy</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Help</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="#">Knowledge Base</Link></li>
                        <li><Link to="#">Support</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Connect with us</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="https://www.facebook.com"><i className="la la-facebook mr-1"></i> Facebook</Link></li>
                        <li><Link to="https://www.twitter.com"><i className="la la-twitter mr-1"></i> Twitter</Link></li>
                        <li><Link to="https://www.linkedin.com"><i className="la la-linkedin mr-1"></i> LinkedIn</Link></li>
                        <li><Link to="https://www.instagram.com"><i className="la la-instagram mr-1"></i> Instagram</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
    <hr className="border-top-gray my-5" />
    <div className="container">
        <div className="row align-items-center pb-4 copyright-wrap">
            <div className="col-lg-6">
                <Link to="/home" className="d-inline-block">
                    <img src="/assets/images/forums-logo-white.png" alt="footer logo" className="footer-logo"
                     style={{
                        background: "white",
                        borderRadius: "5px",
                        padding: "5px 5px",
                    }}
                    />
                </Link>
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-6">
                <p className="copyright-desc text-right fs-14">Copyright &copy; 2022 <Link to="#">TechyDevs</Link> Inc.</p>
            </div>
            {/* <!-- end col-lg-6 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
</div>
  );
};

export default Footer;