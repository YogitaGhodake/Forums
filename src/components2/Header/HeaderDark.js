import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <header className="header-area bg-dark">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo-box">
                                    <Link to="/" className="logo"><img src="/assets/images/logo-white.png" alt="logo" /></Link>
                                    <div className="user-action">
                                        <div className="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1" data-toggle="tooltip" data-placement="top" title="Search">
                                            <i className="la la-search"></i>
                                        </div>
                                        <div className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm" data-toggle="tooltip" data-placement="top" title="Main menu">
                                            <i className="la la-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* <!-- end col-lg-2 --> */}
                            <div className="col-lg-10">
                                <div className="menu-wrapper">
                                    <nav className="menu-bar mr-auto menu-bar-white">
                                        <ul>
                                            <li>
                                            {/* <Link to="/register"> Sign Up </Link> */}
                                                <Link to="/">Home <i className="la la-angle-down fs-11"></i></Link>
                                                <ul className="dropdown-menu-item">
                                                    <li><Link to="/">Home - landing</Link></li>
                                                    <li><a href="/">Home - main</a></li>
                                                    <li><a href="/">Home - layout 2 <span className="badge bg-warning text-white">New</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="is-mega-menu">
                                                <Link to="#">pages <i className="la la-angle-down fs-11"></i></Link>
                                                <div className="dropdown-menu-item mega-menu">
                                                    <ul className="row">
                                                        <li className="col-lg-3">
                                                            <Link to="user-profile.html">user profile</Link>
                                                            <Link to="notifications.html">Notifications</Link>
                                                            <Link to="referrals.html">Referrals</Link>
                                                            <Link to="setting.html">settings</Link>
                                                            <Link to="/askquestion">ask question</Link>
                                                            <Link to="question-details.html">question details</Link>
                                                            <Link to="/about">about</Link>
                                                            <Link to="revisions.html">revisions</Link>
                                                            <Link to="category.html">category</Link>
                                                            <Link to="companies.html">companies</Link>
                                                            <Link to="company-details.html">company details</Link>
                                                        </li>
                                                        <li className="col-lg-3">
                                                            <Link to="careers.html">careers</Link>
                                                            <Link to="career-details.html">career details</Link>
                                                            <Link to="contact.html">contact</Link>
                                                            <Link to="faq.html">FAQs</Link>
                                                            <Link to="pricing-table.html">pricing tables</Link>
                                                            <Link to="/*">page 404</Link>
                                                            <Link to="terms-and-conditions.html">Terms & conditions</Link>
                                                            <Link to="privacy-policy.html">privacy policy</Link>
                                                            <Link to="cart.html">cart</Link>
                                                            <Link to="talent.html">talent</Link>
                                                            <Link to="advertising.html">advertising</Link>
                                                        </li>
                                                        <li className="col-lg-3">
                                                            <Link to="free-demo.html">free demo</Link>
                                                            <Link to="checkout.html">checkout</Link>
                                                            <Link to="wishlist.html">wishlist</Link>
                                                            <Link to="/login">login</Link>
                                                            <Link to="/login">login 2</Link>
                                                            <Link to="/signup">sign up</Link>
                                                            <Link to="/signup">sign up 2</Link>
                                                            <Link to="recover-password.html">recover password</Link>
                                                            <Link to="questions-layout-2.html">questions layout 2 <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="questions-full-width.html">questions full-width <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="questions-left-sidebar.html">questions left sidebar <span className="badge bg-warning text-white">New</span></Link>
                                                        </li>
                                                        <li className="col-lg-3">
                                                            <Link to="questions-right-sidebar.html">questions right sidebar <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="user-list.html">user list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="category-list.html">category list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="tags-list.html">tags list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="/addpost">add post <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="badges-list.html">Badges list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="job-list.html">job list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="/*">page 404 2 <span className="badge bg-warning text-white">New</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">blog <i className="la la-angle-down fs-11"></i></Link>
                                                <ul className="dropdown-menu-item">
                                                    <li><Link to="blog-grid-no-sidebar.html">grid no sidebar</Link></li>
                                                    <li><Link to="blog-left-sidebar.html">blog left sidebar</Link></li>
                                                    <li><Link to="blog-right-sidebar.html">blog right sidebar</Link></li>
                                                    <li><Link to="blog-single.html">blog detail</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* <!-- end ul --> */}
                                    </nav>
                                    {/* <!-- end main-menu --> */}
                                    <form method="post" className="mr-4">
                                        <div className="form-group mb-0">
                                            <input className="form-control form--control form--control-bg-gray text-white" type="text" name="search" placeholder="Type your search words..." />
                                                <button className="form-btn text-white-50" type="button"><i className="la la-search"></i></button>
                                        </div>
                                    </form>
                                    <div className="nav-right-button">
                                        <Link to="#" className="btn theme-btn theme-btn-outline theme-btn-outline-white mr-2" data-toggle="modal" data-target="#loginModal"><i className="la la-sign-in mr-1"></i> Login</Link>
                                        <Link to="#" className="btn theme-btn theme-btn-white" data-toggle="modal" data-target="#signUpModal"><i className="la la-user mr-1"></i> Sign up</Link>
                                    </div>   
                                    {/* <!-- end nav-right-button --> */}
                                </div>
                                {/* <!-- end menu-wrapper --> */}
                            </div>
                            {/* <!-- end col-lg-10 --> */}
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                    <div className="off-canvas-menu custom-scrollbar-styled">
                        <div className="off-canvas-menu-close icon-element icon-element-sm shadow-sm" data-toggle="tooltip" data-placement="left" title="Close menu">
                            <i className="la la-times"></i>
                        </div>
                        {/* <!-- end off-canvas-menu-close --> */}
                        <ul className="generic-list-item off-canvas-menu-list pt-90px">
                            <li>
                                <Link to="/">Home</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/">Home - landing</Link></li>
                                    <li><Link to="/">Home - main</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link to="user-profile.html">user profile</Link></li>
                                    <li><Link to="notifications.html">Notifications</Link></li>
                                    <li><Link to="referrals.html">Referrals</Link></li>
                                    <li><Link to="setting.html">settings</Link></li>
                                    <li><Link to="/askquestion">ask question</Link></li>
                                    <li><Link to="question-details.html">question details</Link></li>
                                    <li><Link to="/about">about</Link></li>
                                    <li><Link to="revisions.html">revisions</Link></li>
                                    <li><Link to="category.html">category</Link></li>
                                    <li><Link to="companies.html">companies</Link></li>
                                    <li><Link to="company-details.html">company details</Link></li>
                                    <li><Link to="careers.html">careers</Link></li>
                                    <li><Link to="career-details.html">career details</Link></li>
                                    <li><Link to="contact.html">contact</Link></li>
                                    <li><Link to="faq.html">FAQs</Link></li>
                                    <li><Link to="pricing-table.html">pricing tables</Link></li>
                                    <li><Link to="/*">page 404</Link></li>
                                    <li><Link to="terms-and-conditions.html">Terms & conditions</Link></li>
                                    <li><Link to="privacy-policy.html">privacy policy</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">blog</Link>
                                <ul className="sub-menu">
                                    <li><Link to="blog-grid-no-sidebar.html">grid no sidebar</Link></li>
                                    <li><Link to="blog-left-sidebar.html">blog left sidebar</Link></li>
                                    <li><Link to="blog-right-sidebar.html">blog right sidebar</Link></li>
                                    <li><Link to="blog-single.html">blog detail</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="off-canvas-btn-box px-4 pt-5 text-center">
                            <Link to="#" className="btn theme-btn theme-btn-sm theme-btn-outline" data-toggle="modal" data-target="#loginModal"><i className="la la-sign-in mr-1"></i> Login</Link>
                            <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
                            <Link to="#" className="btn theme-btn theme-btn-sm" data-toggle="modal" data-target="#signUpModal"><i className="la la-plus mr-1"></i> Sign up</Link>
                        </div>
                    </div>
                    {/* <!-- end off-canvas-menu --> */}
                    <div className="mobile-search-form">
                        <div className="d-flex align-items-center">
                            <form method="post" className="flex-grow-1 mr-3">
                                <div className="form-group mb-0">
                                    <input className="form-control form--control pl-40px" type="text" name="search" placeholder="Type your search words..." />
                                        <span className="la la-search input-icon"></span>
                                </div>
                            </form>
                            <div className="search-bar-close icon-element icon-element-sm shadow-sm">
                                <i className="la la-times"></i>
                            </div>
                            {/* <!-- end off-canvas-menu-close --> */}
                        </div>
                    </div>
                    {/* <!-- end mobile-search-form --> */}
                    <div className="body-overlay"></div>
                </header>
    </div>
  )
}

export default Header;