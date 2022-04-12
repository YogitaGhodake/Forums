import React, { Fragment, useState, useEffect } from 'react';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAnswers } from '../../../../src/redux/answers/answers.actions';
import handleSorting from '../../../services/handleSorting';
import AnswerItem from '../../Post/AnswerSection/AnswerItem/AnswerItem.component';
import Spinner from '../../../components/Spinner/Spinner.component';
import AnswerForm from '../../Post/AnswerSection/AnswerForm/AnswerForm.component';



const AnswerSection = ({ getAnswers, auth, answer, postId }) => {
  useEffect(() => {
    getAnswers(postId);
    // eslint-disable-next-line
  }, [getAnswers]);
  

  const [sortType, setSortType] = useState('Newest');

  return (

    // design

    <Fragment>
      <div className="subheader d-flex align-items-center justify-content-between">
        <div className="subheader-title">
          <h3 className="fs-16">Answers</h3>
        </div>{/* end subheader-title */}
        <div className="subheader-actions d-flex align-items-center lh-1">
          <label className="fs-13 fw-regular mr-1 mb-0">Order by</label>
          <div className="w-100px">
            <select className="select-container selectized" tabindex="-1"
               selected={sortType}
               setSelected={setSortType}
              >
              <option buttons="active" selected="selected">active</option>
              <option buttons="oldest">oldest</option>


              {/* <option value="votes" defaultValue >votes</option> */}
            </select>
          </div>
        </div>{/* end subheader-actions */}
      </div>{/* end subheader */}

      {answer.loading === null ? (
        <Spinner width='25px' height='25px' />
      ) : (
        answer.answers?.sort(handleSorting(sortType)).map((answer, index) => (
          <div key={answer.id} className='answers'>
            <AnswerItem answer={answer} auth={auth} postId={postId} index={index} />

          </div>
        ))
      )}
      <AnswerForm auth={auth} postId={postId}/>

    </Fragment>
  );
};

AnswerSection.propTypes = {
  auth: PropTypes.object.isRequired,
  getAnswers: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  answer: state.answer,
});



export default connect(mapStateToProps, { getAnswers })(AnswerSection);
