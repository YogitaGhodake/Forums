import React, { Fragment, useState, useRef } from 'react';
import LinkButton from '../../../../components/LinkButton/LinkButton.component';
import RichTextEditor from '../../../../components/RichTextEditor/RichTextEditor.component';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addAnswer } from '../../../../redux/answers/answers.actions';



const AnswerForm = ({ addAnswer, auth, postId }) => {
    const [formData, setFormData] = useState({
        text: '',
    });

    // console.log("auth", "auth.loading 13 14", auth, "formData", formData);
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
            {!auth.loading && auth.isAuthenticated ? (
                <Fragment>
                    <div className="subheader">
                        <div className="subheader-title">
                            <h3 className="fs-16">Your Answer</h3>
                        </div>
                    </div>
                    <div className="post-form ">
                        <form className="pt-3" onSubmit={(e) => handleSubmit(e)}>
                            <div className="input-box">
                                <label className="fs-14 text-black lh-20 fw-medium ">Body</label>
                                <div className="s-textarea rich-text-editor-container">
                                    <RichTextEditor
                                        ref={richTextEditorRef}
                                        onChange={updateConvertedContent}

                                    />
                                    {/* <textarea className="form-control form--control form-control-sm fs-13 user-text-editor " 
                                    name="message" 
                                    rows="6" 
                                    placeholder="Your answer here..."
                                    >Your answer here...
                                    </textarea> */}
                                </div>
                            </div>
                            <div className="input-box hide">
                                <label className="fs-14 text-black fw-medium">Image</label>
                                <div className="form-group">
                                    <div className="file-upload-wrap file-upload-layout-2">
                                        <input type="file" name="files[]" className="file-upload-input" multiple />
                                        <span className="file-upload-text d-flex align-items-center justify-content-center"><i className="la la-cloud-upload mr-2 fs-24"></i>Drop files here or click to upload.</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <button className="btn theme-btn theme-btn-sm" type="submit">
                                     Post Your Answer
                               </button>
                        </form>
                    </div>
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

AnswerForm.propTypes = {
    addAnswer: PropTypes.func.isRequired,
};


export default connect(null, { addAnswer })(AnswerForm);