import React from 'react';
import Footer from '../../components/Header/Footer';
import HeaderLight from '../../components/Header/HeaderLight';

const TagsPage = () => {

    return (
        <div>
            <HeaderLight />
            <section class="question-area pt-40px pb-40px">
                <div class="container">
                    <div class="filters pb-3">
                        <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">
                            <div class="pr-3">
                                <h3 class="fs-22 fw-medium">Tags</h3>
                                <p class="fs-15 lh-22 my-2">A tag is a keyword or label that categorizes your question with other, similar questions.
                                    <br/> Using the right tags makes it easier for others to find and answer your question.</p>
                            </div>
                            <a href="ask-question.html" class="btn theme-btn theme-btn-sm">Ask Question</a>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <form method="post" class="mr-3 w-25">
                                <div class="form-group">
                                    <input class="form-control form--control form-control-sm h-auto lh-34" type="text" name="search" placeholder="Filter by tag name"/>
                                        <button class="form-btn" type="button"><i class="la la-search"></i></button>
                                </div>
                            </form>
                            <div class="btn-group btn--group mb-3" role="group" aria-label="Filter button group">
                                <a href="#" class="btn active">All</a>
                                <a href="#" class="btn">Popular</a>
                                <a href="#" class="btn">Name</a>
                                <a href="#" class="btn">New</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end filters --> */}
                    <div class="row">
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">javascript</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question; e.g., [node.js],…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">java</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a high-level programming language. Use this tag when you're having problems using or understanding the language itself. This tag is rarely used alone and is most often used in conjunction with…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">python</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforce a clean and uniform syntax. Please note that Pyt…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">c#</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">php</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a widely used, high-level, dynamic, object-oriented, and interpreted scripting language primarily designed for server-side web development. Used for questions about the PHP language.
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">android</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-s…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">html</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible ex…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">jquery</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a JavaScript library, consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">c++</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a general-purpose programming language. It was originally designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">css</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">json</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">swift</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">objective-c</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a general-purpose programming language. It was originally designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">python-3.x</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">django</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="card card-item">
                                <div class="card-body">
                                    <div class="tags pb-1">
                                        <a href="#" class="tag-link tag-link-md tag-link-blue">angularjs</a>
                                    </div>
                                    <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…
                                    </p>
                                    <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                        <p class="pr-1 lh-18">2177849 questions</p>
                                        <p class="lh-18">901 asked today, 5319 this week</p>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div class="pager pt-30px">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination generic-pagination pr-1">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i class="la la-arrow-left"></i></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"><i class="la la-arrow-right"></i></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p class="fs-13 pt-2">Showing 1-20 of 50,577 results</p>
                    </div>
                </div>
                {/* <!-- end container --> */}
            </section>
            <Footer />
        </div>
    );
};

export default TagsPage;