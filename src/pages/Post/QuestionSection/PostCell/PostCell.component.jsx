import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../../../../redux/posts/posts.actions';
import UserCard from '../../../../components/UserCard/UserCard.component';

import './PostCell.styles.scss';

const PostCell = ({
  deletePost,
  auth,
  post: {
    post: { id, post_body, tagname, user_id, username, created_at },
  },
  postId,
}) => {
  useEffect(() => {
    getPost(postId);
    // eslint-disable-next-line
  }, [getPost]);

  return (
    <Fragment>
      {/* design */}
      <div className="question-post-body-wrap flex-grow-1">
        <div className="question-post-body">
          <p dangerouslySetInnerHTML={{ __html: post_body }}>
          </p>
        </div>{/* end question-post-body */}
        <div className="question-post-user-action">
          <div className="post-menu">
            <div className="btn-group">
              <button className="btn dropdown-toggle after-none" type="button" id="shareDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Share
              </button>
              <div className="dropdown-menu dropdown--menu dropdown--menu-2 mt-2" aria-labelledby="shareDropdownMenu">
                <div className="py-3 px-4">
                  <h4 className="fs-15 pb-2">Share a link to this question</h4>
                  <form action="#" className="copy-to-clipboard">
                    <span className="text-success-message">Link Copied!</span>
                    <input type="text" className="form-control form--control form-control-sm copy-input" defaultValue="https://Disilab.com/q/66552850/15319675" />
                    <div className="btn-box pt-2 d-flex align-items-center justify-content-between">
                      <a href="#" className="btn-text copy-btn">Copy link</a>
                      <ul className="social-icons social-icons-sm">
                        <li><a href="#" className="bg-8 text-white shadow-none" title="Share link to this question on Facebook"><i className="la la-facebook" /></a></li>
                        <li><a href="#" className="bg-9 text-white shadow-none" title="Share link to this question on Twitter"><i className="la la-twitter" /></a></li>
                        <li><a href="#" className="bg-dark text-white shadow-none" title="Share link to this question on DEV"><i className="lab la-dev" /></a></li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>{/* btn-group */}
            <a href="#" className="btn">Edit</a>
            <button className="btn">Follow</button>
            {!auth.loading &&
              auth.isAuthenticated &&
              parseInt(user_id) === auth.user.id && (
                <Link
                  className='btn s-link s-link__danger'
                  style={{ paddingLeft: '4px', color: 'red' }}
                  title='Delete the post'
                  onClick={(e) => deletePost(id)}
                  to='/questions'
                >
                  Delete
                </Link>
              )}
          </div>{/* end post-menu */}

          <UserCard created_at={created_at}
            user_id={user_id}
            username={username}
          />
        </div>
        {/* end question-post-user-action */}
      </div>
    </Fragment>
  );
};

PostCell.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPost, deletePost })(PostCell);
