import React, {Fragment, useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../redux/posts/posts.actions';
import handleSorting from '../../services/handleSorting';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';
import PostItem from '../../components/PostItem/PostItem.component';
import Spinner from '../../components/Spinner/Spinner.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';
import SearchBox from '../../components/SearchBox/SearchBox.component';
import PageTitle from '../../components/PageTitle/PageTitle.component';

import Pagination from '../../components/Pagination/Pagination.component';


const itemsPerPage = 12;
const showInline = 5;


 const SearchQuestions = ({getPosts, post: {posts, loading}}) => {
    useEffect(() => {
        getPosts();
      }, [getPosts]);

      const [sortType, setSortType] = useState('Newest');
      let searchQuery = new URLSearchParams(useLocation().search).get('search');
    
      const [currentPosts, setCurrentPosts] = useState([]);
    
      const handlePaginationChange = (currentPage) => {
        setCurrentPosts(posts.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage));
      };
    
console.log("searchQuery", searchQuery,currentPosts,"currentPosts" );

    return loading || posts === null ? (
     <Spinner type='page' width='75px' height='200px' />
    ) : (
        <Fragment>
            <Header dark={false} />
            {searchQuery ? (
        <PageTitle
          title={`Search Results for ${searchQuery} - CLONE Stack Overflow`}
        />
      ) : (
        ''
      )}
        <div className="question-area">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-2 pr-0">
                            <div className="sidebar position-sticky top-0 pt-40px">
                                <ul className="generic-list-item generic-list-item-highlight fs-15">
                                    <li className="lh-26"><Link to="/"><i className="la la-home mr-1 text-black"></i> Home</Link></li>
                                    <li className="lh-26 active"><Link to="/questions"><i className="la la-globe mr-1 text-black"></i> Questions</Link></li>
                                    <li className="lh-26"><Link to="/tags"><i className="la la-tags mr-1 text-black"></i> Tags</Link></li>
                                    <li className="lh-26"><Link to="/users"><i className="la la-user mr-1 text-black"></i> Users</Link></li>
                                    <li className="lh-26"><Link to="/badges"><i className="la la-id-badge mr-1 text-black"></i> Badges</Link></li>
                                    <li className="lh-26"><Link to="/categorylist"><i className="la la-sort mr-1 text-black"></i> Categories</Link></li>
                                    <li className="lh-26"><Link to="/joblist"><i className="la la-mouse mr-1 text-black"></i> Jobs</Link></li>
                                    <li className="lh-26"><Link to="/companies"><i className="la la-briefcase mr-1 text-black"></i> Companies</Link></li>
                                </ul>
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-2 --> */}
                        <div className="col-lg-7 px-0">
                            <div id='mainbar' className="question-main-bar border-left border-left-gray pt-40px pb-40px">
                                <div className="filters pb-4 pl-3">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                                        <h3 className="fs-22 fw-medium">
                                        {searchQuery ? 'Search Results' : 'All Questions'}
                                        </h3>
                                        {/* <div className='questions-btn'> */}
                                        {/* <LinkButton className="btn theme-btn theme-btn-sm"
                                            text={'Ask Question'}
                                            link={'/askquestion'} */}

                                        {/* // type={'s-btn__primary'}
                                            />   */}
                                        <Link to="/add/question" className="btn theme-btn theme-btn-sm">Ask Question</Link>
                                        {/* </div> */}
                                    </div>
                                    {searchQuery ? (
                                    <div className='search-questions'>
                                        <span style={{color: '#acb2b8', fontSize: '12px'}}>
                                        Results for {searchQuery}
                                        </span>
                                        {/* <SearchBox placeholder={'Search...'} name={'search'} pt={'mt8'} /> */}
                                    </div>
                                    ) : (
                                    ''
                                    )}
                                    <div className="d-flex flex-wrap align-items-center justify-content-between questions-tabs">
                                        <span>
                                            {new Intl.NumberFormat('en-IN').format(posts.length)} questions
                                        </span>
                                        <div className="filter-option-box">
                                            <ButtonGroup
                                                buttons={['Newest', 'Top', 'Views', 'Oldest']}
                                                selected={sortType}
                                                setSelected={setSortType}
                                            />
                                            {/* <select className="custom-select">
                                                <option defaultValue="newest" value="selected">Newest </option>
                                                <option value="featured">Bountied (390)</option>
                                                <option value="frequent">Frequent </option>
                                                <option value="votes">Votes </option>
                                                <option value="active">Active </option>
                                                <option value="unanswered">Unanswered </option>
                                            </select> */}
                                        </div>
                                        {/* <!-- end filter-option-box --> */}
                                    </div>

                                </div>
                                <div className="questions-snippet border-top border-top-gray">
                                
                                     <div className="questions">
                                     {currentPosts
                                        .filter((post) =>
                                        post.title.toLowerCase().includes(searchQuery ? searchQuery : '')
                                        )
                                        ?.sort(handleSorting(sortType))
                                        .map((post) => (
                                        <PostItem key={post.id} post={post} />
                                        ))}
                                        </div>
                                   
                                </div>
                                {/* <!-- end questions-snippet --> */}
                                <Pagination
                                            total={posts.length}
                                            elementsPerPage={itemsPerPage}
                                            showInline={showInline}
                                            handlePaginationChange={(currentPage) => 
                                            handlePaginationChange(currentPage)
                                        }
                                            hideOnSinglePage={true}
                                  />
                            </div>
                            {/* <!-- end question-main-bar --> */}
                        </div>
                        {/* <!-- end col-lg-7 --> */}
                        <div className="col-lg-3">
                            <div className="sidebar pt-40px">
                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="fs-17 pb-3">Related Questions</h3>
                                        <div className="divider"><span></span></div>
                                        <div className="sidebar-questions pt-3">
                                            <div className="media media-card media--card media--card-2">
                                                <div className="media-body">
                                                    <h5><a href="question-details.html">Using web3 to call precompile contract</a></h5>
                                                    <small className="meta">
                                                        <span className="pr-1">2 mins ago</span>
                                                        <span className="pr-1">. by</span>
                                                        <a href="#" className="author">Sudhir Kumbhare</a>
                                                    </small>
                                                </div>
                                            </div>
                                            {/* <!-- end media --> */}
                                            <div className="media media-card media--card media--card-2">
                                                <div className="media-body">
                                                    <h5><a href="question-details.html">Is it true while finding Time Complexity of the algorithm [closed]</a></h5>
                                                    <small className="meta">
                                                        <span className="pr-1">48 mins ago</span>
                                                        <span className="pr-1">. by</span>
                                                        <a href="#" className="author">wimax</a>
                                                    </small>
                                                </div>
                                            </div>
                                            {/* <!-- end media --> */}
                                            <div className="media media-card media--card media--card-2">
                                                <div className="media-body">
                                                    <h5><a href="question-details.html">image picker and store them into firebase with flutter</a></h5>
                                                    <small className="meta">
                                                        <span className="pr-1">1 hour ago</span>
                                                        <span className="pr-1">. by</span>
                                                        <a href="#" className="author">Antonin gavrel</a>
                                                    </small>
                                                </div>
                                            </div>
                                            {/* <!-- end media --> */}
                                        </div>
                                        {/* <!-- end sidebar-questions --> */}
                                    </div>
                                </div>
                                {/* <!-- end card --> */}
                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="fs-17 pb-3">Related Tags</h3>
                                        <div className="divider"><span></span></div>
                                        <div className="tags pt-4">
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">analytics</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">computer</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">python</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">javascript</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">c#</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="collapse" id="showMoreTags">
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">java</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">swift</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">html</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">angular</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">flutter</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">machine-language</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                            </div>
                                            {/* <!-- end collapse --> */}
                                            <a className="collapse-btn fs-13" data-toggle="collapse" href="#showMoreTags" role="button" aria-expanded="false" aria-controls="showMoreTags">
                                                <span className="collapse-btn-hide">Show more<i className="la la-angle-down ml-1 fs-11"></i></span>
                                                <span className="collapse-btn-show">Show less<i className="la la-angle-up ml-1 fs-11"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card --> */}
                                <div className="ad-card">
                                    <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">Advertisements</h4>
                                    <div className="ad-banner mb-4 mx-auto">
                                        <span className="ad-text">290x500</span>
                                    </div>
                                </div>
                                {/* <!-- end ad-card --> */}
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            <Footer />
        </Fragment>
    );
};
SearchQuestions.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    post: state.post,
  });
  
  export default connect(mapStateToProps, {getPosts})(SearchQuestions);
