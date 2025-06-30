import React from "react";

const Pagination = ({ totalTasks, tasksPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalTasks / tasksPerPage);

  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map(num => (
        <button
          key={num + 1}
          onClick={() => setCurrentPage(num + 1)}
          className={currentPage === num + 1 ? "active" : ""}
        >
          {num + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;