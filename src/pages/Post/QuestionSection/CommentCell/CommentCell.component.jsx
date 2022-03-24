import React, { useEffect, Fragment, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getComments,
  deleteComment,
  addComment,
} from '../../../../redux/comments/comments.actions';

import Spinner from '../../../../components/Spinner/Spinner.component';
import LinkButton from '../../../../components/LinkButton/LinkButton.component';

import './CommentCell.styles.scss';

const CommentCell = ({
  deleteComment,
  addComment,
  getComments,
  auth,
  comment,
  postId,
}) => {
  useEffect(() => {
    getComments(postId);
    // eslint-disable-next-line2
  }, [getComments]);

  const [formData, setFormData] = useState({
    body: '',
  });

  const { body } = formData;


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addComment(postId, { body });
    setFormData({
      body: '',
    });
  };
  
  return (
    <Fragment>
      <div className="comments-wrap">
        <ul className="comments-list">

          {comment.loading === null ? (
            <Spinner width='25px' height='25px' />
          ) : (
            comment.comments.map((comment, index) => (
              <li key={comment.id}>
                <div className="comment-actions">
                  <span className="comment-score">
                    {index + 1}

                  </span>
                </div>
                <div className="comment-body">
                  <span className="comment-copy">{comment.body} </span>
                  <span className="comment-separated">-</span>
                  <a href={`/users/${comment.user_id}`} className="comment-user" title="15,467 reputation">
                    {comment.username}
                  </a>
                  <span className="comment-separated">-</span>
                  <a href={`/users/${comment.user_id}`} className="comment-date">
                    <span>
                      {moment(comment.created_at).fromNow(true)} ago
                    </span>
                  </a>
                </div>
              </li>

            )))}
        </ul>
        <div className="comment-form">
        {!auth.loading && auth.isAuthenticated ? (
            <Fragment>
          <div className="comment-link-wrap text-center">
            <a className="collapse-btn comment-link" data-toggle="collapse" href="#addCommentCollapse" role="button" aria-expanded="false" aria-controls="addCommentCollapse"
             title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.">Add a comment</a>
          </div>
          <div className="collapse border-top border-top-gray mt-2 pt-3" id="addCommentCollapse">
            <form className="row pb-3" onSubmit={(e) => handleSubmit(e)}>
              <div className="col-lg-12">
                <h4 className="fs-16 pb-2">Leave a Comment</h4>
                <div className="divider mb-2"><span /></div>
              </div>{/* end col-lg-12 */}
              <div className="col-lg-6">
                <div className="input-box">
                  <label className="fs-13 text-black lh-20">Name</label>
                  <div className="form-group">
                    <input 
                    className="form-control form--control form-control-sm fs-13" 
                    type="text" 
                    name="text"
                    placeholder="Your name"
                     />
                  </div>
                </div>
              </div>{/* end col-lg-6 */}
              <div className="col-lg-6">
                <div className="input-box">
                  <label className="fs-13 text-black lh-20">Email (Address never made public)</label>
                  <div className="form-group">
                    <input className="form-control form--control form-control-sm fs-13" type="text" name="text" placeholder="Your email" />
                  </div>
                </div>
              </div>{/* end col-lg-6 */}
              <div className="col-lg-12">
                <div className="input-box">
                  <label className="fs-13 text-black lh-20">Website</label>
                  <div className="form-group">
                    <input className="form-control form--control form-control-sm fs-13" type="text" name="text" placeholder="Website link" />
                  </div>
                </div>
              </div>{/* end col-lg-12 */}
              <div className="col-lg-12">
                <div className="input-box">
                  <label className="fs-13 text-black lh-20">Message</label>
                  <div className="form-group">
                    <textarea className="form-control form--control form-control-sm fs-13" 
                    name="body" 
                    rows={5} 
                    placeholder="Your comment here..." 
                    defaultValue={""} 
                    type='text'
                    value={body}
                    onChange={(e) => handleChange(e)}
                    id='title'
                    
                    />
                    <div className="d-flex flex-wrap align-items-center pt-2">
                      <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">[named hyperlinks] (https://example.com)</div>
                      <div className="mr-3 fw-bold fs-13">**bold**</div>
                      <div className="mr-3 font-italic fs-13">_italic_</div>
                    </div>
                  </div>
                </div>
              </div>{/* end col-lg-12 */}
              <div className="col-lg-12">
                <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                  <div>
                    <div className="custom-control custom-checkbox fs-13">
                      <input type="checkbox" className="custom-control-input" id="getNewComments" />
                      <label className="custom-control-label custom--control-label" htmlFor="getNewComments">Notify me of new comments vai email.</label>
                    </div>
                    <div className="custom-control custom-checkbox fs-13">
                      <input type="checkbox" className="custom-control-input" id="getNewPosts" />
                      <label className="custom-control-label custom--control-label" htmlFor="getNewPosts">Notify me of new posts vai email.</label>
                    </div>
                  </div>
                  <button 
                  className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray" 
                  type="submit"
                  value={body}
                  onChange={(e) => handleChange(e)}
                  id='title'
                  
                  >Post Comment</button>
                </div>
              </div>{/* end col-lg-12 */}
              
            </form>
            
          </div>{/* end collapse */}
          </Fragment>
          ) : (
            <Fragment>
              <LinkButton
                text={'You need to login to add a comment'}
                link={'/login'}
              />
            </Fragment>
            )}
        </div>{/* end comment-form */}
        
      </div>{/* end comments-wrap */}
    </Fragment>
  );
};

CommentCell.propTypes = {
  auth: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  comment: state.comment,
});



export default connect(mapStateToProps, {
  deleteComment,
  getComments,
  addComment,
})(CommentCell);
