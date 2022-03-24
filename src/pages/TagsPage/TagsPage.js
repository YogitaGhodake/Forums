import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTags } from '../../redux/tags/tags.actions';
import handleSorting from '../../services/handleSorting';
import Footer from '../../components2/Header/Footer';
import moment from 'moment';
import HeaderLight from '../../components/Header/HeaderLight';


import Spinner from '../../components/Spinner/Spinner.component';
import SearchBox from '../../components/SearchBox/SearchBox.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';

// import './TagsPage.styles.scss';
import Pagination from '../../components/Pagination/Pagination.component';

const itemsPerPage = 3;
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



    return loading || tags === null ? (
        <Spinner type='page' width='75px' height='200px' />
    ) : (
        <Fragment>
            <HeaderLight />
            <section class="question-area pt-40px pb-40px">
                <div class="container">
                    <div class="filters pb-3">
                        <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">
                            <div class="pr-3">
                                <h3 class="fs-22 fw-medium">
                                    <span>
                                        {'Total Tags : '}{new Intl.NumberFormat('en-IN').format(tags.length)}
                                    </span>
                                </h3>
                                <p class="fs-15 lh-22 my-2">A tag is a keyword or label that categorizes your question with other, similar questions.
                                    <br /> Using the right tags makes it easier for others to find and answer your question.</p>

                            </div>
                            <Link to="/add/question" class="btn theme-btn theme-btn-sm">Ask Question</Link>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <form class="mr-3 w-25">
                                <div class="form-group" >
                                    <input
                                        class="form-control form--control form-control-sm h-auto lh-34"
                                        type="text"
                                        name="search"
                                        placeholder={'Filter by tag name'}
                                        onChange={handleChange}
                                        width={'200px'}
                                    />
                                    <button class="form-btn" type="button"><i class="la la-search"></i></button>
                                </div>
                            </form>
                            <div class="" role="group" aria-label="Filter button group">
                                <ButtonGroup
                                    buttons={['All', 'Popular', 'Name', 'New']}
                                    selected={sortType}
                                    setSelected={setSortType}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end filters --> */}
                    <div class="row">
                        {tags
                        // currentTags
                            .filter((tag) =>
                                tag.tagname.toLowerCase().includes(fetchSearch.toLowerCase())
                            )
                            ?.sort(handleSorting(sortType))
                            .map((tag) => (
                                // <h1>hello</h1>
                                // <TagPanel key={tag.tagname} tag={tag} />

                                <div class="col-lg-3 responsive-column-half">
                                <div class="card card-item">
                                    <div class="card-body">
                                        <div class="tags pb-1">
                                            <Link to={`/tags/${tag.tagname}`} class="tag-link tag-link-md tag-link-blue">{tag.tagname}</Link>
                                        </div>
                                        <p class="card-text fs-14 truncate-4 lh-24 text-black-50">
                                        {tag.description}
                                        </p>
                                        <div class="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                            <p class="pr-1 lh-18">
                                            {tag.posts_count} {tag.posts_count === 1 ? 'question' : 'questions'}
                                            </p>
                                            <p class="pr-1 lh-18" style={{float:'right'}}>
                                            added 
                                            <div>
                                             {moment(tag.created_at).fromNow(false)}
                                            </div>
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