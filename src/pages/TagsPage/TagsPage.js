import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTags } from '../../redux/tags/tags.actions';
import handleSorting from '../../services/handleSorting';
import Footer from '../../components/Header/Footer';
import moment from 'moment';
import HeaderLight from '../../components/Header/HeaderLight';


import Spinner from '../../components/Spinner/Spinner.component';
import SearchBox from '../../components/SearchBox/SearchBox.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';

import './TagsPage.styles.scss';
import Pagination from '../../components/Pagination/Pagination.component';

import { Popover, OverlayTrigger, Button } from 'react-bootstrap';


const itemsPerPage = 12;
const showInline = 5;

const TagsPage = ({ getTags, tag: { tags, loading } }) => {
    useEffect(() => {
        getTags();
    }, [getTags]);


    const [fetchSearch, setSearch] = useState('');
    const [sortType, setSortType] = useState('Popular');

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const [currentTags, setCurrentTags] = useState([]);
    console.log("tags  and currentTags==> 26", tags, currentTags);

    const handlePaginationChange = (currentPage) => {
        setCurrentTags(tags.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage));
    };

  

    return loading || currentTags === null ? (
        <Spinner type='page' width='75px' height='200px' />
    ) : (
        <Fragment>
            <HeaderLight />
            <section className="question-area pt-40px pb-40px">
                <div className="container" >
                    <div className="filters pb-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
                            <div className="pr-3">
                                <h3 className="fs-22 fw-medium">
                                    <span>
                                        {'Total Tags : '}{new Intl.NumberFormat('en-IN').format(tags.length)}
                                    </span>
                                </h3>
                                <p className="fs-15 lh-22 my-2">A tag is a keyword or label that categorizes your question with other, similar questions.
                                    <br /> Using the right tags makes it easier for others to find and answer your question.</p>

                            </div>
                            <Link to="/add/question" className="btn theme-btn theme-btn-sm">Ask Question</Link>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <form className="mr-3 w-25">
                                <div className="form-group" >
                                    <input
                                        className="form-control form--control form-control-sm h-auto lh-34"
                                        type="text"
                                        name="search"
                                        placeholder={'Filter by tag name'}
                                        onChange={handleChange}
                                        width={'200px'}
                                    />
                                    <button className="form-btn" type="button"><i className="la la-search"></i></button>
                                </div>
                            </form>
                            <div className="" role="group" aria-label="Filter button group">
                                <ButtonGroup
                                    buttons={['All', 'Popular', 'Name', 'New']}
                                    selected={sortType}
                                    setSelected={setSortType}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end filters --> */}
                    <div className="row">
                        {currentTags
                            // currentTags
                            .filter((tag) =>
                                tag.tagname.toLowerCase().includes(fetchSearch.toLowerCase())
                            )
                            ?.sort(handleSorting(sortType))
                            .map((tag) => (
                                // <h1>hello</h1>
                                // <TagPanel key={tag.tagname} tag={tag} />

                                <div className="col-lg-3 responsive-column-half">
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="tags pb-1">
                                                <Link to={`/tags/${tag.tagname}`} className="tag-link tag-link-md tag-link-blue">{tag.tagname}</Link>
                                               
                                            </div>



                                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50 hide">
                                                {tag.description}
                                            </p>

                                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                                <p className="pr-1 lh-18">
                                                    {tag.posts_count} {tag.posts_count === 1 ? 'question' : 'questions'}

                                                </p>
                                                <p className="lh-18" style={{ textAlign: 'right' }}>
                                                    Recent question asked {moment(tag.created_at).fromNow(false)}

                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- end card-body --> */}
                                    </div>
                                    {/* <!-- end card --> */}
                                </div>
                            ))}

                        {/* <!-- end col-lg-3 --> */}

                    </div>


                    {/* <!-- end row --> */}
                    <Pagination
                        total={tags.length}
                        elementsPerPage={itemsPerPage}
                        showInline={showInline}
                        handlePaginationChange={(currentPage) =>
                            handlePaginationChange(currentPage)
                        }
                        hideOnSinglePage={true}
                    />
                </div>
                {/* <!-- end container --> */}
            </section>
            <Footer />
        </Fragment>
    );
};

TagsPage.propTypes = {
    getTags: PropTypes.func.isRequired,
    tag: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tag: state.tag,
});

export default connect(mapStateToProps, { getTags })(TagsPage);