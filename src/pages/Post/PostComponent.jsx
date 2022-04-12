import React, { useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost } from '../../redux/posts/posts.actions';
import Spinner from '../../components/Spinner/Spinner.component';
import AnswerSection from '../Post/AnswerSection/AnswerSection';
import QuestionSection from './QuestionSection/QuestionSection';
import Footer from '../../components/Header/Footer';
import Header from '../../components/Header/Header';
import TextHeader from './TextHeader';
import SidebarInQuestions from './SidebarInQuestions';



const Post = ({ getPost, post: { post, loading } }) => {
    useEffect(() => {
        getPost(params.id);
        // eslint-disable-next-line
    }, [getPost]);

    const params = useParams();

    return loading || post === null ? (
        <Spinner type='page' width='75px' height='200px' />

    ) :
        (
         <Fragment>
             <Header dark={false} />
                <TextHeader />
                <section className="question-area pt-40px pb-40px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="question-main-bar mb-50px">
                                    <QuestionSection />
                                    <AnswerSection postId={params.id} />
                                </div>{/* end question-main-bar */}
                            </div>{/* end col-lg-9 */}
                            <div className="col-lg-3">
                            <SidebarInQuestions />
                            </div>{/* end col-lg-3 */}
                        </div>{/* end row */}
                    </div>{/* end container */}

                </section>
                <Footer />
            </Fragment>


        );
};


Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);