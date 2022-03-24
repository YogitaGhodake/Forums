import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import CommentCell from './CommentCell/CommentCell.component';
import VoteCell from './VoteCell/VoteCell.component';
import PostCell from './PostCell/PostCell.component';



const QuestionSection2 = ({
    post: {
        post: { id, answer_count, comment_count },
    },
    postId, post
}) => {


    return (
        <Fragment>
            <div className="question-highlight">
                <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                    <div className="media-body post" id='mainbar'>
                        <h5 className="fs-20 question-header">
                            {post.post.title}
                        </h5>
                        <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1 pl24">
                            {/* <div className="pr-3"> */}
                            <div className=' pr-3 grid-cell'>
                                <span className='fc-light'>Asked </span>
                                <time dateTime={moment(post.post.created_at).fromNow(true)}>
                                    {moment(post.post.created_at).fromNow(true)} ago
                                </time>
                            </div>
                        </div>
                    </div>
                </div>{/* end media */}
            </div>{/* end question-highlight */}
            <div className="question d-flex">
                <div className="votes votes-styled w-auto">
                    {/* <div id="vote" className="upvotejs upvotejs-enabled"> */}
                    <VoteCell answerCount={answer_count} commentCount={comment_count} />
                </div>{/* end votes */}

                <div className="question-post-body-wrap flex-grow-1">
                    <div className="question-post-body">
                    </div>{/* end question-post-body */}


                    <div className="question-post-user-action">
                        <div className="post-menu">
                            <PostCell postId={post.post.id} />


                        </div>
                        {/* end post-menu */}

                    </div>
                    {/* end question-post-user-action */}

                    {/* **********************************************************************************************************************           */}
                    <CommentCell postId={post.post.id} />
                         {/* end comments-wrap */}
                </div>{/* end question-post-body-wrap */}
            </div>{/* end question */}
        </Fragment>
    );
};

QuestionSection2.propTypes = {
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, null)(QuestionSection2);