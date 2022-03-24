import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAnswer } from '../../../../redux/answers/answers.actions';
import moment from 'moment';
import './AnswerItem.styles.scss';

const AnswerItem = ({
  deleteAnswer,
  answer: { body, user_id, id, created_at, username },
  auth,
  dateType,
  postId,
  index
}) => {
  return (
    <Fragment>

      <div className="answer-wrap d-flex">
        <div className="votes votes-styled w-auto">
          <div id="vote2" className="upvotejs upvotejs-enabled">
            <a className="upvote upvote-on" data-toggle="tooltip" data-placement="right" title data-original-title="This question is useful" />
            <span className="count">


            </span>
            <a className="downvote" data-toggle="tooltip" data-placement="right" title data-original-title="This question is not useful" />
            <a className="star star-on check" data-toggle="tooltip" data-placement="right" title data-original-title="The question owner accepted this answer" />
          </div>
        </div>{/* end votes */}
        <div className="answer-body-wrap flex-grow-1">
          <div className="answer-body">
            <p dangerouslySetInnerHTML={{ __html: body }}>


            </p>
          </div>{/* end answer-body */}
          <div className="question-post-user-action">
            <div className="post-menu">
              <div className="btn-group">
                <button className="btn dropdown-toggle after-none" type="button" id="shareDropdownMenuTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Share</button>
                <div className="dropdown-menu dropdown--menu dropdown--menu-2 mt-2" aria-labelledby="shareDropdownMenuTwo">
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
            </div>{/* end post-menu */}
            <div className="media media-card user-media align-items-center">
              <a href="user-profile.html" className="media-img d-block">
                <img src={`https://secure.gravatar.com/avatar/${user_id}?s=164&d=identicon`} alt="avatar" />
              </a>
              <div className="media-body d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="pb-1"><a href={`/users/${user_id}`}>

                    {username}
                  </a></h5>
                  <div className="stats fs-12 d-flex align-items-center lh-18">

                    <span className="pr-2 d-inline-flex align-items-center"><span className="ball" />Id: {user_id}</span>
                  </div>
                </div>
                <small className="meta d-block text-right">
                  <span className='text-black d-block lh-18'>
                    {dateType ? dateType : 'answered'}
                  </span>
                  <span className='d-block lh-18 fs-12'> {moment(created_at).fromNow(true)}{' '} ago</span>

                </small>
              </div>
            </div>{/* end media */}
          </div>{/* end question-post-user-action */}
          <div className="comments-wrap">
            <ul className="comments-list">
              <li>
                <div className="comment-actions">
                  <span className="comment-score">1</span>
                </div>
                <div className="comment-body">
                  <span className="comment-copy">Ah excellent! Thank you!</span>
                  <span className="comment-separated">-</span>
                  <a href="user-profile.html" className="comment-user owner" title="224,110 reputation">Arden Smith</a>
                  <span className="comment-separated">-</span>
                  <a href="#" className="comment-date">8 hours ago</a>
                </div>
              </li>
            </ul>
            <div className="comment-form">
              <div className="comment-link-wrap text-center">
                <a className="collapse-btn comment-link" data-toggle="collapse" href="#addCommentCollapseTwo" role="button" aria-expanded="false" aria-controls="addCommentCollapseTwo" title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.">Add a comment</a>
              </div>
              <div className="collapse border-top border-top-gray mt-2 pt-3" id="addCommentCollapseTwo">
                <form method="post" className="row pb-3">
                  <div className="col-lg-12">
                    <h4 className="fs-16 pb-2">Leave a Comment</h4>
                    <div className="divider mb-2"><span /></div>
                  </div>{/* end col-lg-12 */}
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="fs-13 text-black lh-20">Name</label>
                      <div className="form-group">
                        <input className="form-control form--control form-control-sm fs-13" type="text" name="text" placeholder="Your name" />
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
                        <textarea className="form-control form--control form-control-sm fs-13" name="message" rows={5} placeholder="Your comment here..." defaultValue={""} />
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
                          <input type="checkbox" className="custom-control-input" id="getNewCommentsTwo" />
                          <label className="custom-control-label custom--control-label" htmlFor="getNewCommentsTwo">Notify me of new comments vai email.</label>
                        </div>
                        <div className="custom-control custom-checkbox fs-13">
                          <input type="checkbox" className="custom-control-input" id="getNewPostsTwo" />
                          <label className="custom-control-label custom--control-label" htmlFor="getNewPostsTwo">Notify me of new posts vai email.</label>
                        </div>
                      </div>
                      <button className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray" type="submit">Post Comment</button>
                    </div>
                  </div>{/* end col-lg-12 */}
                </form>
              </div>{/* end collapse */}
            </div>
          </div>{/* end comments-wrap */}
        </div>{/* end answer-body-wrap */}
      </div>

      <hr />


    </Fragment>
  );
};

AnswerItem.propTypes = {
  deleteAnswer: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired,
};

export default connect(null, { deleteAnswer })(AnswerItem);
