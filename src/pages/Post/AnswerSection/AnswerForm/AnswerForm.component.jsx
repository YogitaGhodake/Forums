import React, { Fragment, useState, useRef } from 'react';
import LinkButton from '../../../../components/LinkButton/LinkButton.component';
import RichTextEditor from '../../../../components/RichTextEditor/RichTextEditor.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAnswer } from '../../../../redux/answers/answers.actions';


const AnswerForm2 = ({ addAnswer, auth, postId }) => {
    const [formData, setFormData] = useState({
        text: '',
    });
    
    console.log("auth", "auth.loading 13 14", auth); 
    const richTextEditorRef = useRef(null);

    const { text } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        addAnswer(postId, { text });
        setFormData({
            text: '',
        });
        richTextEditorRef.current.cleanEditorState();
    };

    const updateConvertedContent = (htmlConvertedContent) => {
        setFormData({ ...formData, text: htmlConvertedContent });
    };

    return (
        <Fragment>

      {/* design */}
      <div class="subheader">
                        <div class="subheader-title">
                            <h3 class="fs-16">Your Answer</h3>
                        </div>
                    </div>
      <div class="post-form">
                        <form method="post" class="pt-3">
                            <div class="input-box">
                                <label class="fs-14 text-black lh-20 fw-medium">Body</label>
                                <div class="form-group">
                                    <textarea class="form-control form--control form-control-sm fs-13 user-text-editor" name="message" rows="6" placeholder="Your answer here...">Your answer here...</textarea>
                                </div>
                            </div>
                            <div class="input-box">
                                <label class="fs-14 text-black fw-medium">Image</label>
                                <div class="form-group">
                                    <div class="file-upload-wrap file-upload-layout-2">
                                        <input type="file" name="files[]" class="file-upload-input" multiple/>
                                        <span class="file-upload-text d-flex align-items-center justify-content-center"><i class="la la-cloud-upload mr-2 fs-24"></i>Drop files here or click to upload.</span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn theme-btn theme-btn-sm" type="submit">Post Your Answer</button>
                        </form>
                    </div>














{/* functionality */}

            {!auth.loading && auth.isAuthenticated ? (
                <Fragment>
                    <h1>Answers</h1>
                    <form className='answer-form' onSubmit={(e) => handleSubmit(e)}>
                        <div className='answer-grid'>
                            <label className=' fc-black-800'>Your Answer</label>
                            <div className='s-textarea rich-text-editor-container'>
                                
                                <textarea name="" id="" cols="30" rows="10"></textarea> 
                                <RichTextEditor
                                    ref={richTextEditorRef}
                                    onChange={updateConvertedContent}
                                />
                            </div>
                            <button className='s-btn s-btn__primary'>Post Your Answer</button>
                        </div>
                    </form>
                </Fragment>
            ) : (
                <Fragment>
                    <LinkButton
                        text={'You need to login to add an answer'}
                        link={'/login'}
                        type={'s-btn__outlined'}
                        marginTop={'12px'}
                    />
                </Fragment>
            )}
        </Fragment>

    );
};

AnswerForm2.propTypes = {   
    addAnswer: PropTypes.func.isRequired,
};


export default connect(null, { addAnswer })(AnswerForm2);