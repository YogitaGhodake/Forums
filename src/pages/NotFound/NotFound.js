import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';

const NotFound = () => {
  return (
    <Fragment>
      <Header dark={false} />
     <section className="error-area section-padding position-relative">
        <span className="icon-shape icon-shape-1" />
        <span className="icon-shape icon-shape-2" />
        <span className="icon-shape icon-shape-3" />
        <span className="icon-shape icon-shape-4" />
        <span className="icon-shape icon-shape-5" />
        <span className="icon-shape icon-shape-6" />
        <span className="icon-shape icon-shape-7" />
        <div className="container">
          <div className="text-center">
            <img src="assets/images/error-img.png" alt="error-image" className="img-fluid mb-40px" />
            <h2 className="section-title pb-3">Oops! Page not found!</h2>
            <p className="section-desc pb-4">We're sorry, we couldn't find the page you requested.</p>
            <Link className="btn theme-btn" to="/"> Go to homepage </Link>
          </div>
        </div>{/* end container */}
      </section>
      <Footer />
    </Fragment>
  );
};

export default NotFound;
