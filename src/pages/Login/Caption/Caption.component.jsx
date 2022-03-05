import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

const Caption = () => {
    return (
        <Fragment>
            <div className="col-lg-6">
                <div className="form-content p-4 h-100 d-flex align-items-center justify-content-center flex-column bg-diagonal-gradient-primary radius-top-left-8 radius-bottom-left-8 text-center">
                    <h3 className="fs-35 pb-3 fw-bold text-white">Good to see you again</h3>
                    <p className="text-white fs-18">Log in with your information that you entered
                        <br /> during your registration.
                    </p>
                    <p className="text-white text-center pt-60px pb-3">Don't have an account?</p>
                    <Link to="/signup" className="btn theme-btn theme-btn-white px-5 lh-24">Sign up</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Caption;







