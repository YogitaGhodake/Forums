import React, { Fragment } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


const UserCard = ({
  created_at,
  user_id,
  username,
  dateType,
  float,
  backgroundColor,
}) => {
  return (
    <Fragment>
      <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
        <Link to="/users/:id" className="media-img d-block">
          <img
            src={`https://secure.gravatar.com/avatar/${user_id}?s=164&d=identicon`}
            alt="avatar" />
        </Link>
        <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
          <div>
            <h5 className="pb-1"><Link to={`/users/${user_id}`}>

              {username}
            </Link></h5>
            <div className="stats fs-12 d-flex align-items-center lh-18">
              <span className="text-black pr-2" title="Reputation score">224</span>
              <span className="pr-2 d-inline-flex align-items-center" title="Gold badge"><span className="ball gold"></span>16</span>
              <span className="pr-2 d-inline-flex align-items-center" title="Silver badge"><span className="ball silver"></span>93</span>
              <span className="pr-2 d-inline-flex align-items-center" title="Bronze badge"><span className="ball"></span>136</span>
            </div>

          </div>
          <small className="meta d-block text-right">
            <span className="text-black d-block lh-18">asked</span>
            <span className="d-block lh-18 fs-12">
              {dateType ? dateType : ''} {moment(created_at).fromNow(true)}{' '}
              ago

            </span>
          </small>
        </div>
      </div>
    </Fragment>
  );
};

export default UserCard;
