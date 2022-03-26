import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../../components/Header/Footer';
import HeaderLight from '../../components/Header/HeaderLight';
import AskWidget from './AskWidget';
import Spinner from '../../components/Spinner/Spinner.component';
import AskForm from './AskForm';

const PostForm = ({ auth: { isAuthenticated, loading } }) => {
    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }

    return loading === null ? (
        <Spinner type='page' width='75px' height='200px' />
    ) : (

        //*****Add Question ********
        <Fragment>
            <HeaderLight />
            <section className="question-area pt-80px pb-40px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card card-item postform" style={{width: '100%'}}>
                                <AskForm />
                            </div>
                            {/* end card */}
                        </div>
                        {/* end col-lg-8 */}
                        <AskWidget />
                        {/* end col-lg-4*/}
                    </div>
                    {/* end row*/}
                </div>
                {/* end container */}
            </section>
            <Footer />
        </Fragment>
    );
};

PostForm.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(PostForm);
