import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const TagBadge = ({tag_name, size, display,link, to}) => {
  return (
    <Fragment>
      <div className='tags-badge tag-link' >
        {to === true ? (
          <a className={`${size}`} to={link ? link : `/tags/${tag_name}`}>
            {tag_name}
          </a>
        ) : (
          <Link className={`${size}`} to={link ? link : `/tags/${tag_name}`}>
            {tag_name}
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default TagBadge;
