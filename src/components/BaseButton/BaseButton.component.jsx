import React, {Fragment} from 'react';

const BaseButton = ({text, selected, onClick}) => {
  return (
    <Fragment>
      <button
        className={`s-btn s-btn__filled btn ${
          selected === text ? 'is-selected active' : ''
        }`}
        style={{margin: '0'}}
        onClick={onClick}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default BaseButton;
