import "./Pagination.css";
import arrowLeft from "../logo/arrowLeft.svg";
import arrowRight from "../logo/arrowRight.svg";
import { usePagination, DOTS } from "../customHook/usePagination";

const Pagination = ({
  currentPage,
  totalItemAmount,
  itemsPerPage,
  siblingCount = 1,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    totalItemAmount,
    itemsPerPage,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const next = () => {
    onPageChange(currentPage + 1);
  };
  const prev = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <section className="pagination-section">
      <div className="button-container">
        <button
          className="pageButton"
          onClick={prev}
          disabled={currentPage === 1}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return DOTS;
          }

          return (
            <button
              className={`pageButton ${
                pageNumber === currentPage ? "active-pageButton" : null
              }`}
              key={index}
              onClick={() => {
                onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="pageButton"
          onClick={next}
          disabled={currentPage === lastPage}
        >
          <img src={arrowRight} alt="arrowLeft" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
