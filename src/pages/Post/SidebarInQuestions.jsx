import React from 'react'

const SidebarInQuestions = () => {
    return (
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
                    <div className="d-flex align-items-center pb-3">
                        <svg className="mr-2" width={18} height={18} viewBox="0 0 18 18" fill="#6c727c"><path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6z" /></svg>
                        <h3 className="fs-17">Love this site?</h3>
                    </div>
                    <div className="divider"><span /></div>
                    <p className="fs-14 lh-20 py-3">Get the <span className="text-dark fw-medium">weekly newsletter!</span> In it, you'll get:</p>
                    <ul className="generic-list-item generic-list-item-bullet fs-14 pb-3">
                        <li className="lh-20">The week's top questions and answers</li>
                        <li className="lh-20">Important community announcements</li>
                        <li className="lh-20">Questions that need answers</li>
                    </ul>
                    <button className="btn theme-btn theme-btn-gray w-100">Sign up for the digest</button>
                    <p className="fs-14 pt-1 text-center">See an example newsletter</p>
                </div>
            </div>{/* end card */}
            <div className="card card-item">
                <div className="card-body">
                    <h3 className="fs-17 pb-3">Related Questions</h3>
                    <div className="divider"><span /></div>
                    <div className="sidebar-questions pt-3">
                        <div className="media media-card media--card media--card-2">
                            <div className="media-body">
                                <h5><a href="question-details.html">How to select the dom element with event.target</a></h5>
                                <small className="meta">
                                    <span className="pr-1">2 mins ago</span>
                                    <span className="pr-1">. by</span>
                                    <a href="#" className="author">Sudhir Kumbhare</a>
                                </small>
                            </div>
                        </div>{/* end media */}
                        <div className="media media-card media--card media--card-2">
                            <div className="media-body">
                                <h5><a href="question-details.html">How can you cut an onion without crying?</a></h5>
                                <small className="meta">
                                    <span className="pr-1">48 mins ago</span>
                                    <span className="pr-1">. by</span>
                                    <a href="#" className="author">wimax</a>
                                </small>
                            </div>
                        </div>{/* end media */}
                        <div className="media media-card media--card media--card-2">
                            <div className="media-body">
                                <h5><a href="question-details.html">How to change the behavior of dropdown buttons in HTML</a></h5>
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
            <div className="card card-item">
                <div className="card-body">
                    <h3 className="fs-17 pb-3">Trending Tags</h3>
                    <div className="divider"><span /></div>
                    <div className="tags pt-4">
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">analytics</a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">computer</a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">python</a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">javascript</a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">c#</a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>{/* end tag-item */}
                        <div className="collapse" id="showMoreTags">
                            <div className="tag-item">
                                <a href="#" className="tag-link tag-link-md">java</a>
                                <span className="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                            </div>{/* end tag-item */}
                            <div className="tag-item">
                                <a href="#" className="tag-link tag-link-md">swift</a>
                                <span className="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                            </div>{/* end tag-item */}
                            <div className="tag-item">
                                <a href="#" className="tag-link tag-link-md">html</a>
                                <span className="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                            </div>{/* end tag-item */}
                            <div className="tag-item">
                                <a href="#" className="tag-link tag-link-md">angular</a>
                                <span className="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                            </div>{/* end tag-item */}
                            <div className="tag-item">
                                <a href="#" className="tag-link tag-link-md">flutter</a>
                                <span className="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                            </div>{/* end tag-item */}
                            <div className="tag-item">
                                <a href="#" className="tag-link tag-link-md">machine-language</a>
                                <span className="item-multiplier fs-13">
                                    <span>×</span>
                                    <span>32924</span>
                                </span>
                            </div>{/* end tag-item */}
                        </div>{/* end collapse */}
                        <a className="collapse-btn fs-13" data-toggle="collapse" href="#showMoreTags" role="button" aria-expanded="false" aria-controls="showMoreTags">
                            <span className="collapse-btn-hide">Show more<i className="la la-angle-down ml-1 fs-11" /></span>
                            <span className="collapse-btn-show">Show less<i className="la la-angle-up ml-1 fs-11" /></span>
                        </a>
                    </div>
                </div>
            </div>{/* end card */}
            <div className="ad-card">
                <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">Advertisements</h4>
                <div className="ad-banner mb-4 mx-auto">
                    <span className="ad-text">290x500</span>
                </div>
            </div>{/* end ad-card */}
        </div>
    )
}

export default SidebarInQuestions