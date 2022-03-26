import React from "react";
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="preloader">
                    <div className="loader">
                        <svg className="spinner" viewBox="0 0 50 50">
                            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                        </svg>
                    </div>
                </div>
                {/* <!-- end cssload-loader --> */}

                {/* <!--======================================
                START HEADER AREA
    ======================================--> */}
                <header className="header-area bg-dark">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo-box">
                                    <Link to="/" className="logo"><img src="assets/images/logo-white.png" alt="logo" />
                                    </Link>
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
                                                    {/* <li><Link to="/">Home - landing</Link></li> */}
                                                    <li><Link to="/">Home - main</Link></li>
                                                    {/* <li><Link to="/">Home - layout 2 <span className="badge bg-warning text-white">New</span></Link></li> */}
                                                </ul>
                                            </li>
                                            <li className="is-mega-menu">
                                                <Link to="#">pages <i className="la la-angle-down fs-11"></i></Link>
                                                <div className="dropdown-menu-item mega-menu">
                                                    <ul className="row">
                                                        <li className="col-lg-3">
                                                            <Link to="/users/:id">user profile</Link>
                                                            <Link to="/add/question">ask question</Link>
                                                            <Link to="/questions">question details</Link>
                                                            <Link to="/about">about</Link>
                                                            <Link to="/login">login</Link>
                                                            <Link to="/signup">sign up</Link>
                                                            </li>
                                                        <li className="col-lg-3">
                                                            
                                                        </li>
                                                        <li className="col-lg-3">
                                                            <Link to="/users">user list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="/tags">tags list <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="/addpost">add post <span className="badge bg-warning text-white">New</span></Link>
                                                            <Link to="error-2.html">page 404 2 <span className="badge bg-warning text-white">New</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">blog <i className="la la-angle-down fs-11"></i></Link>
                                                <ul className="dropdown-menu-item">
                                                    <li><Link to="blog-single.html">blog detail</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* <!-- end ul --> */}
                                    </nav>
                                    {/* <!-- end main-menu --> */}
                                    <form className="mr-4">
                                        <div className="form-group mb-0">
                                            <input className="form-control form--control form--control-bg-gray text-white" type="text" name="search" placeholder="Type your search words..." />
                                                <button className="form-btn text-white-50" type="button"><i className="la la-search"></i></button>
                                        </div>
                                    </form>
                                    <div className="nav-right-button">
                                        <Link to="/login" className="btn theme-btn theme-btn-outline theme-btn-outline-white mr-2" ><i className="la la-sign-in mr-1"></i> Login</Link>
                                        <Link to="/signup" className="btn theme-btn theme-btn-white"><i className="la la-user mr-1"></i> Sign up</Link>
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
                                <Link to="#">Home</Link>
                                <ul className="sub-menu">
                                    {/* <li><Link to="/home">Home - landing</Link></li> */}
                                    <li><Link to="/">Home - main</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/users/:id">user profile</Link></li>
                                    <li><Link to="/add/question">ask question</Link></li>
                                    <li><Link to="/questions">question details</Link></li>
                                    <li><Link to="/about">about</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#">blog</Link>
                                <ul className="sub-menu">
                                    <li><Link to="blog-single.html">blog detail</Link></li> 
                                </ul>
                            </li>
                        </ul>
                        <div className="off-canvas-btn-box px-4 pt-5 text-center">
                            <Link to="/login" className="btn theme-btn theme-btn-sm theme-btn-outline" 
                            // data-toggle="modal" data-target="#loginModal"
                           >
                            <i className="la la-sign-in mr-1"></i> Login</Link>
                            <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
                            <Link to="/signup" className="btn theme-btn theme-btn-sm" ><i className="la la-plus mr-1"></i> Sign up</Link>
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
                {/* <!-- end header-area --> */}
                {/* <!--======================================
                END HEADER AREA
======================================-->

<!--======================================
        START HERO AREA
======================================--> */}
<section className="hero-area bg-dark overflow-hidden section-padding">
    <span className="stroke-shape stroke-shape-1 stroke-shape-white"></span>
    <span className="stroke-shape stroke-shape-2 stroke-shape-white"></span>
    <span className="stroke-shape stroke-shape-3 stroke-shape-white"></span>
    <span className="stroke-shape stroke-shape-4 stroke-shape-white"></span>
    <span className="stroke-shape stroke-shape-5 stroke-shape-white"></span>
    <span className="stroke-shape stroke-shape-6 stroke-shape-white"></span>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mr-auto">
                <div className="hero-content">
                    <h2 className="section-title fs-50 pb-3 text-white lh-65">Join the world's biggest Q&A network!</h2>
                    <p className="lh-26 text-white">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    <div className="hero-btn-box pt-30px">
                        <Link to="#fordevelopers" className="btn theme-btn mr-2 page-scroll">For developers <i className="la la-angle-down icon ml-1"></i></Link>
                        <Link to="#forbusinesses" className="btn theme-btn bg-3 page-scroll">For businesses <i className="la la-angle-down icon ml-1"></i></Link>
                    </div>
                </div>
                {/* <!-- end hero-content --> */}
            </div>
            {/* <!-- end col-lg-6 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
    <div className="generic-img-box generic-img-box-layout-2">
        <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img1.jpg" alt="image" />
        <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img2.jpg" alt="image" />
        <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img3.jpg" alt="image" />
        <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img4.jpg" alt="image" />
        <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img4.jpg" alt="image" />
        <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img3.jpg" alt="image" />
    </div>
</section>
{/* <!--======================================
        END HERO AREA
======================================-->

<!-- ================================
         START FUNFACT AREA
================================= --> */}
<section className="funfact-area">
    <div className="container">
        <div className="counter-box bg-white shadow-md rounded-rounded px-4">
            <div className="row">
                <div className="col responsive-column-half border-right border-right-gray">
                    <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                        <div className="media-body">
                            <h5 className="fw-semi-bold pb-2">80+ million</h5>
                            <p className="lh-20">Monthly visitors to our network</p>
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div className="col responsive-column-half border-right border-right-gray">
                    <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                        <div className="media-body">
                            <h5 className="fw-semi-bold pb-2">25+ Million</h5>
                            <p className="lh-20">Questions asked to-date</p>
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div className="col responsive-column-half border-right border-right-gray">
                    <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                        <div className="media-body">
                            <h5 className="fw-semi-bold pb-2">14.7 seconds</h5>
                            <p className="lh-20">Average time between new questions</p>
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div className="col responsive-column-half border-right border-right-gray">
                    <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                        <div className="media-body">
                            <h5 className="fw-semi-bold pb-2">40+ Billion</h5>
                            <p className="lh-20">Times a developer got help</p>
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div className="col responsive-column-half">
                    <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                        <div className="media-body">
                            <h5 className="fw-semi-bold pb-2">10,000+</h5>
                            <p className="lh-20">Customer companies for all products</p>
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
        </div>
        {/* <!-- end counter-box --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end funfact-area --> */}
{/* <!-- ================================
         END FUNFACT AREA
================================= -->

<!-- ================================
         START GET START AREA
================================= --> */}
<section className="get-started-area section--padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 responsive-column-half">
                <div className="media media-card align-items-center">
                    <div className="icon-element icon-element-lg mr-4 shadow-sm rounded-rounded border border-gray">
                        <svg aria-hidden="true" className="svg-icon-color-1" width="45" height="45" viewBox="0 0 48 48"><path opacity=".2" d="M29.22 38.1a3.4 3.4 0 014.81-4.82l8.81 8.81a3.4 3.4 0 01-4.81 4.81l-8.81-8.8z"></path><path d="M18.5 5a1 1 0 100 2c.63 0 1.24.05 1.84.15a1 1 0 00.32-1.98A13.6 13.6 0 0018.5 5zm7.02 1.97a1 1 0 10-1.04 1.7 11.5 11.5 0 015.44 8.45 1 1 0 001.98-.24 13.5 13.5 0 00-6.38-9.91zM18.5 0a18.5 18.5 0 1010.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1044.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0018.5 0zM2 18.5a16.5 16.5 0 1133 0 16.5 16.5 0 01-33 0zm29.58 15.2a1.5 1.5 0 112.12-2.12l9.83 9.83a1.5 1.5 0 11-2.12 2.12l-9.83-9.83z"></path></svg>
                    </div>
                    <div className="media-body">
                        <p className="pb-3 fs-18">Find the best answer to your technical question, <br /> help others answer theirs</p>
                        <Link to="/" className="btn theme-btn theme-btn-white">Browse questions <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-6 responsive-column-half">
                <div className="media media-card align-items-center">
                    <div className="icon-element icon-element-lg mr-4 shadow-sm rounded-rounded border border-gray">
                        <svg aria-hidden="true" className="svg-icon-color-2" width="45" height="45" viewBox="0 0 48 48"><path opacity=".2" d="M12 22a2 2 0 00-2 2v19a4 4 0 004 4h24a4 4 0 004-4V26a4 4 0 00-4-4H12zm6 7a5 5 0 117.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0124.35 39h-2.7a2.06 2.06 0 01-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0118 29z"></path><path d="M23 24a5 5 0 00-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0021.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 01-.6-2.86l-.06-.35A5 5 0 0023 24zm0 2a3 3 0 011.76 5.43l-.16.11a2 2 0 00-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 00-.78-1.92l-.13-.09A3 3 0 0123 26zM12 12.44V18H9a3 3 0 00-3 3v21a3 3 0 003 3h28a3 3 0 003-3V21a3 3 0 00-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44zM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3zM9 20h28a1 1 0 011 1v21a1 1 0 01-1 1H9a1 1 0 01-1-1V21a1 1 0 011-1z"></path></svg>
                    </div>
                    <div className="media-body">
                        <p className="pb-3 fs-18">Want a secure, private space for your <br /> technical knowledge?</p>
                        <Link to="free-demo.html" className="btn theme-btn theme-btn-white">Create a free team <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-6 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END GET START AREA
================================= -->

<!--======================================
        START CLIENT LOGO AREA
======================================--> */}
<section className="client-logo-area section--padding bg-radial-gradient-gray">
    <div className="container">
        <div className="client-logo-box">
            <h3 className="fs-21 text-center text-gray">Thousands of organizations around the globe use Forums for Teams</h3>
            <div className="row justify-content-center text-center pt-50px">
                <div className="col-lg-3 responsive-column-half">
                    <div className="client-logo-item mb-30px bg-white shadow-sm p-3 rounded-rounded hover-y">
                        <img src="assets/images/client-logo.png" alt="client-logo" />
                    </div>
                </div> 
                {/* <!-- end col-lg-3 --> */}
                <div className="col-lg-3 responsive-column-half">
                    <div className="client-logo-item mb-30px bg-white shadow-sm p-3 rounded-rounded hover-y">
                        <img src="assets/images/client-logo-2.png" alt="client-logo" />
                    </div>
                </div>
                {/* <!-- end col-lg-3 --> */}
                <div className="col-lg-3 responsive-column-half">
                    <div className="client-logo-item mb-30px bg-white shadow-sm p-3 rounded-rounded hover-y">
                        <img src="assets/images/client-logo-3.png" alt="client-logo" />
                    </div>
                </div>
                {/* <!-- end col-lg-3 --> */}
                <div className="col-lg-3 responsive-column-half">
                    <div className="client-logo-item mb-30px bg-white shadow-sm p-3 rounded-rounded hover-y">
                        <img src="assets/images/client-logo-4.png" alt="client-logo" />
                    </div>
                </div>
                {/* <!-- end col-lg-3 --> */}
                <div className="col-lg-3 responsive-column-half">
                    <div className="client-logo-item mb-30px bg-white shadow-sm p-3 rounded-rounded hover-y">
                        <img src="assets/images/client-logo-5.png" alt="client-logo" />
                    </div>
                </div>
                {/* <!-- end col-lg-3 --> */}
                <div className="col-lg-3 responsive-column-half">
                    <div className="client-logo-item mb-30px bg-white shadow-sm p-3 rounded-rounded hover-y">
                        <img src="assets/images/client-logo-6.png" alt="client-logo" />
                    </div>
                </div>
                {/* <!-- end col-lg-3 --> */}
            </div>
            {/* <!-- end row --> */}
        </div>
    </div>
</section>
{/* <!--======================================
        END CLIENT LOGO AREA
======================================-->

<!-- ================================
         START CTA AREA
================================= --> */}
<section className="get-started-area section--padding pattern-bg" id="fordevelopers">
    <div className="container">
        <div className="text-center">
            <h2 className="section-title pb-3">For developers, by developers</h2>
            <p className="section-desc w-50 mx-auto">Forums is an open community for anyone that codes. We help you get answers
                to your toughest coding questions, share knowledge with your coworkers in private,
                and find your next dream job.
            </p>
        </div>
        <div className="row pt-50px">
            <div className="col-lg-4 responsive-column-half">
                <div className="card card-item hover-y text-center">
                    <div className="card-body">
                    <svg
                    width={70}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                    // {...props}
                >
                    <path
                    style={{
                        fill: "#f0bc5e",
                    }}
                    d="M18 36V24h-7v17h36v-5zM23 21H11v-8h12v8zM38 21H26v-8h12v8z"
                    />
                    <path d="M58 17h-7V1H7v16H6c-2.757 0-5 2.243-5 5v30c0 2.757 2.243 5 5 5h13v4h-4v2h34v-2h-4v-4h13c2.757 0 5-2.243 5-5V22c0-2.757-2.243-5-5-5zm-9 8h2v6h-2v-6zm-2 2H29v-2h18v2zm-20 3.557-5.713-2.142a.445.445 0 0 1 .001-.83L27 25.443v5.114zM29 29h18v2H29v-2zm24-4h1c1.654 0 3 1.346 3 3s-1.346 3-3 3h-1v-6zm-25.182-2-7.232 2.712C19.638 26.067 19 26.987 19 28s.638 1.933 1.585 2.288L27.818 33H49v10H9V11h40v12H27.818zM49 3v6H9V3h40zM6 19h1v26h44V33h3c2.757 0 5-2.243 5-5s-2.243-5-5-5h-3v-4h7c1.654 0 3 1.346 3 3v27H3V22c0-1.654 1.346-3 3-3zm37 42H21v-4h22v4zm15-6H6c-1.654 0-3-1.346-3-3v-1h58v1c0 1.654-1.346 3-3 3z" />
                    <path d="M11 5h2v2h-2zM15 5h2v2h-2zM19 5h2v2h-2zM11 23h7v2h-7zM11 27h6v2h-6zM11 31h7v2h-7zM11 35h36v2H11zM45 39h2v2h-2zM11 39h32v2H11z" />
                </svg>
                        <h5 className="card-title pt-4 pb-2">Public Q&A</h5>
                        <p className="card-text pb-4">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        <Link to="/" className="btn theme-btn">Browse questions <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                    {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="card card-item hover-y text-center">
                    <div className="card-body">
                        <svg width="70" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="m18.393 38.405c-.055-.674-.09-1.353-.09-2.041a24.887 24.887 0 0 1 43.171-16.888 22.577 22.577 0 0 1 30.826 6.882 18.466 18.466 0 0 1 25.4 23.657 18.459 18.459 0 0 1 -18.184 32.132 18.453 18.453 0 0 1 -25.566 3.314 19.9 19.9 0 0 1 -35.15-2.028 24.895 24.895 0 1 1 -20.4-45.028z" fill="#f0f5f9"/><path d="m1 62.146a24.91 24.91 0 0 0 37.8 21.291 19.892 19.892 0 0 0 35.15 2.02 18.442 18.442 0 0 0 25.565-3.31 18.467 18.467 0 0 0 26.975-20.417 18.461 18.461 0 0 1 -26.976 11.808 18.445 18.445 0 0 1 -25.565 3.31 19.882 19.882 0 0 1 -17.049 9.625c-8.041 0-11.776-2.155-11.509-9.358-3.765 2.285-13.42 4.268-18.141 4.268-12.285 0-23.844-11.866-25.874-23.562a25.252 25.252 0 0 0 -.376 4.325z" fill="#d9e2e9"/><g fill="#2f3a5a"><path d="m56.906 96.09a20.952 20.952 0 0 1 -18.536-11.255 25.9 25.9 0 1 1 -21.028-47.135c-.027-.467-.039-.909-.039-1.336a25.887 25.887 0 0 1 44.344-18.156 23.577 23.577 0 0 1 30.992 6.874 19.222 19.222 0 0 1 8.061-1.749 19.47 19.47 0 0 1 18.238 26.267 19.459 19.459 0 0 1 -19.172 33.814 19.456 19.456 0 0 1 -25.539 3.471 20.733 20.733 0 0 1 -17.321 9.205zm-18.106-13.657a1 1 0 0 1 .91.585 18.9 18.9 0 0 0 33.386 1.926 1 1 0 0 1 1.457-.282 17.453 17.453 0 0 0 24.18-3.135 1 1 0 0 1 1.274-.252 17.46 17.46 0 0 0 17.193-30.393 1 1 0 0 1 -.423-1.259 17.461 17.461 0 0 0 -24.024-22.374 1 1 0 0 1 -1.294-.345 21.575 21.575 0 0 0 -29.459-6.578 1 1 0 0 1 -1.262-.171 23.887 23.887 0 0 0 -41.438 16.209c0 .6.028 1.244.087 1.959a1 1 0 0 1 -.7 1.035 23.894 23.894 0 1 0 19.585 43.22 1 1 0 0 1 .528-.145z"/><path d="m25.9 88.034a25.921 25.921 0 0 1 -25.9-25.891 1 1 0 0 1 2 0 23.895 23.895 0 0 0 44.876 11.43 1 1 0 0 1 1.756.958 25.9 25.9 0 0 1 -22.732 13.503z"/><path d="m95.953 39.672a1 1 0 0 1 -1-1 21.584 21.584 0 0 0 -39.182-12.5 1 1 0 0 1 -1.63-1.159 23.584 23.584 0 0 1 42.812 13.659 1 1 0 0 1 -1 1z"/><path d="m113.436 57.16a1 1 0 0 1 -.69-1.724 17.461 17.461 0 0 0 -12.046-30.1 1 1 0 0 1 0-2 19.46 19.46 0 0 1 13.425 33.55.992.992 0 0 1 -.689.274z"/></g><path d="m64 39.039a20.832 20.832 0 0 0 -20.832 20.832v19.3h5.9v-19.3a14.93 14.93 0 1 1 29.859 0v19.3h5.9v-19.3a20.832 20.832 0 0 0 -20.827-20.832z" fill="#84879c"/><path d="m84.831 80.172h-5.9a1 1 0 0 1 -1-1v-19.3a13.93 13.93 0 1 0 -27.859 0v19.3a1 1 0 0 1 -1 1h-5.9a1 1 0 0 1 -1-1v-19.3a21.832 21.832 0 1 1 43.663 0v19.3a1 1 0 0 1 -1.004 1zm-4.9-2h3.9v-18.3a19.832 19.832 0 1 0 -39.663 0v18.3h3.9v-18.3a15.93 15.93 0 1 1 31.859 0z" fill="#2f3a5a"/><rect fill="#fac77c" height="43.593" rx="8.123" width="53.599" x="37.2" y="72.934"/><path d="m90.8 81.053v27.354a8.126 8.126 0 0 1 -8.13 8.119h-37.348a8.091 8.091 0 0 1 -6.61-3.408 7.862 7.862 0 0 0 2.576.421h37.352a8.135 8.135 0 0 0 8.13-8.129v-27.344a8.166 8.166 0 0 0 -1.509-4.722 8.154 8.154 0 0 1 5.539 7.709z" fill="#e5ae5c"/><path d="m82.676 117.527h-37.353a9.133 9.133 0 0 1 -9.123-9.127v-27.342a9.133 9.133 0 0 1 9.123-9.123h37.353a9.133 9.133 0 0 1 9.124 9.123v27.342a9.133 9.133 0 0 1 -9.124 9.127zm-37.353-43.592a7.131 7.131 0 0 0 -7.123 7.123v27.342a7.131 7.131 0 0 0 7.123 7.123h37.353a7.131 7.131 0 0 0 7.124-7.123v-27.342a7.131 7.131 0 0 0 -7.123-7.123z" fill="#2f3a5a"/><path d="m69.3 90.8a5.3 5.3 0 1 0 -7.564 4.782v8.385h4.519v-8.386a5.293 5.293 0 0 0 3.045-4.781z" fill="#84879c"/><path d="m66.259 104.966h-4.519a1 1 0 0 1 -1-1v-7.789a6.3 6.3 0 1 1 6.519 0v7.789a1 1 0 0 1 -1 1zm-3.519-2h2.519v-7.385a1 1 0 0 1 .572-.9 4.264 4.264 0 0 0 2.469-3.881 4.3 4.3 0 0 0 -8.609 0 4.264 4.264 0 0 0 2.473 3.878 1 1 0 0 1 .572.9z" fill="#2f3a5a"/></svg>
                        <h5 className="card-title pt-4 pb-2">Private Q&A</h5>
                        <p className="card-text pb-4">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        <Link to="free-demo.html" className="btn theme-btn bg-3">Try for free <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                    {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="card card-item hover-y text-center">
                    <div className="card-body">
                        <svg width="70" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m395.058 7.5h-254.439c-16.351 0-29.606 13.255-29.606 29.606v437.789c0 16.351 13.255 29.606 29.606 29.606h331.762c16.351 0 29.606-13.255 29.606-29.606v-360.466c0-7.852-3.119-15.383-8.672-20.935l-77.323-77.323c-5.551-5.552-13.082-8.671-20.934-8.671z" fill="#f4fbff"/><g><path d="m493.316 93.494-54.421-54.421v435.822c0 16.351-13.255 29.606-29.606 29.606h63.092c16.351 0 29.606-13.255 29.606-29.606v-360.466c0-7.852-3.119-15.383-8.671-20.935z" fill="#e4f6ff"/></g><path d="m493.316 93.494-77.323-77.323c-2.532-2.532-5.475-4.557-8.672-6.012v73.652c0 10.137 8.218 18.355 18.355 18.355h73.651c-1.454-3.197-3.48-6.14-6.011-8.672z" fill="#e28086"/></g><g><g><path d="m238.156 355.206h32.205v67.458h-32.205z" fill="#4a80aa" transform="matrix(.707 -.707 .707 .707 -200.548 293.704)"/><path d="m362.134 459.681-68.185-68.185c-3.907-3.907-10.242-3.907-14.149 0l-22.981 22.981c-3.907 3.907-3.907 10.242 0 14.149l68.185 68.185c10.253 10.253 26.877 10.253 37.13 0 10.254-10.253 10.254-26.877 0-37.13z" fill="#cc9675"/><circle cx="147.949" cy="282.625" fill="#bed8fb" r="138.005"/><circle cx="147.949" cy="282.625" fill="#f4fbff" r="108.098"/></g><g><g><g><g><g><g><g><path d="m171.088 333.057c-2.719-.341-4.764-2.645-4.776-5.385l-.105-24.931-38.093.161.105 24.931c.012 2.741-2.014 5.061-4.73 5.426 0 0-7.034 24.04 23.9 23.91 30.935-.132 23.699-24.112 23.699-24.112z" fill="#ffcbbe"/><path d="m204.404 340.347c-8.728-3.842-25.205-6.273-33.316-7.291l-.049.061c-12.168 15.221-35.292 15.289-47.55.14-8.102 1.086-24.559 3.656-33.253 7.571-9.038 4.072-14.24 12.968-14.429 22.303 40.774 36.602 102.669 36.788 143.657.558.162-10.334-5.578-19.168-15.06-23.342z" fill="#365e7d"/></g></g></g></g></g></g><g><g><path d="m176.889 224.928c0-6.01-4.872-10.883-10.883-10.883h-36.203c-14.551 0-26.347 11.796-26.347 26.347v19.609l8.999 6.899h70.36l8.999-15.154v-12.26c0-6.01-4.872-10.883-10.883-10.883h-.367c-2.03.001-3.675-1.645-3.675-3.675z" fill="#4a80aa"/><g><path d="m191.814 251.747-17.265-1.619c-7.326-.687-14.677 1.019-20.952 4.862-5.35 3.277-11.501 5.011-17.775 5.011h-32.366v15.634c0 3.164 2.565 5.729 5.729 5.729.984 0 1.81.758 1.871 1.74 1.189 19.173 17.106 34.357 36.578 34.357 19.49 0 35.418-15.211 36.536-34.408.055-.952.855-1.688 1.808-1.688h.094c3.218 0 5.821-2.609 5.799-5.82-.057-8.626-.057-23.798-.057-23.798z" fill="#ffddce"/></g></g></g></g></g><path d="m315.371 102.166h-148.786c-4.766 0-8.63-3.864-8.63-8.63v-28.744c0-4.766 3.864-8.63 8.63-8.63h148.787c4.766 0 8.63 3.864 8.63 8.63v28.743c0 4.767-3.864 8.631-8.631 8.631z" fill="#ffe07d"/></g><g><path d="m453.324 194.709h-129.322c-4.142 0-7.499 3.358-7.499 7.499s3.358 7.499 7.499 7.499h129.323c4.142 0 7.499-3.358 7.499-7.499s-3.358-7.499-7.5-7.499z"/><path d="m453.324 239.922h-129.322c-4.142 0-7.499 3.358-7.499 7.499s3.358 7.499 7.499 7.499h129.323c4.142 0 7.499-3.358 7.499-7.499s-3.358-7.499-7.5-7.499z"/><path d="m460.824 292.634c0-4.142-3.358-7.499-7.499-7.499h-129.323c-4.142 0-7.499 3.358-7.499 7.499s3.358 7.499 7.499 7.499h129.323c4.141.001 7.499-3.357 7.499-7.499z"/><path d="m324.002 330.348c-4.142 0-7.499 3.358-7.499 7.499s3.358 7.499 7.499 7.499h64.661c4.142 0 7.499-3.358 7.499-7.499s-3.358-7.499-7.499-7.499z"/><path d="m498.619 88.191-77.321-77.321c-6.87-6.875-16.283-10.87-26.24-10.87h-254.439c-20.46 0-37.105 16.646-37.105 37.106v76.781c0 4.142 3.358 7.499 7.499 7.499s7.499-3.358 7.499-7.499v-76.781c0-12.19 9.917-22.107 22.107-22.107h254.439c1.618 0 3.209.173 4.764.516v68.296c0 14.256 11.598 25.854 25.854 25.854h68.288c.346 1.565.523 3.168.523 4.764v360.466c0 12.189-9.917 22.107-22.107 22.107h-100.748c8.769-13.111 7.373-31.055-4.195-42.623l-68.185-68.185c-4.966-4.966-12.195-6.3-18.396-4.038l-14.68-14.68c41.416-57.512 35.309-137.086-15.341-187.737-56.213-56.212-148.443-57.332-205.774 0-56.732 56.732-56.732 149.042 0 205.774 50.606 50.607 130.256 56.622 187.732 15.336l14.685 14.685c-2.262 6.201-.928 13.43 4.039 18.396l63.072 63.072h-173.97c-12.189 0-22.107-9.917-22.107-22.107v-24.035c0-4.142-3.358-7.499-7.499-7.499s-7.499 3.358-7.499 7.499v24.035c0 20.46 16.646 37.105 37.105 37.105h331.762c20.46 0 37.106-16.646 37.106-37.105v-360.466c0-9.732-3.862-19.237-10.868-26.238zm-442.951 286.716c-50.884-50.884-50.884-133.678 0-184.563 51.532-51.532 134.24-50.322 184.563 0 46.854 46.855 51.219 121.3 10.152 173.166-6.304 7.961-13.579 15.239-21.549 21.549-51.535 40.803-126.163 36.851-173.166-10.152zm188.936 16.484c4.241-3.775 8.286-7.812 12.137-12.139l12.35 12.35-12.167 12.167-12.349-12.35c.01-.01.019-.02.029-.028zm85.703 100.117-68.184-68.184c-.977-.977-.979-2.564 0-3.544l.099-.099c.002-.002.004-.003.005-.005l22.877-22.877c.976-.977 2.567-.977 3.544 0l68.184 68.185c7.312 7.313 7.312 19.211 0 26.524-7.331 7.33-19.194 7.33-26.525 0zm84.514-407.697v-58.207l69.062 69.062h-58.206c-5.987 0-10.856-4.87-10.856-10.855z"/><path d="m315.372 48.663h-148.787c-8.894 0-16.13 7.236-16.13 16.13v28.743c0 8.894 7.236 16.13 16.13 16.13h148.787c8.894 0 16.13-7.236 16.13-16.13v-28.743c-.001-8.894-7.237-16.13-16.13-16.13zm1.13 44.872c0 .623-.507 1.131-1.131 1.131h-148.786c-.623 0-1.131-.507-1.131-1.131v-28.742c0-.623.507-1.131 1.131-1.131h148.787c.624 0 1.131.507 1.131 1.131v28.742z"/><path d="m229.688 364.365c45.072-45.071 45.072-118.408 0-163.479-45.072-45.072-118.407-45.072-163.479 0-17.536 17.537-28.782 39.726-32.522 64.17-.626 4.094 2.184 7.921 6.279 8.547 4.096.629 7.921-2.184 8.547-6.279 3.254-21.264 13.04-40.571 28.301-55.833 39.223-39.223 103.044-39.223 142.268 0 37.634 37.634 39.152 97.91 4.567 137.379-3.294-6.703-8.897-12.161-16.225-15.387-8.884-3.911-24.2-6.397-33.621-7.639l-.04-9.47c9.104-6.703 15.566-16.819 17.423-28.523 1.601-.665 3.07-1.648 4.328-2.915 2.511-2.528 3.88-5.881 3.857-9.442-.067-9.939-.058-26.412-.058-36.008 0-9.075-6.612-16.636-15.271-18.119-1.662-8.438-9.117-14.822-18.036-14.822h-36.203c-18.663 0-33.847 15.183-33.847 33.846v35.243c0 5.471 3.339 10.177 8.086 12.188 1.815 11.347 7.956 21.207 16.627 27.912l.044 10.333c-9.41 1.321-24.704 3.936-33.557 7.922-6.732 3.033-11.993 8.176-15.231 14.509-11.99-13.802-19.929-30.441-23.077-48.535-.71-4.08-4.594-6.813-8.674-6.103-4.081.71-6.813 4.594-6.103 8.674 4.092 23.514 15.205 44.894 32.139 61.829 45.269 45.272 118.606 44.876 163.478.002zm-99.885-142.82h36.203c1.866 0 3.384 1.518 3.384 3.384 0 6.162 5.013 11.175 11.175 11.175h.367c1.866 0 3.384 1.518 3.384 3.384v4.025l-9.065-.85c-8.88-.831-17.962 1.275-25.57 5.934-4.173 2.555-8.965 3.906-13.858 3.906h-24.867v-12.109c-.001-10.394 8.454-18.849 18.847-18.849zm-18.848 52.488v-6.533h24.867c7.66 0 15.16-2.115 21.692-6.115 4.86-2.977 10.662-4.323 16.335-3.791l10.47.982c.006 4.619.018 10.713.044 15.429-4.175.733-7.424 4.252-7.679 8.612-.893 15.334-13.653 27.345-29.049 27.345-15.364 0-28.143-12.001-29.094-27.323-.268-4.318-3.467-7.815-7.586-8.606zm36.68 50.928c3.851 0 7.59-.506 11.16-1.439l.018 4.182c.008 1.94.453 3.791 1.241 5.455-3.729 2.516-8.146 3.904-12.777 3.918-.023 0-.046 0-.069 0-4.588 0-8.972-1.351-12.688-3.814.774-1.671 1.208-3.523 1.2-5.463l-.019-4.484c3.802 1.071 7.806 1.645 11.934 1.645zm-63.967 35.043c1.089-5.487 4.592-10.06 9.646-12.338 5.102-2.297 14.929-4.604 27.305-6.432 7.07 6.939 16.537 10.841 26.586 10.841h.114c10.124-.03 19.642-4.016 26.704-11.066 12.392 1.724 22.238 3.947 27.359 6.202 5.739 2.526 9.449 7.338 10.358 13.202-37.113 30.482-91.109 30.343-128.072-.409z"/></g></g></svg>
                        <h5 className="card-title pt-4 pb-2">Browse jobs</h5>
                        <p className="card-text pb-4">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        <Link to="careers.html" className="btn theme-btn">Find a job <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                    {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END CTA AREA
================================= -->

<!-- ================================
         START CTA AREA
================================= --> */}
<section className="get-started-area section--padding bg-gray" id="for-businesses">
    <div className="container">
        <div className="text-center">
            <h2 className="section-title pb-3">For businesses, by developers</h2>
            <p className="section-desc w-50 mx-auto">This is just a simple text made for this unique and awesome template,
                 you can replace it with any text.
            </p>
        </div>
        <div className="row pt-50px">
            <div className="col-lg-4 responsive-column-half">
                <div className="media media-card align-items-center hover-s">
                    <div className="icon-element mr-3 bg-1">
                    <svg
                    className="svg-icon-color-white"
                    width={32}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 480"
                    xmlSpace="preserve"
                    // {...props}
                >
                    <path d="M240 0c-26.51 0-48 21.49-48 48s21.49 48 48 48c26.499-.026 47.974-21.501 48-48 0-26.51-21.49-48-48-48zm0 80c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32zM272 104h-1.888l-1.688.84a63.773 63.773 0 0 1-56.848 0l-1.688-.84H208c-22.08.026-39.974 17.92-40 40v48c0 13.255 10.745 24 24 24h96c13.255 0 24-10.745 24-24v-48c-.026-22.08-17.92-39.974-40-40zm24 88a8 8 0 0 1-8 8h-96a8 8 0 0 1-8-8v-48c.002-12.592 9.735-23.042 22.296-23.936a80.061 80.061 0 0 0 67.408 0c12.56.894 22.294 11.344 22.296 23.936v48zM408 264c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c-.026-26.499-21.501-47.974-48-48zm0 80c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zM440 368h-1.888l-1.688.8a63.78 63.78 0 0 1-56.848 0l-1.688-.8H376c-22.08.026-39.974 17.92-40 40v48c0 13.255 10.745 24 24 24h96c13.255 0 24-10.745 24-24v-48c-.026-22.08-17.92-39.974-40-40zm24 88a8 8 0 0 1-8 8h-96a8 8 0 0 1-8-8v-48c.002-12.592 9.735-23.042 22.296-23.936a80.061 80.061 0 0 0 67.408 0c12.561.894 22.294 11.344 22.296 23.936v48zM72 264c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c-.026-26.499-21.501-47.974-48-48zm0 80c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32zM104 368h-1.888l-1.688.8a63.78 63.78 0 0 1-56.848 0l-1.688-.8H40c-22.08.026-39.974 17.92-40 40v48c0 13.255 10.745 24 24 24h96c13.255 0 24-10.745 24-24v-48c-.026-22.08-17.92-39.974-40-40zm24 88a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-48c.002-12.592 9.735-23.042 22.296-23.936a80.061 80.061 0 0 0 67.408 0c12.561.894 22.294 11.344 22.296 23.936v48zM319.372 406.276l-.012-.028a8 8 0 0 0-10.495-4.224 177.456 177.456 0 0 1-114.104 7.856l7.488-2.2c4.242-1.242 6.674-5.686 5.432-9.928s-5.686-6.674-9.928-5.432l-32 9.384c-.12 0-.208.136-.32.176a7.928 7.928 0 0 0-2.064 1.144c-.278.15-.545.318-.8.504a7.75 7.75 0 0 0-1.96 2.72 8.012 8.012 0 0 0-.608 3.304c.195 1.083.462 2.152.8 3.2.048.112 0 .24.088.352l16 30.616a8.004 8.004 0 1 0 14.192-7.408l-6.512-12.448a192.565 192.565 0 0 0 130.552-7.104 8 8 0 0 0 4.251-10.484zM453.656 210.344a8 8 0 0 0-11.312 0l-11.32 11.32c-6.624-70.07-51.111-130.876-115.888-158.4a8 8 0 1 0-6.272 14.72c58.11 24.697 98.504 78.669 105.816 141.384l-9.024-9.024a8 8 0 0 0-11.312 11.312l24 24a8 8 0 0 0 11.314.014l.014-.014 24-24a8 8 0 0 0-.016-11.312zM175.768 69.272a7.439 7.439 0 0 0-.208-1.384c0-.072-.088-.12-.12-.2-.032-.08 0-.136 0-.2a7.673 7.673 0 0 0-.752-1.104 8.076 8.076 0 0 0-.912-1.32 7.508 7.508 0 0 0-1.56-1.064 7.037 7.037 0 0 0-.896-.648l-32-14.616a8 8 0 0 0-6.64 14.544l16.568 7.576C86.875 104.237 47.955 169.256 48 240a8 8 0 0 0 16 0c-.04-62.293 32.901-119.952 86.584-151.552l-5.784 12.088a8 8 0 0 0 3.736 10.664 7.876 7.876 0 0 0 3.464.8 8 8 0 0 0 7.2-4.536l16-33.384c0-.08 0-.168.064-.248a7.693 7.693 0 0 0 .432-1.696c.137-.431.239-.872.304-1.32a7.977 7.977 0 0 0-.232-1.544z" />
                </svg>
                    </div>
                    <div className="media-body">
                        <h5 className="pb-2"><Link to="free-demo.html">Private Q&A</Link></h5>
                        <p>Quickly find and share internal knowledge with Private Q&A</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="media media-card align-items-center hover-s">
                    <div className="icon-element mr-3 bg-2">
                    <svg
                    className="svg-icon-color-white"
                    width={32}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    // {...props}
                >
                    <path d="m500.71 446.149-92.7-92.7c2.548-3.879 2.118-9.141-1.293-12.552-3.41-3.41-8.674-3.841-12.552-1.293l-24.737-24.737c18.489-27.447 30.128-59.238 33.495-92.395 4.611-45.412-6.37-91.445-30.92-129.622-2.987-4.645-9.174-5.988-13.818-3.002-4.644 2.987-5.988 9.174-3.002 13.818 45.911 71.392 35.6 166.844-24.517 226.961-70.95 70.95-186.394 70.95-257.345 0-70.95-70.949-70.95-186.393 0-257.344 60.181-60.181 152.594-70.842 224.73-25.931 4.686 2.917 10.853 1.485 13.772-3.203 2.919-4.687 1.484-10.853-3.203-13.772-38.068-23.7-83.719-34.07-128.552-29.203C134.551 6.117 91.62 26.705 59.18 59.143c-78.746 78.747-78.746 206.878 0 285.624 39.374 39.374 91.093 59.06 142.813 59.06 39.403 0 78.798-11.44 112.741-34.292l24.613 24.613c-3.698 3.918-3.639 10.089.195 13.924a9.966 9.966 0 0 0 7.07 2.929c2.468 0 4.93-.917 6.854-2.733l92.563 92.563c7.45 7.45 17.244 11.169 27.065 11.169 9.911 0 19.85-3.791 27.423-11.364 15.074-15.076 15.162-39.519.193-54.487zm-165.344-84.26 26.402-26.402 18.11 18.11-26.402 26.402-18.11-18.11zm151.01 124.607c-7.28 7.279-19.036 7.367-26.207.194l-92.553-92.553 26.402-26.402 92.552 92.553c7.172 7.173 7.085 18.929-.194 26.208z" />
                    <path d="m345.044 59.381-.217-.217c-3.892-3.916-10.223-3.935-14.14-.043-3.916 3.892-3.936 10.223-.043 14.14l.26.261c1.953 1.953 4.511 2.929 7.07 2.929s5.118-.976 7.07-2.929c3.904-3.904 3.904-10.235 0-14.141zM201.993 47.981c-84.902 0-153.975 69.073-153.975 153.975s69.073 153.975 153.975 153.975 153.975-69.073 153.975-153.975S286.895 47.981 201.993 47.981zm0 287.953c-73.876 0-133.978-60.102-133.978-133.978S128.117 67.978 201.993 67.978s133.978 60.102 133.978 133.978-60.102 133.978-133.978 133.978z" />
                    <path d="M240.041 188.963c6.228-8.096 9.944-18.22 9.944-29.201v-13.096c0-26.463-21.529-47.992-47.992-47.992s-47.992 21.529-47.992 47.992v13.096c0 10.981 3.715 21.106 9.944 29.201-31.8 5.997-55.937 33.966-55.937 67.484v5.166c0 5.522 4.476 9.998 9.998 9.998h167.972c5.522 0 9.998-4.476 9.998-9.998v-5.166c.002-33.517-24.135-61.486-55.935-67.484zm-66.043-42.297c0-15.436 12.559-27.995 27.995-27.995s27.995 12.559 27.995 27.995v13.096c0 15.436-12.559 27.995-27.995 27.995s-27.995-12.559-27.995-27.995v-13.096zm-45.755 104.948c2.434-24.589 23.236-43.86 48.455-43.86h50.591c25.219 0 46.021 19.271 48.455 43.86H128.243zM442.305 11.987c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.521 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998V21.986c0-5.523-4.476-9.999-9.998-9.999zM442.305 71.547c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.522 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998V81.546c0-5.522-4.476-9.999-9.998-9.999zM478.299 47.981h-12.428c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.476-9.998-9.998-9.998zM418.738 47.981H406.31c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.475-9.998-9.998-9.998zM61.937 412.008c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.522 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998v-12.428c0-5.522-4.476-9.998-9.998-9.998zM61.937 471.568c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.522 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998v-12.428c0-5.522-4.476-9.998-9.998-9.998zM97.931 448.002H85.503c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.476-9.998-9.998-9.998zM38.371 448.002H25.943c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.476-9.998-9.998-9.998z" />
                </svg>
                    </div>
                    <div className="media-body">
                        <h5 className="pb-2"><Link to="talent.html">Talent solutions</Link></h5>
                        <p>Find the perfect candidate for your growing technical team</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="media media-card align-items-center hover-s">
                    <div className="icon-element mr-3 bg-3">
                    <svg
                    className="svg-icon-color-white"
                    width={32}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 396.821 396.821"
                    xmlSpace="preserve"
                    // {...props}
                >
                    <path d="M394.583 8.054a7.5 7.5 0 0 0-6.522-6.523c-30.748-3.803-62.477-.488-91.767 9.583-29.293 10.072-56.355 26.973-78.258 48.876l-49.983 49.983-72.149 9.305a7.504 7.504 0 0 0-4.345 2.135l-69.563 69.563a7.498 7.498 0 0 0-1.858 7.528 7.498 7.498 0 0 0 5.796 5.15l52.597 9.742 10.335 10.335-22.003 11.915a7.5 7.5 0 0 0-1.733 11.898l83.438 83.438a7.5 7.5 0 0 0 11.899-1.732l11.916-22.003 10.335 10.335 9.742 52.597a7.5 7.5 0 0 0 12.679 3.937l69.563-69.563a7.5 7.5 0 0 0 2.135-4.344l9.306-72.15 49.983-49.984c21.903-21.903 38.804-48.964 48.876-78.257 10.07-29.29 13.383-61.023 9.581-91.764zM79.674 198.355l-36.989-6.851 57.673-57.675 50.332-6.491-71.016 71.017zm72.391 114.913L82.846 244.05l17.085-9.252 61.385 61.386-9.251 17.084zm110.22-17.512-57.674 57.674-6.852-36.988 71.017-71.017-6.491 50.331zm63.232-128.285-135.85 135.85-96.874-96.874 135.85-135.851c19.738-19.739 44.002-35.076 70.287-44.49 3.395 17.492 11.948 33.719 24.654 46.424 12.705 12.706 28.931 21.259 46.424 24.655-9.415 26.283-24.753 50.547-44.491 70.286zm49.006-84.697a74.923 74.923 0 0 1-40.333-20.85 74.913 74.913 0 0 1-20.85-40.333c21.741-5.859 44.579-7.857 66.99-5.807 2.051 22.411.052 45.249-5.807 66.99z" />
                    <path d="M221.325 110.443c-17.74 17.741-17.74 46.606 0 64.347 8.871 8.871 20.521 13.305 32.174 13.305 11.649 0 23.304-4.436 32.173-13.305h.001c17.74-17.74 17.74-46.606-.001-64.347-17.741-17.74-46.607-17.739-64.347 0zm53.741 53.74c-11.894 11.893-31.244 11.891-43.134 0-11.893-11.892-11.893-31.242 0-43.134 5.945-5.946 13.756-8.918 21.566-8.918 7.811 0 15.621 2.973 21.566 8.918 11.893 11.892 11.893 31.242.002 43.134zM98.365 299.165a7.5 7.5 0 0 0-10.607 0L23.41 363.512a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l64.347-64.347a7.501 7.501 0 0 0 0-10.606zM108.263 319.671l-28.991 28.991a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l28.991-28.991a7.5 7.5 0 0 0 0-10.606 7.502 7.502 0 0 0-10.608 0zM69.123 361.919c-3.138 0-6.002 2.024-7.062 4.973-1.078 2.998-.075 6.441 2.416 8.416 2.547 2.02 6.266 2.13 8.928.265 2.84-1.99 3.992-5.81 2.639-9.024-1.113-2.775-3.945-4.63-6.921-4.63z" />
                    <path d="M76.044 366.549c.19.451-.18-.45 0 0zM47.91 380.025l-3.992 3.992a7.5 7.5 0 0 0 5.303 12.804 7.477 7.477 0 0 0 5.303-2.196l3.992-3.992a7.498 7.498 0 0 0 .001-10.606c-2.929-2.928-7.679-2.931-10.607-.002zM42.502 314.014a7.5 7.5 0 0 0-10.607 0L2.904 343.005a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l28.991-28.991a7.5 7.5 0 0 0-.001-10.606zM54.472 311.136c3.043-.765 5.327-3.417 5.644-6.537.311-3.055-1.369-6.049-4.096-7.427-2.895-1.464-6.523-.853-8.769 1.494-2.405 2.513-2.752 6.426-.852 9.335-.06-.09-.106-.156.015.029.126.185.083.118.023.029 1.767 2.567 4.992 3.842 8.035 3.077zM73.867 293.257l3.991-3.992a7.498 7.498 0 0 0-.001-10.606c-2.932-2.93-7.681-2.929-10.606.001l-3.991 3.992a7.498 7.498 0 0 0 5.304 12.802 7.474 7.474 0 0 0 5.303-2.197z" />
                </svg>
                    </div>
                    <div className="media-body">
                        <h5 className="pb-2"><Link to="advertising.html">Advertising platform</Link></h5>
                        <p>Accelerate the discovery of your products or services</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END CTA AREA
================================= -->

<!-- ================================
         START INFO AREA
================================= --> */}
<section className="info-area section--padding">
    <div className="container">
        <div className="text-center">
            <h2 className="section-title lh-50 pb-35px">Capture your company’s knowledge and context in a
                <br /> discoverable format to unblock your team
            </h2>
            <Link to="free-demo.html" className="btn theme-btn">Create a free team</Link>
        </div>
        <div className="row pt-60px">
            <div className="col-lg-4 responsive-column-half">
                <div className="info-box px-2 text-center">
                    <div className="icon-element mb-4 shadow-sm mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#48a868"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Increase productivity</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="info-box px-2 text-center">
                    <div className="icon-element mb-4 shadow-sm mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#48a868"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Accelerate time to market</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="info-box px-2 text-center">
                    <div className="icon-element mb-4 shadow-sm mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#48a868"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Protect institutional knowledge</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END INFO AREA
================================= --> */}

<hr className="border-top-gray" />

{/* <!-- ================================
         START INFO AREA
================================= --> */}
<section className="info-area section--padding">
    <div className="container">
        <div className="text-center">
            <h2 className="section-title pb-3">Ensure your company stays on course </h2>
            <p className="section-desc">Here are just a few types of technologists that we help.</p>
        </div>
        <div className="row pt-60px align-items-center">
            <div className="col responsive-column-half card card-item case-card text-center">
                <div className="card-body">
                    <svg aria-hidden="true" width="96" height="96" viewBox="0 0 96 96"><path d="M78.2 14.36a1.73 1.73 0 011.27-1.85 37.5 37.5 0 017.66-1.5c1.09-.09 1.98.8 1.9 1.89-.21 2.6-.79 5.19-1.56 7.8a1.71 1.71 0 01-1.66 1.28c-4.27-.16-7.08-3.56-7.62-7.62zM34.55 77.77l3.55-2.84-10-11-3.36 2.69c-.89.7-1 2.02-.23 2.86l7.34 8.08c.7.77 1.88.86 2.7.21zM70.1 37.93a7 7 0 100-14 7 7 0 000 14zm-7 7a7 7 0 11-14 0 7 7 0 0114 0z" opacity=".2"></path><path d="M75.5 27a7 7 0 11-14 0 7 7 0 0114 0zm-7 4a4 4 0 100-8 4 4 0 000 8zm-14 17a7 7 0 100-14 7 7 0 000 14zm4-7a4 4 0 11-8 0 4 4 0 018 0zM27.21 70.41l2.93 3.23a3.47 3.47 0 004.74.37l2.82-2.25c.95.34 2.03.25 2.95-.33.8-.51 1.95-1.26 3.35-2.2v8.29c0 3.02 3.6 4.6 5.82 2.56l8.25-7.56a3.5 3.5 0 001.03-1.77l3.84-16.33c1.7-1.53 3.4-3.13 5.08-4.8 11.26-11.2 22.04-25.83 22.92-41.56a3.32 3.32 0 00-3.5-3.5c-15.71.86-30.38 11.47-41.59 22.54a161.7 161.7 0 00-5.19 5.4 1.5 1.5 0 00-.54.05l-18.35 4.83c-.74.2-1.4.63-1.87 1.25l-5.18 6.8A3.47 3.47 0 0017.48 51H26c-.83 1.21-1.5 2.2-1.95 2.92a3.42 3.42 0 00.38 4.2l.4.43-2.06 2.06a3.47 3.47 0 00-.11 4.79l2.53 2.79-.75.75a1.5 1.5 0 002.12 2.12l.65-.65zM87.95 7.9c-.17 2.9-.7 5.78-1.53 8.61a9.21 9.21 0 01-5.8-2.27 7.13 7.13 0 01-2.6-4.88 39.23 39.23 0 019.59-1.8c.2 0 .35.15.34.34zM47.96 29.24c7.87-7.77 17.2-15.02 27.15-18.87a10.32 10.32 0 003.54 6.13 12.33 12.33 0 006.8 2.95c-3.8 10.29-11.39 19.93-19.54 28.03A169.1 169.1 0 0139.04 68.9c-.15.1-.37.08-.53-.09l-4.68-5.02 10.73-10.73a1.5 1.5 0 00-2.12-2.12L31.78 61.6l-5.16-5.53a.42.42 0 01-.06-.52 167.03 167.03 0 0121.4-26.31zm-18.3 34.48l-2.35 2.35-2.43-2.69a.47.47 0 01.01-.65l1.99-1.99 2.78 2.98zm-.33 4.57l2.37-2.37 3.64 3.89L33 71.67a.47.47 0 01-.65-.05l-3.03-3.33zM47 67.15c3.38-2.4 7.6-5.56 12.06-9.34l-2.88 12.25a.47.47 0 01-.14.24l-8.25 7.56a.47.47 0 01-.79-.34V67.15zm-9.8-30.73A177.28 177.28 0 0028.11 48H17.48a.47.47 0 01-.37-.76l5.17-6.8a.47.47 0 01.26-.16l14.67-3.86zM14.06 81.44a1.5 1.5 0 010 2.12l-7 7a1.5 1.5 0 01-2.12-2.12l7-7a1.5 1.5 0 012.12 0zm9-6.88a1.5 1.5 0 00-2.12-2.12l-5 5a1.5 1.5 0 002.12 2.12l5-5zm-7-4.12a1.5 1.5 0 010 2.12l-7 7a1.5 1.5 0 01-2.12-2.12l7-7a1.5 1.5 0 012.12 0zm9 12.12a1.5 1.5 0 00-2.12-2.12l-5 5a1.5 1.5 0 002.12 2.12l5-5z"></path></svg>
                    <h5 className="card-title pt-4 pb-2">DevOps engineers</h5>
                    <p className="card-text">This is just a simple text made for this unique and awesome template.</p>
                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end col --> */}
            <div className="col responsive-column-half card card-item case-card text-center">
                <div className="card-body">
                <svg aria-hidden="true" 
                width={96} 
                height={96} 
                // {...props}
                >
                    <path
                    d="M86 26.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm-52 25a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm-15 40a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM72.5 60a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    opacity={0.2}
                    />
                    <path d="M75 17a8 8 0 1 1 6.49 7.86L68.04 50.79A7.98 7.98 0 0 1 63 65a8 8 0 0 1-7.85-9.55l-17-9.84a8 8 0 0 1-8.56 4.27L20.21 75.2a8 8 0 1 1-2.8-1.08l9.38-25.32a8 8 0 1 1 12.19-6.18l17.3 10.02a8 8 0 0 1 9.12-3.27l13.29-25.63A8 8 0 0 1 75 17zm8-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM31 37a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM16 77a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm42-20a5 5 0 1 0 10 0 5 5 0 0 0-10 0z" />
                </svg>
                    <h5 className="card-title pt-4 pb-2">Data scientists</h5>
                    <p className="card-text">This is just a simple text made for this unique and awesome template.</p>
                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end col --> */}
            <div className="col responsive-column-half card card-item case-card text-center case-card-is-active">
                <div className="card-body">
                    <svg aria-hidden="true" width="96" height="96" viewBox="0 0 96 96"><path d="M33.3 60.21a1 1 0 01-.04-1.46l41.1-40.1a1 1 0 01.33-.22l10.83-4.17a1 1 0 011.31 1.25l-3.26 9.78a1 1 0 01-.22.37L43.17 67.8a1 1 0 01-1.4.05l-8.48-7.64zm-9.19 19.02a1 1 0 00.38.98l2.12 1.61a1 1 0 01.11 1.49l-9.1 9.48a3 3 0 01-4.29.04l-5.1-5.1a3 3 0 01.11-4.35l12.5-11.28a1 1 0 011.33-.01l2.38 2.08a1 1 0 01.33.94l-.77 4.12z" opacity=".2"></path><path d="M91.4 5.56a1.5 1.5 0 00-1.87-1.98l-15 5c-.24.07-.44.2-.61.38l-9.2 9.6.26-1.85a1.5 1.5 0 00-.86-1.58l-11-5a1.5 1.5 0 00-1.93.64l-4.51 8.12c-2.16-.21-4.27-.2-6.35 0l-4.52-8.12a1.5 1.5 0 00-1.93-.64l-11 5a1.5 1.5 0 00-.84 1.73l1.77 7.06c-.9.76-1.6 1.62-2.22 2.46-.32.44-.63.9-.93 1.33v.01a245.75 245.75 0 01-.71 1.01l-7.98-2.65a1.5 1.5 0 00-1.85.84l-5 12a1.5 1.5 0 00.77 1.95l8 3.56c-.2 2.27-.2 4.93 0 7.14l-8 3.56a1.5 1.5 0 00-.77 1.95l5 12a1.5 1.5 0 001.85.84l2.58-.86-9.57 8.84a1.5 1.5 0 00-.04 2.16l9 9a1.5 1.5 0 002.12 0l7.77-7.76 10.05 4.57c.73.33 1.6.02 1.96-.7l3.53-7.06c2.19.22 4.34.2 6.45-.02l5.48 7.31c.4.54 1.13.74 1.76.5l10-4c.62-.26 1-.9.93-1.57l-.9-8.13a21 21 0 003.99-4.01l7.06 1.77a1.5 1.5 0 001.73-.84l5-11a1.5 1.5 0 00-.5-1.84L74.1 51.8c.24-2.24.22-4.44 0-6.6l6.28-4.48c.57-.4.78-1.15.52-1.8l-3.59-8.64a1.5 1.5 0 00-.58-.7l8.35-8.53c.14-.14.25-.3.32-.5l6-15zM20.01 68.1c.1-.09.18-.19.25-.3 1 1.46 2.1 2.94 3.55 4.24l-1.67 6.7-.65.64-5.94-5.94a1.5 1.5 0 00-.86-.43l5.32-4.9zM13 74.58c.02.36.17.7.44.98l5.94 5.94L15 85.88l-6.84-6.84L13 74.58zm12.34 3.74l1.62-6.46a1.5 1.5 0 00-.53-1.54c-1.7-1.33-2.8-2.93-4.13-4.86l-.57-.82a1.5 1.5 0 00-1.7-.56l-7.68 2.56-3.9-9.36 7.66-3.4c.6-.28.96-.91.88-1.57a37.6 37.6 0 010-8.61 1.5 1.5 0 00-.88-1.57l-7.66-3.4 3.9-9.37 7.68 2.56c.6.2 1.26 0 1.65-.5.45-.57.86-1.15 1.24-1.7l.22-.32.87-1.24a10.1 10.1 0 012.35-2.43c.5-.36.75-.99.6-1.6l-1.7-6.78 8.6-3.91 4.33 7.79c.3.53.89.84 1.5.76a29.4 29.4 0 017.61 0 1.5 1.5 0 001.51-.76l4.33-7.8 8.72 3.97-.7 4.87-6.23 6.5a14.06 14.06 0 00-4.86-2.61A21.77 21.77 0 0043.5 25C31.49 25 23 34.69 23 46.5c0 11.76 8.53 22.1 20.6 22.1C55.47 68.6 66 58.44 66 46.5a10.2 10.2 0 00-1.14-4.65l-.02-.02a4.72 4.72 0 00-.03-.06l9.84-10.06 3 7.26-6.02 4.3A1.5 1.5 0 0071 44.7c.32 2.5.35 5.04 0 7.61-.07.55.17 1.1.62 1.42l6 4.28-3.98 8.74-6.79-1.7a1.5 1.5 0 00-1.54.53c-1.66 2.12-2.65 3.29-4.68 4.7-.45.31-.7.85-.63 1.4l.87 7.86L53 82.69l-5.31-7.08a1.5 1.5 0 00-1.39-.59c-2.5.32-5.04.35-7.61 0a1.5 1.5 0 00-1.54.82l-3.36 6.7-8.32-3.78a1.5 1.5 0 00-.14-.43zm37.38-53.34a1.5 1.5 0 001.26-1.27l.01-.06 10.54-11 7.36 7.36-43.73 44.7a17.18 17.18 0 01-8-5.76l32.56-33.97zM49.1 29c1.62.55 2.93 1.23 3.74 1.94L28.47 56.38A20.59 20.59 0 0126 46.5C26 36.14 33.34 28 43.5 28c1.58 0 3.68.35 5.61 1zm-5.52 36.6c-.67 0-1.34-.04-1.99-.11l20.96-21.43.02.04v.02c.21.59.42 1.42.42 2.38 0 10.23-9.12 19.1-19.4 19.1zm39.86-48.27l-6.42-6.42L87.4 7.45l-3.96 9.88z"></path></svg>
                    <h5 className="card-title pt-4 pb-2">Software engineers</h5>
                    <p className="card-text">This is just a simple text made for this unique and awesome template.</p>
                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end col --> */}
            <div className="col responsive-column-half card card-item case-card text-center">
                <div className="card-body">
                <svg aria-hidden="true"
                 width={96} 
                 height={96} 
                //  {...props}
                 >
                    <path
                    d="M67.37 12.9A38.67 38.67 0 0 0 50.8 9a38.02 38.02 0 0 0-16.47 3.9c-.38.3-.44.74-.19 1.2l4.74 7.49c.24.35.79.61 1.29.6.1-.01.21-.04.32-.07 1.01-.29 6.76-1.88 10.4-1.88 3.7 0 9.6 1.65 10.45 1.9.07.02.14.04.22.04.44.05 1-.15 1.25-.6l4.73-7.49c.26-.44.2-.9-.18-1.18zM19 77.5a7.84 7.84 0 0 0 7.79 7.88 3.98 3.98 0 0 0 3.93-3.9v-18.5A4 4 0 0 0 26.8 59a7.84 7.84 0 0 0-7.8 7.89v10.6zm57.94 6.88c4.3 0 7.78-3.54 7.78-7.89V65.9a7.84 7.84 0 0 0-7.78-7.9A4 4 0 0 0 73 61.99v18.5a3.98 3.98 0 0 0 3.94 3.89zM49 92h6a3 3 0 0 0 0-6h-6a3 3 0 0 0 0 6z"
                    opacity={0.2}
                    />
                    <path d="M54.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM50 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM42.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM11 43.69a37.1 37.1 0 0 1 19.3-32.54l1.99 2.93C20.7 19.81 13.95 30.6 13.95 44.57a1.5 1.5 0 0 0 3 0c0-13 6.27-22.8 17-27.96l.05-.02 1.66 2.44c.38.57 1.1.8 1.74.57a34.63 34.63 0 0 1 11.47-1.97c4.03 0 7.94.63 11.45 1.96.66.25 1.4 0 1.79-.58l1.33-2.06c10.35 5.35 16.59 14.92 16.59 27.62a1.5 1.5 0 0 0 3 0c0-13.74-6.78-24.26-17.95-30.14l1.99-3.06A37.8 37.8 0 0 1 75 17.41a36.77 36.77 0 0 1 11 26.28V64h-3v-1.23c0-5.26-4.7-9.27-10.13-9.27-3.06 0-5.87 2.31-5.87 5.43v18.23c0 3.05 2.83 5.34 5.87 5.34.2 0 .4 0 .59-.02-.07.39-.21.77-.4 1.06-.28.43-.5.46-.56.46H54.74a4.5 4.5 0 0 0-4.24-3h-6a4.5 4.5 0 0 0 0 9h6a4.5 4.5 0 0 0 4.24-3H72.5a3.7 3.7 0 0 0 3.07-1.83c.6-.92.93-2.08.93-3.17v-.03a1.78 1.78 0 0 0 0-.09c3.74-1.32 6.5-4.62 6.5-8.65V73h4.33c2.46 0 4.17-2.19 4.17-4.5 0-1.74-.97-3.41-2.5-4.13V43.69c0-11.12-4.5-21.1-11.88-28.41A40.39 40.39 0 0 0 48.5 3.5C26.1 3.5 8 21.45 8 43.69v20.48a4.5 4.5 0 0 0-3 4.33C5 70.81 6.7 73 9.17 73H13v.23c0 5.26 4.7 9.27 10.13 9.27 3.04 0 5.87-2.3 5.87-5.34V58.93c0-3.12-2.8-5.43-5.87-5.43C17.7 53.5 13 57.51 13 62.77V64h-2V43.69zM37.5 16.4 33 9.8a37.72 37.72 0 0 1 15.5-3.3 37.5 37.5 0 0 1 15.89 3.49l-4.16 6.39a37.63 37.63 0 0 0-22.73.03zm14.25 68.26a1.5 1.5 0 0 0 0 1.66c-.27.4-.73.67-1.25.67h-6a1.5 1.5 0 0 1 0-3h6c.52 0 .98.27 1.25.67zM23.13 56.5c1.7 0 2.87 1.26 2.87 2.43v18.23c0 1.06-1.14 2.34-2.87 2.34-4.08 0-7.13-2.96-7.13-6.27V62.77c0-3.31 3.05-6.27 7.13-6.27zM9.17 67H13v3H9.17C8.69 70 8 69.5 8 68.5S8.69 67 9.17 67zM70 58.93c0-1.17 1.16-2.43 2.87-2.43 4.08 0 7.13 2.96 7.13 6.27v10.46c0 3.31-3.05 6.27-7.13 6.27-1.73 0-2.87-1.28-2.87-2.34V58.93zM83.5 70v-3h3.83c.48 0 1.17.5 1.17 1.5s-.69 1.5-1.17 1.5H83.5z" />
                </svg>
                    <h5 className="card-title pt-4 pb-2">Support teams</h5>
                    <p className="card-text">This is just a simple text made for this unique and awesome template.</p>
                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end col --> */}
            <div className="col responsive-column-half card card-item case-card text-center">
                <div className="card-body">
                    <svg aria-hidden="true" width="96" height="96" viewBox="0 0 96 96"><path opacity=".2" d="M36 47.5a9.48 9.48 0 01-3.67 7.5h5.76a1 1 0 01.7.29l1.39 1.36A9.5 9.5 0 0157.87 54h7.7a9.5 9.5 0 1113.86 0H83a4 4 0 014 4v23a2 2 0 01-2 2H64v10a1 1 0 01-1 1H36a1 1 0 01-1-1V83H16a1 1 0 01-1-1V59a4 4 0 014-4h1.67a9.48 9.48 0 015.83-17 9.5 9.5 0 019.5 9.5z"></path><path d="M13 44.5A11 11 0 1130.98 53h.52a1.5 1.5 0 010 3H15.54C13.5 56 12 57.54 12 59.21V78h4.38a1.5 1.5 0 01-.38-1V63a1.5 1.5 0 013 0v14c0 .38-.14.73-.38 1h9.06a1.5 1.5 0 010 3H10.5A1.5 1.5 0 019 79.5V59.21c0-3.5 3.03-6.21 6.54-6.21h1.48A10.98 10.98 0 0113 44.5zm11-8a8 8 0 100 16 8 8 0 000-16zm23 8A11 11 0 0040.02 64h-1.33C35.12 64 32 66.73 32 70.3v20.2c0 .83.67 1.5 1.5 1.5h27c.83 0 1.5-.67 1.5-1.5V70.3c0-3.57-3.12-6.3-6.7-6.3h-1.32A11 11 0 0047 44.5zm-8 11a8 8 0 1116 0 8 8 0 01-16 0zm-4 14.8c0-1.7 1.55-3.3 3.7-3.3h16.6c2.15 0 3.7 1.6 3.7 3.3V89h-4V75a1.5 1.5 0 00-3 0v14H42V75a1.5 1.5 0 00-3 0v14h-4V70.3zm35-36.8A11 11 0 0176.98 53h1.7A6.28 6.28 0 0185 59.21V79.5c0 .83-.67 1.5-1.5 1.5H66.32a1.5 1.5 0 010-3h8.06a1.5 1.5 0 01-.38-1V63a1.5 1.5 0 013 0v14c0 .38-.14.73-.38 1H82V59.21A3.28 3.28 0 0078.68 56H62.5a1.5 1.5 0 010-3h.52A11 11 0 0170 33.5zm8 11a8 8 0 10-16 0 8 8 0 0016 0z"></path><path d="M12.5 11a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13zM11 17.5c0-.83.67-1.5 1.5-1.5h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 01-1.5-1.5zm-5-10C6 6.67 6.67 6 7.5 6h25c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5H29v6a1.5 1.5 0 01-2.4 1.2L17 24H7.5A1.5 1.5 0 016 22.5v-15zM9 9v12h8.5c.32 0 .64.1.9.3L26 27v-6h5V9H9zm60.5 3a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13zM68 18.5c0-.83.67-1.5 1.5-1.5h8a1.5 1.5 0 010 3h-8a1.5 1.5 0 01-1.5-1.5zM87.5 7c.83 0 1.5.67 1.5 1.5v16c0 .83-.67 1.5-1.5 1.5H76.42l-7.15 4.29A1.5 1.5 0 0167 29v-3h-2.5a1.5 1.5 0 01-1.5-1.5v-16c0-.83.67-1.5 1.5-1.5h23zM86 23V10H66v13h4v3.35l5.23-3.14c.23-.14.5-.21.77-.21h10zm-42.5 4a1.5 1.5 0 000 3h9a1.5 1.5 0 000-3h-9zM59 22.5c0-.83-.67-1.5-1.5-1.5h-19c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5H41v4.5a1.5 1.5 0 002.56 1.06L49.12 36h8.38c.83 0 1.5-.67 1.5-1.5v-12zM40 24h16v9h-8.12L44 36.88V33h-4v-9z" opacity=".35"></path></svg>
                    <h5 className="card-title pt-4 pb-2">Engineering leaders</h5>
                    <p className="card-text">This is just a simple text made for this unique and awesome template.</p>
                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END INFO AREA
================================= --> */}

<hr className="border-top-gray" />

{/* <!-- ================================
         START PACKAGE AREA
================================= --> */}
<section className="package-area section--padding bg-vertical-gradient-gray">
    <div className="container">
        <div className="text-center">
            <h2 className="section-title pb-3">Unlock siloed knowledge with <br /> Forums for Teams</h2>
            <p className="section-desc w-50 mx-auto pb-4">This is just a simple text made for this unique and awesome template,
                you can replace it with any text.
            </p>
            <div className="toggle-switch d-inline-flex align-items-center" data-toggle="tooltip" data-placement="top" title="Discount available if billed annually">
                <span className="fs-14 mr-1">Monthly</span>
                <input type="checkbox" className="toggle-input"/>
                <span className="fs-14 ml-1">Yearly</span>
            </div>
        </div>
        <div className="row pt-60px">
            <div className="col-lg-4 responsive-column-half">
                <div className="card card-item">
                    <div className="card-body">
                        <h5 className="bg-gray fs-20 py-2 px-4 rounded-rounded d-inline-block">Basic</h5>
                        <p className="card-text pt-3 pb-5">Private knowledge base for teams</p>
                        <div className="card-price border-bottom border-bottom-gray mb-4 pb-4">
                            <span className="price-month fs-35 fw-bold text-black">$7 USD</span>
                            <span className="price-year fs-35 fw-bold text-black d-none">$6 USD</span>
                            <p className="card-text pt-1 fs-15">per teammate / month</p>
                        </div>
                        <ul className="generic-list-item package-list pb-4">
                            <li><i className="la la-check text-success"></i> Free 30 day trial</li>
                            <li><i className="la la-check text-success"></i> ChatOps integrations - Slack & Microsoft Teams</li>
                            <li><i className="la la-check text-success"></i> Your own private space hosted on Forums.com</li>
                            <li><i className="la la-check text-success"></i> Fully searchable archive</li>
                        </ul>
                        <Link to="#" className="btn theme-btn theme-btn-outline w-100">Start your free trial <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
                {/* <!-- end card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="card card-item">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <h5 className="bg-gray fs-20 py-2 px-4 rounded-rounded d-inline-block">Business</h5>
                            <span className="badge badge-success py-1 px-2 fs-13">Most used</span>
                        </div>
                        <p className="card-text pt-3 pb-5">Private knowledge base with SSO and premium features</p>
                        <div className="card-price border-bottom border-bottom-gray mb-4 pb-4">
                            <span className="price-month fs-35 fw-bold text-black">$14 USD</span>
                            <span className="price-year fs-35 fw-bold text-black d-none">$12 USD</span>
                            <p className="card-text pt-1 fs-15">per teammate / month</p>
                        </div>
                        <ul className="generic-list-item package-list pb-4">
                            <li><i className="la la-check text-success"></i> Long-form knowledge with Articles</li>
                            <li><i className="la la-check text-success"></i> Additional integrations — ChatOps, Jira, GitHub & Okta</li>
                            <li><i className="la la-check text-success"></i> Group content together into Collections</li>
                            <li><i className="la la-check text-success"></i> Single sign-on (SSO) with SAML</li>
                            <li><i className="la la-check text-success"></i> Reporting and analytics</li>
                            <li><i className="la la-check text-success"></i> Priority customer support</li>
                            <li><i className="la la-check text-success"></i> 99.5% uptime</li>
                        </ul>
                        <Link to="#" className="btn theme-btn w-100">Get started <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
                {/* <!-- end card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column-half">
                <div className="card card-item">
                    <div className="card-body">
                        <h5 className="bg-gray fs-20 py-2 px-4 rounded-rounded d-inline-block">Enterprise</h5>
                        <p className="card-text pt-3 pb-5">Standalone knowledge base with enhanced security and flexible hosting</p>
                        <div className="card-price border-bottom border-bottom-gray mb-4 pb-4">
                            <span className="fs-35 fw-bold text-black">Custom pricing</span>
                            <p className="card-text pt-1 fs-15">Let’s talk about what you need</p>
                        </div>
                        <ul className="generic-list-item package-list pb-4">
                            <li><i className="la la-check text-success"></i> Premium features of Business plus...</li>
                            <li><i className="la la-check text-success"></i> ChatOps, Jira, GitHub & Okta integrations</li>
                            <li><i className="la la-check text-success"></i> Unlimited Teams within your instance</li>
                            <li><i className="la la-check text-success"></i> Single sign-on with AD or SAML</li>
                            <li><i className="la la-check text-success"></i> Flexible hosting options — cloud or on-premises</li>
                            <li><i className="la la-check text-success"></i> Robust read and write API</li>
                            <li><i className="la la-check text-success"></i> Your own customer success and community building representative</li>
                            <li><i className="la la-check text-success"></i> 99.5% uptime SLA and priority support</li>
                        </ul>
                        <Link to="#" className="btn theme-btn theme-btn-outline w-100">Request a demo <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
                {/* <!-- end card --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END PACKAGE AREA
================================= --> */}

{/* <!-- ================================
         START TESTIMONIAL AREA
================================= --> */}
<section className="testimonial-area section--padding">
    <div className="container">
        <div className="testimonial-carousel owl-carousel owl-theme owl-action-styled">
            <div className="carousel-card text-center">
                <p className="section-desc w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa deserunt dolor ea iure iusto magnam minima, recusandae sequi sunt? Corporis delectus deserunt dicta exercitationem ipsum, iusto magnam minus molestias numquam perspiciatis porro provident quae rem. Placeat saepe, sed. Vitae?</p>
                <div className="divider bg-transparent my-4"><span className="mx-auto"></span></div>
                <h3 className="pb-1 fs-17">Director of Product Management</h3>
                <span>Microsoft</span>
            </div>
            {/* <!-- end carousel-card --> */}
            <div className="carousel-card text-center">
                <p className="section-desc w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa deserunt dolor ea iure iusto magnam minima, recusandae sequi sunt? Corporis delectus deserunt dicta exercitationem ipsum, iusto magnam minus molestias numquam perspiciatis porro provident quae rem. Placeat saepe, sed. Vitae?</p>
                <div className="divider bg-transparent my-4"><span className="mx-auto"></span></div>
                <h3 className="pb-1 fs-17">Director of Engineering</h3>
                <span>Elastic Cloud</span>
            </div>
            {/* <!-- end carousel-card --> */}
        </div>
        {/* <!-- end owl-carousel --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END TESTIMONIAL AREA
================================= --> */}

<hr className="border-top-gray"/>

{/* <!-- ================================
         START CTA AREA
================================= --> */}
<section className="get-started-area section--padding pattern-bg">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <div className="info-box text-center">
                    <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                    <svg
                    className="svg-icon-color-1"
                    width={42}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 480"
                    xmlSpace="preserve"
                    // {...props}
                >
                    <path d="M240 0c-26.51 0-48 21.49-48 48s21.49 48 48 48c26.499-.026 47.974-21.501 48-48 0-26.51-21.49-48-48-48zm0 80c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32zM272 104h-1.888l-1.688.84a63.773 63.773 0 0 1-56.848 0l-1.688-.84H208c-22.08.026-39.974 17.92-40 40v48c0 13.255 10.745 24 24 24h96c13.255 0 24-10.745 24-24v-48c-.026-22.08-17.92-39.974-40-40zm24 88a8 8 0 0 1-8 8h-96a8 8 0 0 1-8-8v-48c.002-12.592 9.735-23.042 22.296-23.936a80.061 80.061 0 0 0 67.408 0c12.56.894 22.294 11.344 22.296 23.936v48zM408 264c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c-.026-26.499-21.501-47.974-48-48zm0 80c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zM440 368h-1.888l-1.688.8a63.78 63.78 0 0 1-56.848 0l-1.688-.8H376c-22.08.026-39.974 17.92-40 40v48c0 13.255 10.745 24 24 24h96c13.255 0 24-10.745 24-24v-48c-.026-22.08-17.92-39.974-40-40zm24 88a8 8 0 0 1-8 8h-96a8 8 0 0 1-8-8v-48c.002-12.592 9.735-23.042 22.296-23.936a80.061 80.061 0 0 0 67.408 0c12.561.894 22.294 11.344 22.296 23.936v48zM72 264c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c-.026-26.499-21.501-47.974-48-48zm0 80c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32zM104 368h-1.888l-1.688.8a63.78 63.78 0 0 1-56.848 0l-1.688-.8H40c-22.08.026-39.974 17.92-40 40v48c0 13.255 10.745 24 24 24h96c13.255 0 24-10.745 24-24v-48c-.026-22.08-17.92-39.974-40-40zm24 88a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-48c.002-12.592 9.735-23.042 22.296-23.936a80.061 80.061 0 0 0 67.408 0c12.561.894 22.294 11.344 22.296 23.936v48zM319.372 406.276l-.012-.028a8 8 0 0 0-10.495-4.224 177.456 177.456 0 0 1-114.104 7.856l7.488-2.2c4.242-1.242 6.674-5.686 5.432-9.928s-5.686-6.674-9.928-5.432l-32 9.384c-.12 0-.208.136-.32.176a7.928 7.928 0 0 0-2.064 1.144c-.278.15-.545.318-.8.504a7.75 7.75 0 0 0-1.96 2.72 8.012 8.012 0 0 0-.608 3.304c.195 1.083.462 2.152.8 3.2.048.112 0 .24.088.352l16 30.616a8.004 8.004 0 1 0 14.192-7.408l-6.512-12.448a192.565 192.565 0 0 0 130.552-7.104 8 8 0 0 0 4.251-10.484zM453.656 210.344a8 8 0 0 0-11.312 0l-11.32 11.32c-6.624-70.07-51.111-130.876-115.888-158.4a8 8 0 1 0-6.272 14.72c58.11 24.697 98.504 78.669 105.816 141.384l-9.024-9.024a8 8 0 0 0-11.312 11.312l24 24a8 8 0 0 0 11.314.014l.014-.014 24-24a8 8 0 0 0-.016-11.312zM175.768 69.272a7.439 7.439 0 0 0-.208-1.384c0-.072-.088-.12-.12-.2-.032-.08 0-.136 0-.2a7.673 7.673 0 0 0-.752-1.104 8.076 8.076 0 0 0-.912-1.32 7.508 7.508 0 0 0-1.56-1.064 7.037 7.037 0 0 0-.896-.648l-32-14.616a8 8 0 0 0-6.64 14.544l16.568 7.576C86.875 104.237 47.955 169.256 48 240a8 8 0 0 0 16 0c-.04-62.293 32.901-119.952 86.584-151.552l-5.784 12.088a8 8 0 0 0 3.736 10.664 7.876 7.876 0 0 0 3.464.8 8 8 0 0 0 7.2-4.536l16-33.384c0-.08 0-.168.064-.248a7.693 7.693 0 0 0 .432-1.696c.137-.431.239-.872.304-1.32a7.977 7.977 0 0 0-.232-1.544z" />
                </svg>
                    </div>
                    <div className="info-body">
                        <h5 className="pb-4 fs-28 fw-bold">Hire your technical talent</h5>
                        <p className="pb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                        <Link to="talent.html" className="btn theme-btn">Forums Talent <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-5 --> */}
            <div className="col-lg-2">
                <div className="icon-element shadow-sm mx-auto mb-4">Or</div>
            </div>
            <div className="col-lg-5">
                <div className="info-box text-center">
                    <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                    <svg
                        className="svg-icon-color-2"
                        width={42}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        // {...props}
                    >
                        <path d="m500.71 446.149-92.7-92.7c2.548-3.879 2.118-9.141-1.293-12.552-3.41-3.41-8.674-3.841-12.552-1.293l-24.737-24.737c18.489-27.447 30.128-59.238 33.495-92.395 4.611-45.412-6.37-91.445-30.92-129.622-2.987-4.645-9.174-5.988-13.818-3.002-4.644 2.987-5.988 9.174-3.002 13.818 45.911 71.392 35.6 166.844-24.517 226.961-70.95 70.95-186.394 70.95-257.345 0-70.95-70.949-70.95-186.393 0-257.344 60.181-60.181 152.594-70.842 224.73-25.931 4.686 2.917 10.853 1.485 13.772-3.203 2.919-4.687 1.484-10.853-3.203-13.772-38.068-23.7-83.719-34.07-128.552-29.203C134.551 6.117 91.62 26.705 59.18 59.143c-78.746 78.747-78.746 206.878 0 285.624 39.374 39.374 91.093 59.06 142.813 59.06 39.403 0 78.798-11.44 112.741-34.292l24.613 24.613c-3.698 3.918-3.639 10.089.195 13.924a9.966 9.966 0 0 0 7.07 2.929c2.468 0 4.93-.917 6.854-2.733l92.563 92.563c7.45 7.45 17.244 11.169 27.065 11.169 9.911 0 19.85-3.791 27.423-11.364 15.074-15.076 15.162-39.519.193-54.487zm-165.344-84.26 26.402-26.402 18.11 18.11-26.402 26.402-18.11-18.11zm151.01 124.607c-7.28 7.279-19.036 7.367-26.207.194l-92.553-92.553 26.402-26.402 92.552 92.553c7.172 7.173 7.085 18.929-.194 26.208z" />
                        <path d="m345.044 59.381-.217-.217c-3.892-3.916-10.223-3.935-14.14-.043-3.916 3.892-3.936 10.223-.043 14.14l.26.261c1.953 1.953 4.511 2.929 7.07 2.929s5.118-.976 7.07-2.929c3.904-3.904 3.904-10.235 0-14.141zM201.993 47.981c-84.902 0-153.975 69.073-153.975 153.975s69.073 153.975 153.975 153.975 153.975-69.073 153.975-153.975S286.895 47.981 201.993 47.981zm0 287.953c-73.876 0-133.978-60.102-133.978-133.978S128.117 67.978 201.993 67.978s133.978 60.102 133.978 133.978-60.102 133.978-133.978 133.978z" />
                        <path d="M240.041 188.963c6.228-8.096 9.944-18.22 9.944-29.201v-13.096c0-26.463-21.529-47.992-47.992-47.992s-47.992 21.529-47.992 47.992v13.096c0 10.981 3.715 21.106 9.944 29.201-31.8 5.997-55.937 33.966-55.937 67.484v5.166c0 5.522 4.476 9.998 9.998 9.998h167.972c5.522 0 9.998-4.476 9.998-9.998v-5.166c.002-33.517-24.135-61.486-55.935-67.484zm-66.043-42.297c0-15.436 12.559-27.995 27.995-27.995s27.995 12.559 27.995 27.995v13.096c0 15.436-12.559 27.995-27.995 27.995s-27.995-12.559-27.995-27.995v-13.096zm-45.755 104.948c2.434-24.589 23.236-43.86 48.455-43.86h50.591c25.219 0 46.021 19.271 48.455 43.86H128.243zM442.305 11.987c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.521 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998V21.986c0-5.523-4.476-9.999-9.998-9.999zM442.305 71.547c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.522 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998V81.546c0-5.522-4.476-9.999-9.998-9.999zM478.299 47.981h-12.428c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.476-9.998-9.998-9.998zM418.738 47.981H406.31c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.475-9.998-9.998-9.998zM61.937 412.008c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.522 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998v-12.428c0-5.522-4.476-9.998-9.998-9.998zM61.937 471.568c-5.522 0-9.998 4.476-9.998 9.998v12.428c0 5.522 4.476 9.998 9.998 9.998s9.998-4.476 9.998-9.998v-12.428c0-5.522-4.476-9.998-9.998-9.998zM97.931 448.002H85.503c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.476-9.998-9.998-9.998zM38.371 448.002H25.943c-5.522 0-9.998 4.476-9.998 9.998s4.476 9.998 9.998 9.998h12.428c5.522 0 9.998-4.476 9.998-9.998s-4.476-9.998-9.998-9.998z" />
                    </svg>
                    </div>
                    <div className="info-body">
                        <h5 className="pb-4 fs-28 fw-bold">Reach developers worldwide</h5>
                        <p className="pb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                        <Link to="advertising.html" className="btn theme-btn">Forums Advertising <i className="la la-arrow-right icon ml-1"></i></Link>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-5 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END CTA AREA
================================= --> */}

<hr className="border-top-gray" />

{/* <!-- ================================
         START CTA AREA
================================= --> */}
<section className="get-started-area section--padding">
    <div className="container">
        <div className="text-center">
            <h2 className="section-title">Learn and grow with Forums</h2>
        </div>
        <div className="row pt-50px">
            <div className="col-lg-3 responsive-column-half">
                <div className="info-box px-2">
                    <div className="icon-element icon-element-lg mb-4 shadow-sm">
                        <svg className="svg-icon-color-1" width="40" viewBox="0 -25 424 424" xmlns="http://www.w3.org/2000/svg"><path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"/><path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"/><path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"/><path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"/><path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"/><path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/><path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"/><path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/></svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Write the script of the future</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="info-box px-2">
                    <div className="icon-element icon-element-lg mb-4 shadow-sm">
                        <svg className="svg-icon-color-2" width="40" viewBox="0 0 569 569.54905" xmlns="http://www.w3.org/2000/svg"><path d="m1.527344 52.246094 37.984375 66.46875c1.28125 2.246094 3.425781 3.871094 5.933593 4.5l35.4375 8.859375 121.542969 121.542969 13.429688-13.425782-123.445313-123.441406c-1.214844-1.21875-2.738281-2.082031-4.40625-2.5l-34.050781-8.542969-32.339844-56.625 27.726563-27.726562 56.648437 32.371093 8.546875 34.050782c.414063 1.671875 1.28125 3.199218 2.496094 4.414062l123.445312 123.445313 13.425782-13.429688-121.542969-121.542969-8.859375-35.417968c-.628906-2.511719-2.253906-4.660156-4.5-5.945313l-66.472656-37.980469c-3.707032-2.109374-8.371094-1.484374-11.394532 1.527344l-37.980468 37.984375c-3.0546878 3.003907-3.71875 7.675781-1.625 11.414063zm0 0"/><path d="m396.3125 187.144531-208.902344 208.90625-13.429687-13.429687 208.90625-208.902344zm0 0"/><path d="m150.847656 403.441406c-1.71875-2.859375-4.804687-4.605468-8.140625-4.605468h-56.972656c-3.332031 0-6.421875 1.746093-8.136719 4.605468l-28.488281 47.476563c-1.808594 3.007812-1.808594 6.769531 0 9.78125l28.488281 47.476562c1.714844 2.855469 4.804688 4.605469 8.136719 4.605469h56.972656c3.335938 0 6.421875-1.75 8.140625-4.605469l28.484375-47.476562c1.808594-3.011719 1.808594-6.773438 0-9.78125zm-13.511718 90.347656h-46.226563l-22.789063-37.980468 22.789063-37.984375h46.226563l22.789062 37.984375zm0 0"/><path d="m456.0625 227.914062c62.714844.210938 113.730469-50.460937 113.941406-113.175781.03125-9.546875-1.140625-19.054687-3.488281-28.308593-1.265625-5.089844-6.417969-8.1875-11.507813-6.921876-1.671874.417969-3.195312 1.28125-4.414062 2.496094l-59.109375 59.070313-46.898437-15.628907-15.640626-46.886718 59.109376-59.121094c3.707031-3.710938 3.703124-9.722656-.007813-13.429688-1.222656-1.222656-2.761719-2.089843-4.445313-2.503906-60.820312-15.402344-122.605468 21.414063-138.007812 82.230469-2.339844 9.226563-3.507812 18.710937-3.476562 28.230469.023437 7.476562.792968 14.929687 2.308593 22.25l-207.957031 207.953125c-7.320312-1.511719-14.773438-2.28125-22.246094-2.308594-62.933594 0-113.949218 51.015625-113.949218 113.949219 0 62.929687 51.015624 113.945312 113.949218 113.945312 62.929688 0 113.945313-51.015625 113.945313-113.945312-.023438-7.476563-.796875-14.929688-2.308594-22.25l49.785156-49.785156 21.773438 21.773437c3.710937 3.707031 9.71875 3.707031 13.429687 0l4.746094-4.75c4.164062-4.136719 10.894531-4.136719 15.058594 0 4.160156 4.148437 4.167968 10.882813.019531 15.042969-.003906.003906-.011719.011718-.019531.019531l-4.746094 4.746094c-3.707031 3.707031-3.707031 9.71875 0 13.425781l113.273438 113.273438c29.792968 30.066406 78.316406 30.285156 108.382812.492187 30.0625-29.792969 30.28125-78.320313.488281-108.382813-.160156-.164062-.324219-.328124-.488281-.492187l-113.273438-113.269531c-3.707031-3.707032-9.71875-3.707032-13.425781 0l-4.746093 4.746094c-4.167969 4.140624-10.894532 4.140624-15.0625 0-4.15625-4.148438-4.167969-10.882813-.019532-15.039063.007813-.007813.015625-.011719.019532-.019531l4.75-4.75c3.707031-3.707032 3.707031-9.71875 0-13.425782l-21.773438-21.773437 49.785156-49.785156c7.320313 1.511719 14.773438 2.285156 22.246094 2.308593zm37.308594 322.851563c-6.898438-.011719-13.738282-1.257813-20.195313-3.683594l74.160157-74.164062c11.191406 29.769531-3.867188 62.972656-33.636719 74.164062-6.496094 2.441407-13.382813 3.691407-20.328125 3.683594zm-107.574219-246.792969c-10.515625 12.542969-8.867187 31.238282 3.675781 41.75 11.023438 9.238282 27.089844 9.230469 38.101563-.027344l106.5625 106.65625c1.15625 1.160157 2.238281 2.382813 3.285156 3.625l-81.1875 81.1875c-1.246094-1.042968-2.46875-2.125-3.628906-3.285156l-106.644531-106.652344c10.515624-12.542968 8.867187-31.238281-3.675782-41.75-11.023437-9.242187-27.09375-9.230468-38.105468.023438l-15.191407-15.191406 81.613281-81.492188zm38.34375-95.503906-215.410156 215.367188c-2.363281 2.359374-3.3125 5.785156-2.507813 9.023437 13.027344 51.160156-17.886718 103.195313-69.050781 116.21875-51.160156 13.027344-103.195313-17.886719-116.222656-69.050781-13.023438-51.160156 17.890625-103.195313 69.054687-116.222656 15.476563-3.9375 31.691406-3.9375 47.167969 0 3.238281.792968 6.65625-.15625 9.023437-2.503907l215.359376-215.371093c2.359374-2.359376 3.308593-5.785157 2.496093-9.019532-12.9375-50.5625 17.5625-102.039062 68.125-114.980468 9.554688-2.441407 19.4375-3.378907 29.28125-2.765626l-50.089843 50.109376c-2.542969 2.539062-3.433594 6.300781-2.296876 9.710937l18.988282 56.976563c.949218 2.832031 3.175781 5.058593 6.011718 6l56.976563 18.992187c3.40625 1.136719 7.167969.25 9.710937-2.289063l50.089844-50.089843c.113282 1.8125.171875 3.605469.171875 5.390625.265625 52.175781-41.8125 94.6875-93.988281 94.957031-8.066406.039063-16.105469-.953125-23.917969-2.953125-3.238281-.808594-6.664062.136719-9.023437 2.496094h.050781zm0 0"/><path d="m491.273438 477.578125-13.429688 13.429687-94.953125-94.953124 13.425781-13.429688zm0 0"/></svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Support open source</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="info-box px-2">
                    <div className="icon-element icon-element-lg mb-4 shadow-sm">
                    <svg
                    className="svg-icon-color-3"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    // {...props}
                >
                    <path d="M346 319c-5.522 0-10 4.477-10 10v69c0 27.57-22.43 50-50 50H178.032c-5.521 0-9.996 4.473-10 9.993l-.014 19.882-23.868-23.867a10.003 10.003 0 0 0-9.171-6.008H70c-27.57 0-50-22.43-50-50V244c0-27.57 22.43-50 50-50h101c5.522 0 10-4.477 10-10s-4.478-10-10-10H70c-38.598 0-70 31.402-70 70v154c0 38.598 31.402 70 70 70h59.858l41.071 41.071a9.997 9.997 0 0 0 10.894 2.169 10 10 0 0 0 6.177-9.233l.024-34.007H286c38.598 0 70-31.402 70-70v-69c0-5.523-4.478-10-10-10z" />
                    <path d="M366.655 0h-25.309C261.202 0 196 65.202 196 145.346s65.202 145.345 145.345 145.345h25.309c12.509 0 24.89-1.589 36.89-4.729l37.387 37.366A10 10 0 0 0 458 316.255v-57.856c15.829-12.819 28.978-29.012 38.206-47.102C506.687 190.751 512 168.562 512 145.346 512 65.202 446.798 0 366.655 0zm75.328 245.535a10.003 10.003 0 0 0-3.983 7.988v38.6l-24.471-24.458a10.003 10.003 0 0 0-10.006-2.485c-11.903 3.658-24.307 5.512-36.868 5.512h-25.309c-69.117 0-125.346-56.23-125.346-125.346S272.23 20 341.346 20h25.309C435.771 20 492 76.23 492 145.346c0 39.731-18.23 76.249-50.017 100.189z" />
                    <path d="M399.033 109.421c-1.443-20.935-18.319-37.811-39.255-39.254-11.868-.815-23.194 3.188-31.863 11.281-8.55 7.981-13.453 19.263-13.453 30.954 0 5.523 4.478 10 10 10s10-4.477 10-10c0-6.259 2.522-12.06 7.1-16.333 4.574-4.269 10.552-6.382 16.842-5.948 11.028.76 19.917 9.649 20.677 20.676.768 11.137-6.539 20.979-17.373 23.403-8.778 1.964-14.908 9.592-14.908 18.549v24.025c0 5.523 4.478 10 10 10 5.523 0 10-4.477 9.999-10v-23.226c20.15-4.868 33.669-23.306 32.234-44.127zM363.87 209.26c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93a10.076 10.076 0 0 0-2.93 7.07c0 2.64 1.071 5.22 2.93 7.08 1.86 1.86 4.44 2.92 7.07 2.92s5.21-1.06 7.07-2.92a10.1 10.1 0 0 0 2.93-7.08c0-2.63-1.071-5.21-2.93-7.07zM275 310H64c-5.522 0-10 4.477-10 10s4.478 10 10 10h211c5.523 0 10-4.477 10-10s-4.478-10-10-10zM282.069 368.93C280.21 367.07 277.63 366 275 366s-5.21 1.07-7.07 2.93c-1.861 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.07c1.86 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93A10.055 10.055 0 0 0 285 376c0-2.63-1.071-5.21-2.931-7.07zM235.667 366H64c-5.522 0-10 4.477-10 10s4.478 10 10 10h171.667c5.523 0 10-4.477 10-10s-4.478-10-10-10zM210 254H64c-5.522 0-10 4.477-10 10s4.478 10 10 10h146c5.523 0 10-4.477 10-10s-4.478-10-10-10z" />
                </svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Acquire and share knowledge</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="info-box px-2">
                    <div className="icon-element icon-element-lg mb-4 shadow-sm">
                        <svg className="svg-icon-color-4" width="40" viewBox="-26 0 512 512.001" xmlns="http://www.w3.org/2000/svg"><path d="m457.085938 68.828125-21.878907-19.265625 21.878907-19.261719c3.402343-3 4.566406-7.675781 2.96875-11.917969-1.605469-4.246093-5.570313-6.988281-10.105469-6.988281h-90.539063v-3.890625c0-4.144531-3.359375-7.503906-7.503906-7.503906s-7.503906 3.359375-7.503906 7.503906v101.203125l-61.628906 33.464844c-.339844-2.710937-1.152344-5.375-2.4375-7.882813l-8.683594-16.953124c-5.960938-11.640626-20.28125-16.253907-31.914063-10.296876l-6.714843 3.4375c-5.640626 2.890626-9.816407 7.796876-11.761719 13.828126-1.945313 6.027343-1.425781 12.453124 1.464843 18.089843l8.683594 16.957031c2.027344 3.957032 5.023438 7.089844 8.546875 9.285157-4.609375 6.207031-6.796875 13.839843-9.046875 21.769531l-1.617187 5.726562c-1.128907 3.988282 1.191406 8.136719 5.179687 9.261719.679688.195313 1.367188.285157 2.042969.285157 3.273437 0 6.28125-2.15625 7.21875-5.464844l1.617187-5.714844c3.289063-11.597656 5.308594-17.808594 11.738282-21.300781l11.527344-6.261719 1.421874-.726562c.472657-.242188.914063-.515626 1.363282-.785157l82.15625-44.613281c-.519532 10.269531-6.046875 19.972656-15.148438 25.5l-53.425781 32.460938c-.0625.035156-.125.070312-.183594.109374l-16.628906 10.101563c-3.539063 2.152344-4.667969 6.769531-2.515625 10.3125 2.027344 3.339844 6.246094 4.527344 9.6875 2.851563l-12.617188 38.140624-9.222656 3.78125-25.078125 10.277344 7.226563-25.546875c1.125-3.988281-1.191406-8.136719-5.179688-9.265625-3.992187-1.132812-8.136718 1.191406-9.265625 5.179688l-11.417969 40.378906c-.148437.519531-.246093 1.089844-.269531 1.632812l-2.988281 54.890626c-.089844 2.09375.355469 6.050781-.613281 8.09375l-33.1875 69.820312h-24.117188c-14.128906 0-25.621093 11.492188-25.621093 25.617188v21.660156c-3.234376-1.480469-6.824219-2.308594-10.609376-2.308594h-61.246093c-14.125 0-25.617188 11.488281-25.617188 25.617188v26.875h-18.015625c-4.144531 0-7.503906 3.359374-7.503906 7.503906 0 4.144531 3.359375 7.503906 7.503906 7.503906h442.4375c4.144532 0 7.503906-3.359375 7.503906-7.503906 0-4.144532-3.359374-7.503906-7.503906-7.503906h-19.515625v-193.417969c0-14.125-11.492187-25.617188-25.617187-25.617188h-45.398438v-130.910156c8.320313-11.277344 11.402344-26.058594 7.539063-40.105469-.605469-2.207031-2.1875-4.019531-4.296875-4.914062-1.035156-.441406-2.144532-.636719-3.242188-.59375v-13.699219h90.535156c4.539063 0 8.503907-2.742187 10.105469-6.984375 1.601563-4.242188.4375-8.921875-2.964843-11.921875zm-221.539063 60.085937c.714844-2.214843 2.246094-4.019531 4.316406-5.078124l6.714844-3.4375c1.265625-.648438 2.617187-.957032 3.953125-.957032 3.164062 0 6.222656 1.730469 7.761719 4.734375l8.6875 16.957031c2.027343 3.960938.714843 8.761719-2.890625 11.1875l-2.445313 1.324219-5.160156 2.644531c-4.269531 2.1875-9.527344.492188-11.714844-3.78125l-8.6875-16.953124c-1.058593-2.070313-1.25-4.429688-.535156-6.640626zm-15.078125 272.925782c-2.550781-1.164063-5.324219-1.925782-8.238281-2.195313l8.238281-10.941406zm35.628906-60.464844c3.609375-4.324219 4.605469-9.375 5.410156-13.445312.203126-.96875 3.90625-21.195313 3.90625-21.195313s3.503907 2.183594 3.871094 2.339844c.253906.113281.433594.363281.460938.65625l4.082031 41.496093h-25.148437zm44.375-41.417969-6.335937 51.234375h-5.230469l-4.222656-42.929687c-.539063-5.5-3.90625-10.300781-8.839844-12.6875l-7.546875-4.785157 5.027344-27.863281s21.179687 25.160157 21.671875 25.800781c4.382812 5.699219 5.882812 7.980469 5.476562 11.230469zm-81.054687 36.316407c1.515625-4.5625 2.21875-9.207032 2.101562-13.929688l2.726563-50.0625 34.707031-14.222656-6.308594 34.945312c-.019531.09375-.039062.191406-.050781.285156l-5.21875 28.894532c-.679688 2.992187-1.273438 7.53125-3.140625 9.996094l-50.707031 67.351562h-4.179688zm-178.890625 133.839843c0-5.847656 4.757812-10.605469 10.609375-10.605469h61.246093c5.851563 0 10.613282 4.757813 10.613282 10.605469v26.878907h-82.46875zm97.472656 0v-44.964843c0-5.851563 4.761719-10.609376 10.613281-10.609376h61.246094c5.851563 0 10.609375 4.757813 10.609375 10.609376v71.84375h-82.464844v-26.878907zm277.417969-166.539062v193.417969h-82.464844v-44.992188c0-4.144531-3.359375-7.503906-7.503906-7.503906-4.148438 0-7.507813 3.359375-7.507813 7.503906v44.992188h-82.464844v-120.152344c0-5.847656 4.757813-10.605469 10.609376-10.605469h61.246093c5.851563 0 10.609375 4.757813 10.609375 10.605469v37.617187c0 4.144531 3.359375 7.503907 7.503906 7.503907 4.148438 0 7.503907-3.359376 7.503907-7.503907v-110.882812c0-5.851563 4.761719-10.609375 10.613281-10.609375h8.265625c.023437 0 .050781.003906.078125.003906.023438 0 .050781-.003906.074219-.003906h52.824219c5.851562 0 10.613281 4.761718 10.613281 10.609375zm-71.855469-25.617188c-14.125 0-25.617188 11.492188-25.617188 25.617188v49.960937c-2.6875-1.226562-5.617187-2.003906-8.699218-2.230468l6.121094-49.5c1.203124-9.648438-3.71875-16.042969-8.476563-22.230469-.503906-.65625-29.671875-35.289063-29.671875-35.289063l17.894531-54.101562 49.289063-29.945313v117.71875zm15.847656-205.234375v-46.316406h79.386719l-17.097656 15.054688c-2.328125 2.050781-3.664063 5.003906-3.664063 8.105468 0 3.101563 1.335938 6.054688 3.664063 8.105469l17.097656 15.054687h-79.386719zm0 0"/></svg>
                    </div>
                    <div className="info-body">
                        <h3 className="fs-18 pb-3 fw-bold">Find career opportunities</h3>
                        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    </div>
                </div>
            </div>
            {/* <!-- end col-lg-3 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END CTA AREA
================================= -->

<!-- ================================
         START CTA AREA
================================= --> */}
<section className="get-started-area pt-70px pb-70px bg-gray position-relative z-index-1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7 py-4">
                <h2 className="section-title fs-30 lh-40">Build a private community to share technical or non-technical knowledge</h2>
            </div>
            <div className="col-lg-5 text-right">
                <Link to="free-demo.html" className="btn theme-btn">Create Lonk free team <i className="la la-arrow-right icon ml-1"></i></Link>
            </div>
        </div>
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- ================================
         END CTA AREA
================================= -->

<!-- ================================
         END FOOTER AREA
================================= --> */}
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
                        <li><Link to="contact.html">Contact</Link></li> 
                        <li><Link to="careers.html">Careers</Link></li>
                        <li><Link to="advertising.html">Advertising</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Legal Stuff</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                        <li><Link to="terms-and-conditions.html">Terms of Service</Link></li>
                        <li><Link to="privacy-policy.html">Cookie Policy</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Help</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="faq.html">Knowledge Base</Link></li>
                        <li><Link to="contact.html">Support</Link></li>
                    </ul>
                </div>
                {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column-half">
                <div className="footer-item">
                    <h3 className="fs-18 fw-bold pb-2 text-white">Connect with us</h3>
                    <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
                        <li><Link to="#"><i className="la la-facebook mr-1"></i> Facebook</Link></li>
                        <li><Link to="#"><i className="la la-twitter mr-1"></i> Twitter</Link></li>
                        <li><Link to="#"><i className="la la-linkedin mr-1"></i> LinkedIn</Link></li>
                        <li><Link to="#"><i className="la la-instagram mr-1"></i> Instagram</Link></li>
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
                <Link to="/" className="d-inline-block">
                    <img src="/assets/images/logo-white.png" alt="footer logo" className="footer-logo" />
                </Link>
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-6">
                <p className="copyright-desc text-right fs-14">Copyright &copy; 2021 <Link to="https://techydevs.com/">TechyDevs</Link> Inc.</p>
            </div>
            {/* <!-- end col-lg-6 --> */}
        </div>
        {/* <!-- end row --> */}
    </div>
    {/* <!-- end container --> */}
</section>
{/* <!-- end footer-area --> */}
{/* <!-- ================================
          END FOOTER AREA
================================= --> */}

{/* <!-- start back to top --> */}
<div id="back-to-top" data-toggle="tooltip" data-placement="top" title="Return to top">
    <i className="la la-arrow-up"></i>
</div>
{/* <!-- end back to top --> */}

{/* <!-- Modal --> */}
<div className="modal fade modal-container login-form" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header align-items-center">
                <h5 className="modal-title" id="loginModalTitle">Good to see you again!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="la la-times"></span>
                </button>
            </div>
            <div className="modal-body">
                <form method="post">
                    <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">Username</label>
                        <input className="form-control form--control" type="username" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">Password</label>
                        <div className="input-group mb-1">
                            <input className="form-control form--control password-field" type="password" name="password" placeholder="Enter password" />
                            <div className="input-group-append">
                                <button className="btn theme-btn-outline theme-btn-outline-gray toggle-password" type="button">
                                <svg
                                className="eye-on"
                                xmlns="http://www.w3.org/2000/svg"
                                height={22}
                                viewBox="0 0 24 24"
                                width={22}
                                fill="#7f8897"
                                // {...props}
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6a9.77 9.77 0 0 1 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0 1 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                            </svg>
                            <svg
                                className="eye-off"
                                xmlns="http://www.w3.org/2000/svg"
                                height={22}
                                viewBox="0 0 24 24"
                                width={22}
                                fill="#7f8897"
                                // {...props}
                            >
                                <path
                                d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                                fill="none"
                                />
                                <path d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z" />
                            </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                        <div className="custom-control custom-checkbox fs-14">
                            <input type="checkbox" className="custom-control-input" id="rememberMe" />
                            <label className="custom-control-label custom--control-label" fhtmlFor="rememberMe">Remember me!</label>
                        </div>
                        <Link to="#" className="lost-pass-btn fs-14 hover-underline">Forgot Password?</Link>
                    </div>
                    <div className="btn-box">
                        <button type="submit" className="btn theme-btn w-100">
                            Login to Account <i className="la la-arrow-right icon ml-1"></i>
                        </button>
                    </div>
                    <p className="create-account-text text-right fs-14 pt-1">
                        New to Forums? <a className="signup-btn text-color hover-underline" href="#">Create account</a>
                    </p>
                    <div className="icon-element my-4 mx-auto shadow-sm fs-25">Or</div>
                    <div className="text-center">
                        <p className="fs-15 pb-3">Login with your social network</p>
                        <button className="btn theme-btn bg-8 mb-2 mr-2"><i className="la la-facebook mr-1"></i> Facebook</button>
                        <button className="btn theme-btn bg-9 mb-2 mr-2"><i className="la la-twitter mr-1"></i> Twitter</button>
                        <button className="btn theme-btn bg-10 mb-2 mr-2"><i className="la la-google mr-1"></i> Google</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{/* <!-- Modal --> */}
<div className="modal fade modal-container signup-form" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header align-items-center">
                <h5 className="modal-title" id="signUpModalTitle">Welcome! create your account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="la la-times"></span>
                </button>
            </div>
            <div className="modal-body">
                <form method="post">
                    <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">Name</label>
                        <input className="form-control form--control" type="text" name="text" placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">Username</label>
                        <input className="form-control form--control" type="uername" name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">Password</label>
                        <div className="input-group mb-1">
                            <input className="form-control form--control password-field" type="password" name="password" placeholder="Enter password"/>
                            <div className="input-group-append">
                                <button className="btn theme-btn-outline theme-btn-outline-gray toggle-password" type="button">
                                    <svg className="eye-on" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#7f8897"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
                                    <svg className="eye-off" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#7f8897"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/></svg>
                                </button>
                            </div>
                        </div>
                        <p className="fs-14 lh-20">Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.</p>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox fs-14">
                            <input type="checkbox" className="custom-control-input" id="agreeCheckBox" />
                            <label className="custom-control-label custom--control-label" htmlFor="agreeCheckBox">By signing up, you agree to our <a href="privacy-policy.html" className="text-color hover-underline">Privacy Policy.</a></label>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button type="submit" className="btn theme-btn w-100">
                            Register Account <i className="la la-arrow-right icon ml-1"></i>
                        </button>
                    </div>
                    <p className="create-account-text text-right fs-14">
                        Already on Forums? <a className="login-btn text-color hover-underline" href="">Log in</a>
                    </p>
                    <div className="icon-element my-4 mx-auto shadow-sm fs-25">Or</div>
                    <div className="text-center">
                        <p className="fs-15 pb-3">Create account with your social network</p>
                        <button className="btn theme-btn bg-8 mb-2 mr-2"><i className="la la-facebook mr-1"></i> Facebook</button>
                        <button className="btn theme-btn bg-9 mb-2 mr-2"><i className="la la-twitter mr-1"></i> Twitter</button>
                        <button className="btn theme-btn bg-10 mb-2 mr-2"><i className="la la-google mr-1"></i> Google</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{/* <!-- Modal --> */}
<div className="modal fade modal-container recover-form" id="recoverModal" tabIndex="-1" role="dialog" aria-labelledby="recoverModalTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header align-items-center">
                <h5 className="modal-title" id="recoverModalTitle">Reset password</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="la la-times"></span>
                </button>
            </div>
            <div className="modal-body">
                <p className="fs-15 lh-20 pb-3">
                    Enter your username or email to reset your password.
                    You will receive an email with instructions on how to reset your password. If you are experiencing problems
                    resetting your password <a href="contact.html" className="text-color hover-underline">contact us</a> or <a href="#" className="text-color hover-underline">send us an email</a>
                </p>
                <form method="post">
                    <div className="form-group">
                        <label className="fs-14 text-black fw-medium lh-18">Email</label>
                        <input className="form-control form--control" type="text" name="text" placeholder="Email address" />
                    </div>
                    <div className="btn-box">
                        <button type="submit" className="btn theme-btn w-100">
                            Get New Password <i className="la la-arrow-right icon ml-1"></i>
                        </button>
                        <p className="create-account-text text-right fs-14">
                            Not a member? <a className="text-color signup-btn hover-underline" href="#!">Create account</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
            </div>
        );
    };
}

export default Home;