import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../../components2/Header/Footer';
import HeaderLight from '../../components/Header/HeaderLight';
import { setAlert } from '../../redux/alert/alert.actions';
import Caption from './Caption/Caption.component';
import AuthForm from '../../components/AuthForm/AuthForm.component';




const Register = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to='/' />;
    }


    return (
        <Fragment>
            <HeaderLight />
            <div className='auth-page'>
                <div className='register-content '>
                    <div className='register-grid '>
                        {/* <Caption /> */}
                        <AuthForm action={'Sign up'} />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});


export default connect(mapStateToProps, { setAlert })(Register);