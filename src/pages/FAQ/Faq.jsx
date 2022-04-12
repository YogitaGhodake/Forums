import React,{Fragment} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';

const Faq = () => {
  return (
    
    <Fragment>
        <Header dark={false} />
        <section className="hero-area bg-white shadow-sm pt-80px pb-80px">
          <span className="icon-shape icon-shape-1" />
          <span className="icon-shape icon-shape-2" />
          <span className="icon-shape icon-shape-3" />
          <span className="icon-shape icon-shape-4" />
          <span className="icon-shape icon-shape-5" />
          <span className="icon-shape icon-shape-6" />
          <span className="icon-shape icon-shape-7" />
          <div className="container">
            <div className="hero-content text-center">
              <h2 className="section-title pb-3">Frequently Asked Questions</h2>
              <p className="section-desc">Find out everything you need to get started by taking the tour. <br />
                If you still have questions contact us:
                <a href="mailto:example@yourwebsite.com" className="text-color hover-underline">example@yourwebsite.com</a>
              </p>
            </div>{/* end hero-content */}
          </div>{/* end container */}
        </section>
        <section className="faq-area pt-80px pb-80px">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div id="accordion" className="generic-accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span> What topics can I ask about here?</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                        <ul className="generic-list-item generic-list-item-bullet fs-15 pt-3">
                          <li>Include details about your goal</li>
                          <li>Describe expected and actual results</li>
                          <li>Include any error messages</li>
                        </ul>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span>What types of questions should I avoid asking?</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span>What does it mean if a question is</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span>How to create a Minimal, Complete, and Verifiable example</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <span>What if I disagree with the closure of a question? How to reopen it?</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingSix">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <span>Why do I see a message that my question does not meet standards?</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingSeven">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        <span>Why are some questions marked as duplicate?</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingEight">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        <span>What should I do when someone answers my question?</span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                      <div className="card-body">
                        <p className="fs-15 lh-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>{/* end card */}
                </div>{/* end accordion */}
              </div>{/* end col-lg-8 */}
              <div className="col-lg-4">
                <form action="#" className="card card-item">
                  <div className="card-body">
                    <div className="form-group">
                      <h3 className="fs-17 pb-3">if you still need help contact us</h3>
                      <div className="divider"><span /></div>
                    </div>{/* end form-group */}
                    <div className="form-group">
                      <label className="fs-14 text-black fw-medium lh-20">First Name</label>
                      <input type="text" className="form-control form--control fs-14" placeholder="e.g. Alex" />
                    </div>{/* end form-group */}
                    <div className="form-group">
                      <label className="fs-14 text-black fw-medium lh-20">Last Name</label>
                      <input type="text" className="form-control form--control fs-14" placeholder="e.g. Smith" />
                    </div>{/* end form-group */}
                    <div className="form-group">
                      <label className="fs-14 text-black fw-medium lh-20">Email <span className="text-gray fs-13">(Address never shown publicly)</span></label>
                      <input type="email" className="form-control form--control fs-14" placeholder="e.g. alexsmith@gmail.com" />
                    </div>{/* end form-group */}
                    <div className="form-group">
                      <label className="fs-14 text-black fw-medium lh-20">Message</label>
                      <textarea className="form-control form--control fs-14" rows={6} placeholder="Tell us how we can help you." defaultValue={""} />
                    </div>{/* end form-group */}
                    <div className="form-group mb-0">
                      <button className="btn theme-btn mt-2" type="submit">Send Message <i className="la la-arrow-right icon ml-1" /></button>
                    </div>{/* end form-group */}
                  </div>{/* end card-body */}
                </form>
              </div>{/* end col-lg-4 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        <Footer/>
      </Fragment>

  );
};

export default Faq;