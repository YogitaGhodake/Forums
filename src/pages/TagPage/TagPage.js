import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTagPosts } from '../../redux/posts/posts.actions';
import { getTag } from '../../redux/tags/tags.actions';
import handleSorting from '../../services/handleSorting';
import { useParams, Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination.component';
import PostItem from '../../components/PostItem/PostItem.component';
import Spinner from '../../components/Spinner/Spinner.component';
import PageTitle from '../../components/PageTitle/PageTitle.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';




const itemsPerPage = 12;
const showInline = 5;

const TagPage = ({ getTag, getTagPosts, tag, post: { posts, loading } }) => {
  useEffect(() => {
    getTagPosts(params.tagname);
    getTag(params.tagname);
    // eslint-disable-next-line
  }, [getTag, getTagPosts]);

  const params = useParams();

  const [sortType, setSortType] = useState('Newest');


  const [currentPosts, setCurrentPosts] = useState([]);
  const handlePaginationChange = (currentPage) => {
    setCurrentPosts(posts.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage));
  };

  if (tag.Navigate) {
    return <Navigate to='/tags' />
  }


  return tag.tag === null || tag.loading || loading ? (

    <Spinner type='page' width='75px' height='200px' />
  ) : (
    <Fragment>
      <Header dark={false} />
      <section className="question-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 pr-0">
            </div>
            <div className="col-lg-7 px-0">
              <PageTitle
                title={`Questions tagged [${tag.tag.tagname}] - CLONE Stack Overflow`}
              />
              <div className="question-main-bar border-left border-left-gray pt-40px pb-40px">
                <div className="filters pb-4 pl-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                    <h3 className="fs-22 fw-medium">
                      Questions tagged [{tag.tag.tagname}]
                    </h3>
                    <Link to="/add/question" className="btn theme-btn theme-btn-sm">Ask Question</Link>
                    <div>
                      <p
                        className='fs-body'
                        dangerouslySetInnerHTML={{ __html: tag.tag.description }}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <p className="pt-1 fs-15 fw-medium lh-20">
                      <span>
                        {new Intl.NumberFormat('en-IN').format(tag.tag.posts_count)}{' '}
                        {tag.tag.posts_count === 1 ? 'question' : 'questions'}
                      </span>
                    </p>
                    <div className="filter-option-box">
                      <ButtonGroup
                        buttons={['Newest', 'Top', 'Views', 'Oldest']}
                        selected={sortType}
                        setSelected={setSortType}
                      />
                    </div>{/* end filter-option-box */}
                  </div>
                </div>{/* end filters */}
                <div className="questions-snippet border-top border-top-gray">
                  <div className='questions'>
                    {tag.tag.posts_count === 0 ? (
                      <h4 style={{ margin: '30px 30px' }}>
                        There are no questions from this tag
                      </h4>
                    ) : (
                      posts
                        ?.sort(handleSorting(sortType))
                        .map((post) => <PostItem key={post.id} post={post} />)
                    )}
                  </div>

                </div>{/* end questions-snippet */}
                <Pagination
                  total={posts.length}
                  elementsPerPage={itemsPerPage}
                  showInline={showInline}
                  handlePaginationChange={(currentPage) => handlePaginationChange(currentPage)}
                  hideOnSinglePage={true}
                />

              </div>{/* end question-main-bar */}
            </div>{/* end col-lg-7 */}


            <div className="col-lg-3">
              <div className="sidebar pt-40px">
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="fs-17 pb-3">Related Questions</h3>
                    <div className="divider"><span /></div>
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
                      </div>{/* end media */}
                      <div className="media media-card media--card media--card-2">
                        <div className="media-body">
                          <h5><a href="question-details.html">Is it true while finding Time Complexity of the algorithm [closed]</a></h5>
                          <small className="meta">
                            <span className="pr-1">48 mins ago</span>
                            <span className="pr-1">. by</span>
                            <a href="#" className="author">wimax</a>
                          </small>
                        </div>
                      </div>{/* end media */}
                      <div className="media media-card media--card media--card-2">
                        <div className="media-body">
                          <h5><a href="question-details.html">image picker and store them into firebase with flutter</a></h5>
                          <small className="meta">
                            <span className="pr-1">1 hour ago</span>
                            <span className="pr-1">. by</span>
                            <a href="#" className="author">Antonin gavrel</a>
                          </small>
                        </div>
                      </div>{/* end media */}
                    </div>{/* end sidebar-questions */}
                  </div>
                </div>{/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="fs-17 pb-3">Related Tags</h3>
                    <div className="divider"><span /></div>
                    <div className="tags pt-4">
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">analytics</a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>{/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">computer</a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>{/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">python</a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>{/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">javascript</a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>{/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">c#</a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>{/* end tag-item */}
                      <div className="collapse" id="showMoreTags">
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">java</a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">swift</a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">html</a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">angular</a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">flutter</a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>{/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">machine-language</a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>{/* end tag-item */}
                      </div>{/* end collapse */}
                      <a className="collapse-btn fs-13" data-toggle="collapse" href="#showMoreTags" role="button" aria-expanded="false" aria-controls="showMoreTags">
                        <span className="collapse-btn-hide">Show more<i className="la la-angle-down ml-1 fs-11" /></span>
                        <span className="collapse-btn-show">Show less<i className="la la-angle-up ml-1 fs-11" /></span>
                      </a>
                    </div>
                  </div>
                </div>{/* end card */}
                <div className="ad-card">
                  <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">Advertisements</h4>
                  <div className="ad-banner mb-4 mx-auto">
                    <span className="ad-text">290x500</span>
                  </div>
                </div>{/* end ad-card */}
              </div>{/* end sidebar */}
            </div>{/* end col-lg-3 */}
          </div>{/* end row */}
        </div>{/* end container */}
      </section>
      <Footer />
    </Fragment>
  );
};

TagPage.propTypes = {
  getTag: PropTypes.func.isRequired,
  getTagPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  tag: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  tag: state.tag,
});

export default connect(mapStateToProps, { getTagPosts, getTag })(TagPage);