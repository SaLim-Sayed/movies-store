import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    getPage(data.selected + 1)
    /* if (data.selected <500) {
      getPage(data.selected + 1);
    } else {
       
        getPage(Math.floor(Math.random() * (500 - 1) + 1));
       
    } */
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
