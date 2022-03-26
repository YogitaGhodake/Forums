import React, { Fragment } from 'react';
import {Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../../components/Header/Footer';
import HeaderLight from '../../components/Header/HeaderLight';
import AuthForm from '../../components/AuthForm/AuthForm.component';
import Caption from './Caption/Caption.component';



const Login = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to='/questions' />;
    }

    return (
        <Fragment>
            <HeaderLight />
            <div className='auth-page'>
                <div className='register-content'>
                    <div className='register-grid'>
                        {/* <Caption /> */}
                        <AuthForm action={'Log in'} />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};


Login.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Login);
