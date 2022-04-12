import React, {Fragment} from 'react';

const VoteCell = ({answerCount, commentCount}) => {
  return (
    <Fragment>
      <div className='vote-cell votes votes-styled w-auto'>
        <div className='stats'>
          <div className='vote' id="vote">
            <span className='vote-count'>{answerCount}</span>
            <div className='count-text'>answers</div>
          </div>
          <div className='vote'>
            <span className='vote-count'>{commentCount}</span>
            <div className='count-text'>comments</div>
          </div>
          <div className='vote'>
            <span className='vote-count'>1</span>
            <div className='count-text'>tags</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VoteCell;
