import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import htmlSubstring from '../../services/htmlSubstring'
import injectEllipsis from '../../services/injectEllipsis'

import UserCard from '../UserCard/UserCard.component';
import TagBadge from '../TagBadge/TagBadge.component';

// import './PostItem.styles.scss';

const PostItem = ({
  post: {
    id,
    title,
    body,
    tagname,
    username,
    user_id,
    answer_count,
    comment_count,
    views,
    created_at,
  },
}) => {
  const answerVoteUp = (
    <div className='vote-block answer answer-block answered-accepted my-2'>
      <span className='vote-counts text-center fc-green-500 answer-counts d-block lh-20 fw-medium '>
        {answer_count}
        </span>
      <span className='count-text answer-text d-block fs-13 lh-18'>
        answers
        </span>
    </div>
  );

  const answerVoteDown = (
    <div className='vote-block text-center answer-block answered-accepted my-2'>
      {/* <div className='vote-block'> */}
      <span className='vote-counts text-center fc-green-500 answer-counts d-block lh-20 fw-medium'>{answer_count}</span>
      <span className='count-text answer-text d-block fs-13 lh-18'>answers</span>
      {/* </div> */}
    </div>
  );

  return (
    <div className='posts questions-snippet border-top border-top-gray'>
      <div className='stats-container media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray'>
        <div className='stats votes text-center votes-2'>
          <div className='vote-block'>
            <span className='vote-count d-block text-center pr-0 lh-20 fw-medium'>
              {comment_count}
              </span>
            <span className='count-text d-block fs-13 lh-18'>comments</span>
          </div>
          {answer_count > 0 ? answerVoteUp : answerVoteDown}
          <div className='tags vote-block '>
            <span className='vote-count tag-link d-block text-center pr-0 lh-20 fw-medium'>
              {tagname ? 1 : 0}
              </span>
            <span className='count-text d-block fs-13 lh-18'>tags</span>
          </div>
          <div className="view-block">
          <span className='vote view-counts d-block lh-20 fw-medium'>
            {views}
            </span>
            <span className='count-text view-text d-block fs-13 lh-18'> views</span>
          </div>
        </div>
      {/* </div> */}
      <div className="media-body">
      {/* <div className='summary'> */}
        <h5 className='mb-2 fw-medium'>
          <Link to={`/questions/${id}`}>{title}</Link>
        </h5>
        <div className='brief mb-2 truncate lh-20 fs-15' dangerouslySetInnerHTML={{__html: injectEllipsis(htmlSubstring(body, 200))}}>
        </div>
        <div className='tags'>
        <TagBadge tag_name={tagname} size={'s-tag'} float={'left'} />
        </div>
        <div className=''>
        <UserCard
          created_at={created_at}
          user_id={user_id}
          username={username}
          float={'right'}
          backgroundColor={'transparent'}
        />
        </div>
      {/* </div> */}
      </div>
      
    </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(null)(PostItem);
