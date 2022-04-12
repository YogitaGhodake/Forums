import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../../components/Header/Footer';
import Header from '../../components/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm.component';




const Login = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to='/questions' />;
    }

    return (
        <Fragment>
            <Header dark={false} />
            <section className='login-area pt-100px pb-80px position-relative'>
                <div className='container'>
                    <AuthForm action={'Log in'} />
                </div>
            </section>
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
