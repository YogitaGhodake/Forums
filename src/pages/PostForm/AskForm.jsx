import React, { Fragment,useState, useRef } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPost} from '../../redux/posts/posts.actions';
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor.component';


const AskForm = ({addPost}) => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        tagname: '',
      });
    const richTextEditorRef = useRef(null);

    const {title, body, tagname} = formData;
    
    const onChange = (e) =>
      setFormData({...formData, [e.target.name]: e.target.value});
  
    const onSubmit = async (e) => {
      e.preventDefault();
      addPost({title, body, tagname});
      setFormData({
        title: '',
        body: '',
        tagname: '',
      });
    //   console.log("title, body, tagname", title,body,tagname);
      richTextEditorRef.current.cleanEditorState();
    //   console.log("cleanEditorState",richTextEditorRef.current.cleanEditorState)
    };
  
    const updateConvertedContent = (htmlConvertedContent) => {
      setFormData({...formData, body: htmlConvertedContent});
    };


    return (
        <Fragment>
            <form className="card-body" onSubmit={(e) => onSubmit(e)} >
                <div className="input-box">
                    <label className="fs-14 text-black fw-medium mb-0">Question Title</label>
                    <p className="fs-13 pb-3 lh-20">Be specific and imagine you’re asking a question to another person</p>
                    <div className="form-group">
                        <input 
                        className="form-control form--control"
                        type="text" 
                        name="title" 
                        value={title}
                        onChange={(e) => onChange(e)}
                        id='title'
                        placeholder="e.g. Is there an R function for finding the index of an element in a vector?" 
                        required
                        />
                    </div>
                </div>
                {/* <!-- end input-box --> */}
                <div className="input-box">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <label className="fs-14 text-black fw-medium mb-0">Tags</label>
                            <p className="fs-13 pb-3 lh-20">Add up to 5 tags to describe what your question is about:</p>
                        </div>
                        <button type="button" className="popover-trigger btn border border-gray py-1 lh-18 px-2" data-container="body" data-toggle="popover" data-placement="top">
                                    <svg aria-hidden="true" className="svg-icon-color-gray" width="14" height="14">
                                        <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08zm.73-3.07l-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 00-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 017.7 6.07c.15-.1.21-.21.3-.33a1.14 1.14 0 00.02-1.48c-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.19.3-.16.63-.16.94H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 011.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01z"></path></svg>
                         </button>
                        <div className="generic-popover d-none">
                            <h4 className="fs-16 pb-1">How to tag</h4>
                            <p className="pb-2 fs-14">Tags help the right people find and answer your question.</p>
                            <ul className="generic-list-item generic-list-item-bullet">
                                <li className="lh-18 text-black-50">Identify your tags by completing the sentence, "My question is about…"</li>
                                <li className="lh-18 text-black-50">Include tags that are crucial to your question only, like <div className="tag-link">c#</div></li>
                                <li className="lh-18 text-black-50">Only include version numbers, like <div className="tag-link">c#-4.0</div>, when absolutely necessary</li>
                                <li className="lh-18 text-black-50">Use existing <a href="#" className="d-inline-block text-color hover-underline" target="_blank">popular tags</a></li>
                            </ul>
                            <p className="pb-1 fs-14">If you can’t find a tag:</p>
                            <p className="fs-14 text-black-50"><a href="#" className="text-color hover-underline" target="_blank">Create new tags</a> or post without it and <a href="#" className="text-color hover-underline" target="_blank">ask the community</a>
                                to create one for you.
                            </p>
                        </div>
                        {/* <!-- end generic-popover --> */}
                    </div>
                    <div className="form-group">
                        <input 
                        className="input-tags input--tags"
                        type="text" 
                        name="tagname" 
                        value={tagname}
                        onChange={(e) => onChange(e)}
                        id='tagname'
                        placeholder='e.g. (ajax django string)'
                        required
                        />
                    </div>
                </div>
                {/* <!-- end input-box --> */}
                <div className="input-box">
                    <label className="fs-14 text-black fw-medium mb-0">Category</label>
                    <p className="fs-13 pb-3 lh-20">Please choose the appropriate section so the question can be searched easily.</p>
                    <div className="form-group">
                        <select className="select-container select--container" data-placeholder="Select a Category">
                            <option defaultValue value="">Select a Category</option>
                            <option value="1">Analytics</option>
                            <option value="2">Communication</option>
                            <option value="3">Company</option>
                            <option value="4">Language</option>
                            <option value="5">Management</option>
                            <option value="6">Programmers</option>
                            <option value="7">Programs</option>
                            <option value="8">University</option>
                        </select>
                    </div>
                </div>
                {/* <!-- end input-box --> */}
                <div className="input-box">
                {/* <label className='form-label s-label fc-black-800'></label> */}
                    <label className="fs-14 text-black fw-medium mb-0">Details</label>
                    <p className="fs-13 pb-3 lh-20">
                    Include all the information someone would need to answer your question</p>
                    <div className="form-group">

                    <div className='s-textarea rich-text-editor-container'>
                        <RichTextEditor
                        ref={richTextEditorRef}
                        onChange={updateConvertedContent}
                        />
                    </div>
                    
                    {/* <textarea className="form-control form--control user-text-editor" rows="10" cols="40"></textarea> */}
                        <div className="d-flex align-items-center pt-2">
                            <div className="mr-3">
                                ``` <code className="badge bg-gray border border-gray text-gray">code</code> ```
                            </div>
                            <div className="mr-3 fw-bold">**bold**</div>
                            <div className="mr-3 font-italic">*italic*</div>
                            <div>&gt;quote</div>
                        </div>
                    </div>
                </div>
                {/* <!-- end input-box --> */}
                <div className="input-box">
                    <label className="fs-14 text-black fw-medium">Image</label>
                    <div className="form-group">
                        <div className="file-upload-wrap file-upload-layout-2">
                            <input type="file" name="files[]" className="file-upload-input" multiple />
                            <span className="file-upload-text d-flex align-items-center justify-content-center"><i className="la la-cloud-upload mr-2 fs-24"></i>Drop files here or click to upload.</span>
                        </div>
                    </div>
                </div>
                {/* <!-- end input-box --> */}
                <div className="input-box pt-2">
                    <div className="form-group">
                        <div className="custom-control custom-checkbox fs-13 mb-1">
                            <input type="checkbox" className="custom-control-input" id="notifiedMe" />
                            <label className="custom-control-label custom--control-label" htmlFor="notifiedMe">Get notified by email when someone answers this question.</label>
                        </div>
                        <div className="custom-control custom-checkbox fs-13">
                            <input type="checkbox" className="custom-control-input" id="youAgreeCheckBox" />
                            <label className="custom-control-label custom--control-label" htmlFor="youAgreeCheckBox">By asking your question, you agree to the <a href="privacy-policy.html" className="text-color hover-underline">Privacy Policy.</a></label>
                        </div>
                    </div>
                    <div className="btn-box post-button mt32">
                        <button 
                        type="submit"
                        className=" s-btn btn theme-btn"
                        id='submit-button'
                        name='submit-button'
                        >
                        Publish your question
                        </button>
                    </div>
                </div>
            </form>

        </Fragment>
    );
};

AskForm.propTypes = {
    addPost: PropTypes.func.isRequired,
  };
  
  export default connect(null, {addPost})(AskForm);