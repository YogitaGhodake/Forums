import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const LinkButton = ({text, link, type, handleClick, marginTop}) => {
  return (
    <Fragment>
      <Link onClick={handleClick} to={link}>
        <button className={`s-btn ${type}`+ ` btn theme-btn theme-btn-sm`} style={{marginLeft:'10px'}}>
          {text}
        </button>
      </Link>
    </Fragment>
  );
};

export default LinkButton;
