import React from 'react';
import Footer from '../../components2/Header/Footer';
import HeaderLight from '../../components2/Header/HeaderLight';


const AddNewQuestion = () => {

    return (
        //*****Add Question ********
        <div>
            <HeaderLight />
            <section class="question-area pt-80px pb-40px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card card-item">
                                <form method="post" class="card-body">
                                    <div class="input-box">
                                        <label class="fs-14 text-black fw-medium mb-0">Question Title</label>
                                        <p class="fs-13 pb-3 lh-20">Be specific and imagine you’re asking a question to another person</p>
                                        <div class="form-group">
                                            <input class="form-control form--control" type="text" name="text" placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
                                        </div>
                                    </div>
                                    {/* <!-- end input-box --> */}
                                    <div class="input-box">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                <label class="fs-14 text-black fw-medium mb-0">Tags</label>
                                                <p class="fs-13 pb-3 lh-20">Add up to 5 tags to describe what your question is about:</p>
                                            </div>
                                            <button type="button" class="popover-trigger btn border border-gray py-1 lh-18 px-2" data-container="body" data-toggle="popover" data-placement="top">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-icon-color-gray"
                                                    width={14}
                                                    height={14}
                                                >
                                                    <path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33a1.14 1.14 0 0 0 .02-1.48c-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.19.3-.16.63-.16.94H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01z" />
                                                </svg>
                                            </button>
                                            <div class="generic-popover d-none">
                                                <h4 class="fs-16 pb-1">How to tag</h4>
                                                <p class="pb-2 fs-14">Tags help the right people find and answer your question.</p>
                                                <ul class="generic-list-item generic-list-item-bullet">
                                                    <li class="lh-18 text-black-50">Identify your tags by completing the sentence, "My question is about…"</li>
                                                    <li class="lh-18 text-black-50">Include tags that are crucial to your question only, like <div class="tag-link">c#</div></li>
                                                    <li class="lh-18 text-black-50">Only include version numbers, like <div class="tag-link">c#-4.0</div>, when absolutely necessary</li>
                                                    <li class="lh-18 text-black-50">Use existing <a href="#" class="d-inline-block text-color hover-underline" target="_blank">popular tags</a></li>
                                                </ul>
                                                <p class="pb-1 fs-14">If you can’t find a tag:</p>
                                                <p class="fs-14 text-black-50"><a href="#" class="text-color hover-underline" target="_blank">Create new tags</a> or post without it and <a href="#" class="text-color hover-underline" target="_blank">ask the community</a>
                                                    to create one for you.
                                                </p>
                                            </div>
                                            {/* <!-- end generic-popover --> */}
                                        </div>
                                        <div class="form-group">
                                            <input class="input-tags input--tags" type="text" name="tags" placeholder="e.g. javascript" />
                                        </div>
                                    </div>
                                    {/* <!-- end input-box --> */}
                                    <div class="input-box">
                                        <label class="fs-14 text-black fw-medium mb-0">Category</label>
                                        <p class="fs-13 pb-3 lh-20">Please choose the appropriate section so the question can be searched easily.</p>
                                        <div class="form-group">
                                            <select class="select-container select--container" data-placeholder="Select a Category">
                                                <option selected value="">Select a Category</option>
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
                                    <div class="input-box">
                                        <label class="fs-14 text-black fw-medium mb-0">Details</label>
                                        <p class="fs-13 pb-3 lh-20">Include all the information someone would need to answer your question</p>
                                        <div class="form-group">
                                            <textarea class="form-control form--control user-text-editor" rows="10" cols="40"></textarea>
                                            <div class="d-flex align-items-center pt-2">
                                                <div class="mr-3">
                                                    ``` <code class="badge bg-gray border border-gray text-gray">code</code> ```
                                                </div>
                                                <div class="mr-3 fw-bold">**bold**</div>
                                                <div class="mr-3 font-italic">*italic*</div>
                                                <div>&gt;quote</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end input-box --> */}
                                    <div class="input-box">
                                        <label class="fs-14 text-black fw-medium">Image</label>
                                        <div class="form-group">
                                            <div class="file-upload-wrap file-upload-layout-2">
                                                <input type="file" name="files[]" class="file-upload-input" multiple />
                                                <span class="file-upload-text d-flex align-items-center justify-content-center"><i class="la la-cloud-upload mr-2 fs-24"></i>Drop files here or click to upload.</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end input-box --> */}
                                    <div class="input-box pt-2">
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox fs-13 mb-1">
                                                <input type="checkbox" class="custom-control-input" id="notifiedMe" />
                                                <label class="custom-control-label custom--control-label" for="notifiedMe">Get notified by email when someone answers this question.</label>
                                            </div>
                                            <div class="custom-control custom-checkbox fs-13">
                                                <input type="checkbox" class="custom-control-input" id="youAgreeCheckBox" />
                                                <label class="custom-control-label custom--control-label" for="youAgreeCheckBox">By asking your question, you agree to the <a href="privacy-policy.html" class="text-color hover-underline">Privacy Policy.</a></label>
                                            </div>
                                        </div>
                                        <div class="btn-box">
                                            <button type="submit" class="btn theme-btn">Publish your question</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div class="col-lg-4">
                            <div class="sidebar">
                                <div class="card card-item p-4">
                                    <h3 class="fs-17 pb-3">Step 1: Draft your question</h3>
                                    <div class="divider"><span></span></div>
                                    <p class="fs-14 lh-22 pb-2 pt-3">The community is here to help you with specific coding, algorithm, or language problems.</p>
                                    <p class="fs-14 lh-22">Avoid asking opinion-based questions.</p>
                                    <div id="accordion" class="generic-accordion pt-4">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <button class="btn btn-link fs-15" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span><span class="text-color pr-2 fs-16">1.</span> Summarize the problem</span>
                                                    <i class="la la-angle-down collapse-icon"></i>
                                                </button>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div class="card-body">
                                                    <ul class="generic-list-item generic-list-item-bullet generic-list-item--bullet-2 fs-14">
                                                        <li class="lh-18 text-black-50">Include details about your goal</li>
                                                        <li class="lh-18 text-black-50">Describe expected and actual results</li>
                                                        <li class="lh-18 text-black-50 mb-0">Include any error messages</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card --> */}
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <button class="btn btn-link collapsed fs-15" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span><span class="text-color pr-2 fs-16">2.</span> Describe what you’ve tried</span>
                                                    <i class="la la-angle-down collapse-icon"></i>
                                                </button>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div class="card-body">
                                                    <p class="fs-14 lh-22 text-black-50">
                                                        Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card --> */}
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <button class="btn btn-link collapsed fs-15" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span><span class="text-color pr-2 fs-16">3.</span> Show some code</span>
                                                    <i class="la la-angle-down collapse-icon"></i>
                                                </button>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div class="card-body">
                                                    <p class="fs-14 lh-22 text-black-50">
                                                        When appropriate, share the minimum amount of code others need to reproduce your problem (also called a
                                                        <a href="#" class="text-color hover-underline">minimum</a>, <a href="#" class="text-color hover-underline">reproducible example</a>)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card --> */}
                                    </div>
                                    {/* <!-- end accordion --> */}
                                </div>
                                {/* <!-- end card --> */}
                                <div id="accordion-two" class="generic-accordion">
                                    <div class="card mb-3">
                                        <div class="card-header" id="headingFour">
                                            <button class="btn btn-link collapsed fs-15" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <span>Have a non-programming question?</span>
                                                <i class="la la-angle-down collapse-icon"></i>
                                            </button>
                                        </div>
                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion-two">
                                            <div class="card-body">
                                                <p class="fs-14 lh-22 text-black-50 pb-2">
                                                    <a class="text-color hover-underline d-block" href="#" target="_blank">Super user</a>
                                                    Troubleshooting hardware and software issues
                                                </p>
                                                <p class="fs-14 lh-22 text-black-50 pb-2">
                                                    <a class="text-color hover-underline d-block" href="#" target="_blank">Software engineering</a>
                                                    For software development methods and process questions
                                                </p>
                                                <p class="fs-14 lh-22 text-black-50 pb-2">
                                                    <a class="text-color hover-underline d-block" href="#" target="_blank">Hardware recommendations</a>
                                                </p>
                                                <p class="fs-14 lh-22 text-black-50 pb-2">
                                                    <a class="text-color hover-underline d-block" href="#" target="_blank">Software recommendations</a>
                                                </p>
                                                <p class="fs-14 lh-22 text-black-50">Ask questions about the site on <a class="text-color hover-underline" href="#" target="_blank">meta</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card --> */}
                                    <div class="card">
                                        <div class="card-header" id="headingFive">
                                            <button class="btn btn-link collapsed fs-15" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <span>More helpful links</span>
                                                <i class="la la-angle-down collapse-icon"></i>
                                            </button>
                                        </div>
                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion-two">
                                            <div class="card-body">
                                                <p class="fs-14 lh-22 text-black-50 pb-2">
                                                    Find more information about <a class="text-color hover-underline" href="#" target="_blank">how to ask a good question here</a>
                                                </p>
                                                <p class="fs-14 lh-22 text-black-50">
                                                    Visit the <a class="text-color hover-underline" href="#" target="_blank">help center</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card --> */}

                                </div>
                                {/* <!-- end accordion --> */}
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            <Footer />
        </div>
    );
};

export default AddNewQuestion;
