import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';

const Notifications = () => {
  return (
         <Fragment>
        <Header dark={false} />
        <section className="hero-area bg-white shadow-sm overflow-hidden pt-60px pb-50px">
          <span className="stroke-shape stroke-shape-1" />
          <span className="stroke-shape stroke-shape-2" />
          <span className="stroke-shape stroke-shape-3" />
          <span className="stroke-shape stroke-shape-4" />
          <span className="stroke-shape stroke-shape-5" />
          <span className="stroke-shape stroke-shape-6" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content d-flex align-items-center">
                  <div className="icon-element shadow-sm flex-shrink-0 mr-3 border border-gray">
                    <svg className="svg-icon-color-5" height={30} viewBox="0 0 512 512" width={30} xmlns="http://www.w3.org/2000/svg"><g><path d="m411 262.862v-47.862c0-69.822-46.411-129.001-110-148.33v-21.67c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.67c-63.59 19.329-110 78.507-110 148.33v47.862c0 61.332-23.378 119.488-65.827 163.756-4.16 4.338-5.329 10.739-2.971 16.267s7.788 9.115 13.798 9.115h136.509c6.968 34.192 37.272 60 73.491 60 36.22 0 66.522-25.808 73.491-60h136.509c6.01 0 11.439-3.587 13.797-9.115s1.189-11.929-2.97-16.267c-42.449-44.268-65.827-102.425-65.827-163.756zm-170-217.862c0-8.271 6.729-15 15-15s15 6.729 15 15v15.728c-4.937-.476-9.94-.728-15-.728s-10.063.252-15 .728zm15 437c-19.555 0-36.228-12.541-42.42-30h84.84c-6.192 17.459-22.865 30-42.42 30zm-177.67-60c34.161-45.792 52.67-101.208 52.67-159.138v-47.862c0-68.925 56.075-125 125-125s125 56.075 125 125v47.862c0 57.93 18.509 113.346 52.671 159.138z" /><path d="m451 215c0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.1-23.404-116.603-65.901-159.1-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c36.831 36.831 57.114 85.8 57.114 137.887z" /><path d="m46 230c8.284 0 15-6.716 15-15 0-52.086 20.284-101.055 57.114-137.886 5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0-42.497 42.497-65.901 98.999-65.901 159.099 0 8.284 6.716 15 15 15z" /></g></svg>
                  </div>
                  <h2 className="section-title fs-30">Notifications</h2>
                </div>{/* end hero-content */}
              </div>{/* end col-lg-8 */}
              <div className="col-lg-4">
                <div className="hero-btn-box text-right py-3">
                  <a href="setting.html" className="btn theme-btn theme-btn-outline theme-btn-outline-gray"><i className="la la-gear mr-1" /> Edit Profile</a>
                </div>
              </div>{/* end col-lg-4 */}
            </div>
          </div>{/* end container */}
        </section>
        <section className="user-details-area pt-60px pb-60px">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="notification-content-wrap">
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img3.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">John Doe following your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Arnold Smith answered on your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img3.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">John Doe following your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Arnold Smith answered on your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img3.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">John Doe following your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Arnold Smith answered on your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                  <div className="media media-card media--card shadow-none rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="assets/images/img4.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">Saeed bookmarked your post</h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                    <button className="btn border border-gray fs-17 ml-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="la la-trash" /></button>
                  </div>{/* end media */}
                </div>{/* end notification-content-wrap */}
                <div className="pager pt-30px mb-50px">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination generic-pagination pr-1">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true"><i className="la la-arrow-left" /></span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true"><i className="la la-arrow-right" /></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <p className="fs-13 pt-3">Showing 1-15 results of 210 questions</p>
                </div>
              </div>{/* end col-lg-9 */}
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Number Achievement</h3>
                      <div className="divider"><span /></div>
                      <div className="row no-gutters text-center">
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color">980k</span>
                            <p className="fs-14">Questions</p>
                          </div>{/* end icon-box */}
                        </div>{/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-2">610k</span>
                            <p className="fs-14">Answers</p>
                          </div>{/* end icon-box */}
                        </div>{/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-3">650k</span>
                            <p className="fs-14">Answer accepted</p>
                          </div>{/* end icon-box */}
                        </div>{/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-4">320k</span>
                            <p className="fs-14">Users</p>
                          </div>{/* end icon-box */}
                        </div>{/* end col-lg-6 */}
                        <div className="col-lg-12 pt-3">
                          <p className="fs-14">To get answer of question <a href="signup.html" className="text-color hover-underline">Join<i className="la la-arrow-right ml-1" /></a></p>
                        </div>
                      </div>{/* end row */}
                    </div>
                  </div>{/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Trending Questions</h3>
                      <div className="divider"><span /></div>
                      <div className="sidebar-questions pt-3">
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5><a href="question-details.html">Using web3 to call precompile contract</a></h5>
                            <small className="meta">
                              <span className="pr-1">2 mins ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">Sudhir Kumbhare</a>
                            </small>
                          </div>
                        </div>{/* end media */}
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5><a href="question-details.html">Is it true while finding Time Complexity of the algorithm [closed]</a></h5>
                            <small className="meta">
                              <span className="pr-1">48 mins ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">wimax</a>
                            </small>
                          </div>
                        </div>{/* end media */}
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5><a href="question-details.html">image picker and store them into firebase with flutter</a></h5>
                            <small className="meta">
                              <span className="pr-1">1 hour ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">Antonin gavrel</a>
                            </small>
                          </div>
                        </div>{/* end media */}
                      </div>{/* end sidebar-questions */}
                    </div>
                  </div>{/* end card */}
                </div>{/* end sidebar */}
              </div>{/* end col-lg-3 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        <Footer/>
      </Fragment>

  );
};

export default Notifications;