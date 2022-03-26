import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const TagBadge = ({tag_name, size, display,link, to}) => {
  return (
    <Fragment>
      <div className='tags-badge heheh' >
        {to === true ? (
          <a className={ `${size + " tag-link"}` } to={link ? link : `/tags/${tag_name}`}>
            {tag_name}
          </a>
        ) : (
          <Link className={ `${size + " tag-link"}`} to={link ? link : `/tags/${tag_name}`}>
            {tag_name}
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default TagBadge;
