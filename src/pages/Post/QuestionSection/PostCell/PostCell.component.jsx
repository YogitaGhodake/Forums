import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getPost, deletePost } from '../../../../redux/posts/posts.actions';
import UserCard from '../../../../components/UserCard/UserCard.component';


const PostCell = ({
  deletePost,
  auth,
  post: {
    post: { id, post_body, tagname, user_id, username, created_at },
  },
  dateType,
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
                    <input type="text" className="form-control form--control form-control-sm copy-input" defaultValue="https://Nova Forums.com/q/66552850/15319675" />
                    <div className="btn-box pt-2 d-flex align-items-center justify-content-between">
                      <Link to="#" className="btn-text copy-btn">Copy link</Link>
                      <ul className="social-icons social-icons-sm">
                        <li><Link to="#" className="bg-8 text-white shadow-none" title="Share link to this question on Facebook"><i className="la la-facebook" /></Link></li>
                        <li><Link to="#" className="bg-9 text-white shadow-none" title="Share link to this question on Twitter"><i className="la la-twitter" /></Link></li>
                        <li><Link to="#" className="bg-dark text-white shadow-none" title="Share link to this question on DEV"><i className="lab la-dev" /></Link></li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>{/* btn-group */}
            <Link to="#" className="btn">Edit</Link>
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

          {/* <UserCard created_at={created_at}
            user_id={user_id}
            username={username}
          /> */}
           <div className="media media-card user-media align-items-center">
              <Link to={`/users/${user_id}`} className="media-img d-block">
                <img src={`https://secure.gravatar.com/avatar/${user_id}?s=164&d=identicon`} alt="avatar" />
              </Link>
              <div className="media-body d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="pb-1">
                    <Link to={`/users/${user_id}`}>
                       {username}
                  </Link>
                  </h5>
                  <div className="stats fs-12 d-flex align-items-center lh-18">

                    <span className="pr-2 d-inline-flex align-items-center"><span className="ball" />Id: {user_id}</span>
                  </div>
                </div>
                <small className="meta d-block text-right">
                  <span className='text-black d-block lh-18'>
                    {dateType ? dateType : 'asked'}
                  </span>
                  <span className='d-block lh-18 fs-12'> {moment(created_at).fromNow(true)}{' '} ago</span>

                </small>
              </div>
            </div>

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
