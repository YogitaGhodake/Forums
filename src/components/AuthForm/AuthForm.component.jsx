import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/auth/auth.actions';
import { register } from '../../redux/auth/auth.actions';
import LoginCaption from '../../pages/Login/LoginCaption/LoginCaption.component';
import SignupCaption from '../../pages/SignUp/Caption/SignupCaption.component';


const AuthForm = ({ register, login, action}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  let title="Welcome to ";

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = async (e) => {
    console.log("action====>24", action);
    e.preventDefault();
    if (action === 'Sign up') {
      register({ username, password });
      title = "Sign up with us";
    } else {
      console.log("action====>30", action);
      title = "Welcome back, please login";
      login({ username, password });
    }
  };

  const signUpLink = (
    <Fragment>
      Already have an account?{' '}
      <Link to='/login' name='login'>
        Log in
      </Link>
    </Fragment>
  );

  const logInLink = (
    <Fragment>
      Don't have an account?{' '}
      <Link to='/signup' name='register'>
        Sign up
      </Link>
    </Fragment>
  );

 

  // const Show = ()=> action === 'signup' ? <LoginCaption /> : <SignupCaption /> 

  return (
    <Fragment>
      {/* {action === 'Sign up' ?<Caption/> : */}
          <form action="#" className="card card-item login-form" onSubmit={(e) => onSubmit(e)}>
            <div className="card-body row p-0">
               <div className="col-lg-6"> 
               {/* <Show /> */}

                { action ==='login' ? <LoginCaption /> : < SignupCaption /> }
              </div> 
              {/* <!-- end col-lg-6 --> */}
              <div className="col-lg-5 mx-auto">
                <div className="form-action-wrapper py-5">
                  <div className="form-group">
                    <h3 className="fs-22 pb-3 fw-bold">
                      {title + action}
                      </h3>
                    <div className="divider"><span></span></div>
                  </div>
                  <div className="form-group login-form">
                    <label className="fs-14 text-black fw-medium lh-18 form-label s-label">
                    Username
                    </label>
                    <input
                      type="text"
                      className="form-control form--control form-input s-input"
                      placeholder="Username"
                      name='username'
                      value={username}
                      onChange={(e) => onChange(e)}
                      id='username'
                      required
                    />
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group">
                    <label className="fs-14 text-black fw-medium lh-18 form-label s-label">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control form--control password-field form-input s-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        id='password'
                        required
                      />
                      <div className="input-group-append">
                        <button
                          className="btn theme-btn-outline theme-btn-outline-gray toggle-password"
                          type="button"
                        >
                          <svg className="eye-on" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#a1a1a1"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" /></svg>
                          <svg className="eye-off" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#a1a1a1"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="custom-control custom-checkbox fs-14">
                      <input type="checkbox" className="custom-control-input" id="rememberMe" />
                      <label className="custom-control-label custom--control-label" htmlFor="rememberMe">Remember me!</label>
                    </div>
                    <Link to="recover-password.html" className="btn-text fs-14 hover-underline fw-regular">Forgot Password?</Link>
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group">
                    <button
                      id="submit-button send-message-btn"
                    // send-message-btn
                      className="btn theme-btn w-100"
                      name='submit-button'
                      type="submit"
                    >
                      {action}
                      {/* Log in  */}
                      <i className="la la-arrow-right icon ml-1"></i>
                    </button>
                  </div>
                  {/* ****************************************************************************/}
                  {/* <!-- end form-group --> */}
                  <div className="social-icon-box">
                    <div className="pb-3 d-flex align-items-center">
                      <hr className="flex-grow-1 border-top-gray" /><span className="mx-2 text-gray-2 fw-medium text-uppercase fs-14">or</span>
                      <hr className="flex-grow-1 border-top-gray" />
                    </div>
                    <button className="btn theme-btn google-btn d-flex align-items-center justify-content-center w-100 mb-2" type="button">
                      <span className="btn-icon">
                        <svg
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 488 512"
                        >
                          <path
                            fill="currentColor"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                          />
                        </svg>
                      </span>
                      <span className="flex-grow-1">Log in with Google</span>
                    </button>
                    <button className="btn theme-btn facebook-btn d-flex align-items-center justify-content-center w-100 mb-2" type="button">
                      <span className="btn-icon">
                        <svg
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        // {...props}
                        >
                          <path
                            fill="currentColor"
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                      </span>
                      <span className="flex-grow-1">Log in with Facebook</span>
                    </button>
                    <button className="btn theme-btn twitter-btn d-flex align-items-center justify-content-center w-100" type="button">
                      <span className="btn-icon">
                        <svg
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        // {...props}
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </span>
                      <span className="flex-grow-1">Log in with Twitter</span>
                    </button>
                  </div>
                </div>
                {/* <!-- end form-action-wrapper --> */}
              </div>
              {/* <!-- end col-lg-5 --> */}
            </div>
            {/* <!-- end row --> */}
          </form>
          <p className="text-black text-center fs-15">Don’t have an account?
            <Link to="/signup" className="text-color hover-underline"> Sign up</Link></p>
        

        <div className='fs-caption license fc-black-500 hide'>
          By clicking “{action}”, you agree to our{' '}
          <Link
            to='https://stackoverflow.com/legal/terms-of-service/public'
            className='-link'
          >
            terms of service
          </Link>
          ,{' '}
          <Link
            to='https://stackoverflow.com/legal/privacy-policy'
            name='privacy'
            className='-link'
          >
            privacy policy
          </Link>{' '}
          and{' '}
          <Link
            to='https://stackoverflow.com/legal/cookie-policy'
            className='-link'
          >
            cookie policy
          </Link>
          <input type='hidden' name='legalLinksShown' value='1' />
        </div>

        <div className='redirects fc-black-500 hide'>
          {action === 'Sign up' ? signUpLink : logInLink}
          <div>
            Are you an employer?{' '}
            <Link
              to='https://careers.stackoverflow.com/employer/login'
              name='talent'
            >
              Sign up on Talent{' '}
              <svg
                aria-hidden='true'
                className='svg-icon va-text-bottom sm-d-none icon-share-sm'
                width='14'
                height='14'
                viewBox='0 0 14 14'
              >
                <path d='M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1z' />
                <path d='M7 1h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1z' />
              </svg>
            </Link>
          </div>
        </div>
        {/* <!-- end container --> */}

        
        <svg
          className="position-absolute bottom-0 left-0 w-100 z-index-n1"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
        // {...props}
        >
          <defs>
            <lineargradient id="a" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="rgba(248.597, 214.005, 202.895, 1)" offset="0%" />
              <stop stopColor="rgba(250.873, 203.862, 99.942, 1)" offset="100%" />
            </lineargradient>
          </defs>
          <path
            style={{
              transform: "translate(0,0)",
              opacity: 0.1,
            }}
            fill="url(#a)"
            d="m0 98 48 57.2C96 212 192 327 288 375.7c96 49.3 192 32.3 288-40.9C672 261 768 131 864 81.7c96-48.7 192-16.7 288 32.6 96 48.7 192 114.7 288 155.2 96 40.5 192 57.5 288 24.5s192-114 288-163.3c96-48.7 192-65.7 288-24.5 96 40.8 192 138.8 288 147 96 7.8 192-73.2 288-73.5 96 .3 192 81.3 288 130.6 96 48.7 192 65.7 288 57.2s192-40.5 288-73.5 192-65 288-57.2c96 8.2 192 57.2 288 89.9 96 32.3 192 49.3 288 8.1C4704 294 4800 196 4896 147s192-49 288-65.3c96-16.7 192-48.7 288-8.2S5664 229 5760 245s192-65 288-106.2c96-40.8 192-40.8 288 8.2s192 147 288 147 192-98 240-147l48-49v392H0Z"
          />
          <defs>
            <lineargradient id="b" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="rgba(232.659, 165.487, 143.914, 1)" offset="0%" />
              <stop stopColor="rgba(253.15, 195.918, 69.406, 1)" offset="100%" />
            </lineargradient>
          </defs>
          <path
            style={{
              transform: "translate(0,50px)",
              opacity: 0.2,
            }}
            fill="url(#b)"
            d="M0 343h48c48 0 144 0 240-40.8 96-41.2 192-122.2 288-147C672 131 768 163 864 196s192 65 288 89.8c96 24.2 192 41.2 288 40.9 96 .3 192-16.7 288-49 96-32.7 192-81.7 288-57.2s192 122.5 288 138.8c96 16.7 192-49.3 288-122.5C2688 163 2784 82 2880 98s192 131 288 138.8c96 8.2 192-89.8 288-81.6 96 7.8 192 122.8 288 122.5 96 .3 192-114.7 288-122.5 96-8.2 192 89.8 288 122.5 96 32.3 192 .3 288-8.2s192 8.5 288 32.7c96 24.8 192 56.8 288 81.6 96 24.2 192 41.2 288 49 96 8.2 192 8.2 288-40.8s192-147 288-187.8c96-41.2 192-24.2 288 16.3s192 106.5 288 138.8c96 32.7 192 32.7 240 32.7h48v98H0Z"
          />
        </svg>
    
    </Fragment>
  );
};

AuthForm.propTypes = {
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register })(AuthForm);
