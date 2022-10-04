/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const PostPagination = ({ page, setPage, postCount }) => {
  
  let totalPages;

  const pagination = () => {
    totalPages = Math.ceil(postCount && postCount.totalPosts / 3);
    if (totalPages > 10) totalPages = 10;
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <a className={`page-link ${page === i && 'activePagination'}`} onClick={() => setPage(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };
  
  return (
    <nav>
      <ul>
        <li className="pagination justify-content-center">
          <a className={`page-link ${page === 1 && 'disabled'}`} onClick={() => setPage(1)}>
            First Page
          </a>
        </li>
        {pagination()}
        <li>
          <a className={`page-link ${page === totalPages  && 'disabled'}`} onClick={() => setPage(totalPages)}>
            Last Page
          </a>
        </li>
      </ul>
    </nav>

  )
};

export default PostPagination;
