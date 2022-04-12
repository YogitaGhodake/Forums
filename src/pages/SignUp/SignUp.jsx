import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../../components/Header/Footer';
import Header from '../../components/Header/Header';
import { setAlert } from '../../redux/alert/alert.actions';
import Caption from './Caption/SignupCaption.component';
import AuthForm from '../../components/AuthForm/AuthForm.component';




const SignUp = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to='/' />;
    }

    <AuthForm action={'Sign up'} />

    return (
        <Fragment>
            <Header dark={false} />
            <section className='login-area pt-100px pb-80px position-relative'>
                <div className='container'>
                <AuthForm action={'Sign up'} />
                </div>
            </section>
            <Footer />
        </Fragment>
    );
};
SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});


export default connect(mapStateToProps, { setAlert })(SignUp);