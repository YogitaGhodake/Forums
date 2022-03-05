import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/auth/auth.actions';
import { ReactComponent as Search } from '../../assets/Search.svg';
import Spinner from '../../components/Spinner/Spinner.component';
import LinkButton from '../../components/LinkButton/LinkButton.component';



const HeaderLight = ({ auth: { isAuthenticated, loading, user }, logout }) => {
    let history = useNavigate();
    const [searchState, setSearchState] = useState(false);

    const authLinks = (
        <div className='btns'>

            {loading || user === null ? (

                <Spinner width='50px' height='50px' />


            ) : (
                <Link to={`/users/${user.id}`} title={user.username}>
                    <img
                        height='35px'
                        alt='user-logo'
                        className='logo '
                        src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`}
                    />
                </Link>
            )}
            
            <LinkButton
                text={'Log out'}
                link={'/login'}
                type={'s-btn__filled'}
                handleClick={logout}
            />

        </div>

    );


    const authTabs = (
        <div className="menu-bar ml-auto pr-2">
            <ul>
                <li>
                    <Link to="/">Home <i className="la la-angle-down fs-11"></i></Link>
                    <ul className="dropdown-menu-item">
                        <li><Link to="/">Home - main</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );

    const guestTabs = (
        <div className="menu-bar ml-auto pr-2">
            <ul>
                <li>
                    <Link to="/">Home <i className="la la-angle-down fs-11"></i></Link>
                    <ul className="dropdown-menu-item">
                        <li><Link to="/">Home - main</Link></li>
                    </ul>
                </li>
                <li className="is-mega-menu">
                    <Link to="#">pages <i className="la la-angle-down fs-11"></i></Link>
                    <div className="dropdown-menu-item mega-menu">
                        <ul className="row " >
                            <li className="col-lg-3">
                                <Link to="user-profile.html">user profile</Link>
                                <Link to="/login">login</Link>
                                <Link to="/signup">sign up</Link>
                                <Link to="/askquestion">ask question</Link>
                                <Link to="question-details.html">question details</Link>
                                <Link to="/about">about</Link>
                                <Link to="/users">user list <span className="badge bg-warning text-white">New</span></Link>
                                <Link to="/tags">tags list <span className="badge bg-warning text-white">New</span></Link>
                                <Link to="/addpost">add post <span className="badge bg-warning text-white">New</span></Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="#">blog <i className="la la-angle-down fs-11"></i></Link>
                    <ul className="dropdown-menu-item">
                        <li><Link to="blog-right-sidebar.html">blog right sidebar</Link></li>
                        <li><Link to="blog-single.html">blog detail</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );


    const guestLinks = (
        <div className='btns'>
            <LinkButton text={'Log in'} link={'/login'} type={'s-btn__primary'} />
            <LinkButton text={'Sign up'} link={'/signup'} type={'s-btn__filled'} />
        </div>
    );

    const SearchBar = () => {
        return (
            <form
                onSubmit={() => history.push('/questions')}
                className='small-search-form'
                autoComplete='off'
            >
                <input
                    className='small-search'
                    autoComplete='off'
                    type='text'
                    name='search'
                    maxLength='35'
                    placeholder='Search...'
                />
                <Search className="small-search-icon" />
            </form>
        );
    }



    return loading ? (
        ''
    ) : (
        <Fragment>
            <header className="header-area bg-white border-bottom border-bottom-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="logo-box">
                                <Link to="/" className="logo"><img src="assets/images/logo-black.png" alt="logo" /></Link>
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
                            <div className="menu-wrapper border-left border-left-gray pl-4 justify-content-end">
                                <nav className="menu-bar mr-auto">
                                    {/* <ul>
                            <li>
                                <Link to="#">Home <i className="la la-angle-down fs-11"></i></Link>
                                <ul className="dropdown-menu-item">
                                    <li><Link to="home-2.html">Home - main</Link></li>
                                </ul>
                            </li>
                            <li className="is-mega-menu">
                                <Link to="#">pages <i className="la la-angle-down fs-11"></i></Link>
                                <div className="dropdown-menu-item mega-menu">
                                    <ul className="row">
                                        <li className="col-lg-3">
                                            <Link to="user-profile.html">user profile</Link>
                                            <Link to="login.html">login</Link>
                                            <Link to="signup.html">sign up</Link>
                                            <Link to="ask-question.html">ask question</Link>
                                            <Link to="question-details.html">question details</Link>
                                            <Link to="about.html">about</Link>
                                            <Link to="user-list.html">user list <span className="badge bg-warning text-white">New</span></Link>
                                            <Link to="tags-list.html">tags list <span className="badge bg-warning text-white">New</span></Link>
                                            <Link to="add-post.html">add post <span className="badge bg-warning text-white">New</span></Link>
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
                        </ul> */}
                                    {!loading && (
                                        <Fragment>{isAuthenticated ? authTabs : guestTabs}</Fragment>
                                    )}
                                    {/* <!-- end ul --> */}
                                </nav>

                                {/* <!-- end main-menu --> */}
                                <form method="post" className="mr-4">
                                    <div className="form-group mb-0">
                                        <input className="form-control form--control form--control-bg-gray"
                                            id='search'
                                            onSubmit={() => history.push('/questions')}
                                            type="text"
                                            name="search"
                                            autoComplete='off'
                                            maxLength='35'
                                            placeholder="Type your search words..." />
                                        <button className="form-btn"
                                            type="button"
                                            onClick={() => setSearchState(!searchState)}
                                        >
                                            <i className="la la-search"></i>
                                            {/* <Search /> */}
                                        </button>

                                    </div>

                                    {/* <div className='ps-relative search-frame'>
                        <input
                            className='s-input s-input__search h100 search-box'
                            autoComplete='off'
                            type='text'
                            name='search'
                            maxLength='35'
                            placeholder='Search...'
                        />
                        <Search />
                        </div> */}
                                </form>

                                {!loading && (
                                    <Fragment>
                                        {isAuthenticated ? authLinks : guestLinks}
                                    </Fragment>
                                )}
                                {/* <Search onClick={() => setSearchState(!searchState)} /> */}
                                {/* {searchState && <SearchBar />} */}
                                {/* <div className="nav-right-button">
                                    <Link to="/login" className="btn theme-btn theme-btn-outline mr-2"><i className="la la-sign-in mr-1"></i> Login</Link>
                                    <Link to="/signup" className="btn theme-btn"><i className="la la-user mr-1"></i> Sign up</Link>
                                </div> */}

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
                                <li><Link to="home-2.html">Home - main</Link></li>
                            </ul>
                        </li>
                        {/* <li>
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li><Link to="user-profile.html">user profile</Link></li>
                    <li><Link to="notifications.html">Notifications</Link></li>
                    <li><Link to="/askquestion">ask question</Link></li>
                    <li><Link to="/question">question details</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="error.html">page 404</Link></li>
                </ul>
            </li> */}
                        {/* <li>
                <Link to="#">blog</Link>
                <ul className="sub-menu">
                    <li><Link to="blog-single.html">blog detail</Link></li>
                </ul>
            </li> */}
                    </ul>
                    <div className="off-canvas-btn-box px-4 pt-5 text-center">
                        <a href="#" className="btn theme-btn theme-btn-sm theme-btn-outline" data-toggle="modal" data-target="#loginModal"><i className="la la-sign-in mr-1"></i> Login</a>
                        <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
                        <a href="#" className="btn theme-btn theme-btn-sm" data-toggle="modal" data-target="#signUpModal"><i className="la la-plus mr-1"></i> Sign up</a>
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
                {searchState && <SearchBar />}
            </header>
        </Fragment>

    );
};

HeaderLight.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderLight);