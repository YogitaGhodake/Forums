import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import UsersPage from "../../pages/UsersPage/UsersPage";

const Pagination = ({
  total,
  elementsPerPage,
  showInline,
  handlePaginationChange,
  hideOnSinglePage,
}) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pages =
    total % elementsPerPage === 0
      ? Math.floor(total / elementsPerPage)
      : Math.floor(total / elementsPerPage) + 1;

  console.log("pages", pages)

  const handleChange = useCallback(
    (current) => {
      setCurrentPage(current);
      handlePaginationChange(current);
    },
    [handlePaginationChange]
  );

  /**
   * According to docs of Stacks documentation active element needs to be <span/>,
   * inactive elements should be <a/>
   * @param {*} currentIdx
   * @param {*} activeIdx
   * @returns
   */
  const getPaginationItem = useCallback(
    (currentIdx, activeIdx) =>
      activeIdx === currentIdx + 1 ? (
        <li className="page-item active"><a className="page-link" href="#">{currentIdx + 1}</a></li>
        // <span className="s-pagination--item is-selected">{currentIdx + 1}</span>
      ) : (
        <li className="page-item"
          onClick={() => handleChange(currentIdx + 1)}
        ><a className="page-link" href="#" >{currentIdx + 1}</a></li>
      ),
    [handleChange]
  );

  useEffect(() => {
    const li = [];
    const half = Math.floor(showInline / 2);

    const enableNextBtn = currentPage !== pages;

    for (
      let i = 1;
      i <= showInline && i + currentPage - half - 1 < pages - 1;
      i++
    ) {
      const idx = i + currentPage - half - 1;

      if (i + currentPage - half >= 1) {
        li.push(getPaginationItem(idx, currentPage));
      }
    }

    
    // Add menu items with dots and last item.
    if (pages > showInline) {
      li.push([
        <span
          key="dots"
          className="s-pagination--item s-pagination--item__clear"
        >
          ...
        </span>,
        getPaginationItem(pages - 1, currentPage),
      ]);
    }

    // Add next button
    li.push([

      <li className="page-item" 
      key="next-btn"
      onClick={
        enableNextBtn ? () => handleChange(currentPage + 1) : undefined
      }
      >
                <Link className="page-link" to="#" aria-label="Next">
                  <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                  <span className="sr-only">Next</span>
                </Link>
              </li>
      // <span
      //   key="next-btn"
      //   className={`s-pagination--item`}
      //   onClick={
      //     enableNextBtn ? () => handleChange(currentPage + 1) : undefined
      //   }
      // >
      //   Next 
      // </span>,
    ]);

    setItems(li);
  }, [
    total,
    elementsPerPage,
    currentPage,
    showInline,
    handleChange,
    pages,
    getPaginationItem,
  ]);

  useEffect(() => {
    handleChange(1);
    // eslint-disable-next-line
  }, []);

  // Only show if single page.
  if (!(hideOnSinglePage && pages === 1)) {
    return (
      <div className="">
        <div className="pager pt-20px">
          <nav aria-label="Page navigation example">
            <ul className="pagination generic-pagination pr-1">
              {items}
            </ul>
          </nav>
          <p className="fs-13 pt-2"> Page no : {currentPage} of {total} results</p>
        </div>
      </div>
    );
  }

  return <></>;
};

Pagination.propTypes = {
  // The total number of entries.
  total: PropTypes.number.isRequired,
  // How many page items to actually show.
  showInline: PropTypes.number,
  elementsPerPage: PropTypes.number,
  // Whether to show the pagination, if only one page.
  hideOnSinglePage: PropTypes.bool,
  // Callback, for when the page changes.
  handlePaginationChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  showInline: 5,
  elementsPerPage: 10,
  hideOnSinglePage: true,
};

export default Pagination;
