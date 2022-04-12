import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../redux/users/users.actions';
import handleSorting from '../../services/handleSorting';
import Footer from '../../components/Header/Footer';
import Header from '../../components/Header/Header';
import Pagination from "../../components/Pagination/Pagination.component";
import Spinner from '../../components/Spinner/Spinner.component';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup.component';


const itemsPerPage = 7;
const showInline = 5;

const UsersPage = ({ getUsers, user: { id, username, users, loading } }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const [fetchSearch, setSearch] = useState('');
    const [sortType, setSortType] = useState('Popular');


    const [currentUsers, setCurrentUsers] = useState([]);

    const handlePaginationChange = (currentPage) => {
        setCurrentUsers(users.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage));
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    console.log("users 38", currentUsers)

    return loading || users === null ? (
        <Spinner type='page' width='75px' height='200px' />
    ) : (
        <Fragment>
            <Header dark={false} />
            <section className="question-area pt-40px pb-40px">
                <div className="container" id='mainbar'>
                    <div className="filters pb-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                            <h3 className="fs-22 fw-medium">

                                <span>
                                    {'Total Users : '} {new Intl.NumberFormat('en-IN').format(users.length)}
                                </span></h3>
                            <Link to="/askquestion" className="btn theme-btn theme-btn-md">Ask Question</Link>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <form className="mr-3 w-25">
                                <div className="form-group">
                                    <input
                                        className="form-control form--control form-control-sm h-auto lh-34"
                                        type="text"
                                        name="search"
                                        placeholder={'Filter by user'}
                                        onChange={handleChange}
                                        width={'200px'}
                                    />
                                    <button className="form-btn" type="button"><i className="la la-search"></i></button>
                                </div>
                            </form>
                            <div className="" role="group" aria-label="Filter button group">
                                {/* btn-group btn--group mb-3 hello */}
                                <ButtonGroup
                                    buttons={['Popular', 'Name', 'Active', 'New Users']}
                                    selected={sortType}
                                    setSelected={setSortType}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end filters --> */}
                    <div className="row">

                        {currentUsers
                            .filter((user) =>
                                user.username.toLowerCase().includes(fetchSearch.toLowerCase())
                            )
                            ?.sort(handleSorting(sortType, 'users'))
                            .map((user) => (
                                // <UserPanel key={user.id} user={user} />

                                <div className="col-lg-3 responsive-column-half" key={user.id} user={user} >

                                    <div className="media media-card p-3 animate__animated animate__fadeIn">
                                        <Link to={`/users/${user.id}`} className="media-img d-inline-block flex-shrink-0">
                                            <img src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`} />
                                        </Link>
                                        <div className="media-body">
                                            <h5 className="fs-16 fw-medium"><Link to={`/users/${user.id}`}>
                                                {user.username}
                                            </Link></h5>
                                            <small className="meta d-block lh-24 pb-1"><span>
                                                {user.posts_count} Questions | {user.tags_count} Tags
                                            </span></small>
                                            <p className="fw-medium fs-15 text-black-50 lh-18">
                                                Views {user.views}

                                            </p>
                                        </div>
                                        {/* <!-- end media-body --> */}
                                    </div>
                                    {/* <!-- end media --> */}
                                </div>

                            ))}

                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}

                    <Pagination
                        total={users.length}
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

UsersPage.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UsersPage);