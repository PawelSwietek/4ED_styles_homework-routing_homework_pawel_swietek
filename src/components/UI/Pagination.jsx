import {NavLink} from "react-router-dom";

const Pagination = ({pages, currentPage, max = 5}) => {

  const half = Math.floor(max / 2);
  let goTo = max;

  if (currentPage + half > pages) {
    goTo = pages;
  } else if (currentPage > half && max > 1) {
    goTo = currentPage + half;
  } else if (max <= 1) {
    goTo = pages
  }

  const startFrom = max > 1 ? Math.max(goTo - max, 0) : currentPage - 1;

  const paginationArray = Array.from({length: Math.min(pages, max)}, (_, i) => i + 1 + startFrom);

  const styles = {
    btn: (active) => (
      active
        ? `bg-gray-700 text-white pointer-events-none flex items-center justify-center px-6 h-10 leading-tight `
        : "bg-gray-800  text-gray-400 hover:bg-gray-700 hover:text-white flex items-center justify-center px-6 h-10 leading-tight"
    ),
    prevBtn: () => (
      currentPage === 1
        ? "pointer-events-none bg-gray-600 flex items-center justify-center px-4 h-10 ml-0 leading-tight  rounded-l-lg text-gray-400 hover:bg-gray-700 hover:text-white"
        : "bg-gray-800 flex items-center justify-center px-4 h-10 leading-tight   rounded-l-lg text-gray-400 hover:bg-gray-700 hover:text-white"
    ),
    nextBtn: () => (
      currentPage >= goTo
        ? "pointer-events-none bg-gray-600 flex items-center justify-center px-4 h-10 ml-0 leading-tight  rounded-r-lg text-gray-400 hover:bg-gray-700 hover:text-white"
        : "bg-gray-800 flex items-center justify-center px-4 h-10 leading-tight   rounded-r-lg text-gray-400 hover:bg-gray-700 hover:text-white"
    ),
  };

  return (
    <div id="paginationContainer" className="w-2/6 flex justify-center items-center sticky top-0">
      <nav>
        <ul className="inline-flex  text-base h-10 divide-x divide-gray-700  py-6">
          <li key={"prev"}>
            <NavLink
              to={'/rickandmorty/' + (currentPage - 1).toString()}
              // onClick={() => setCurrentPage(currentPage - 1)}
              className={styles.prevBtn()}
            >
              Previous
            </NavLink>
          </li>
          {paginationArray.map((page) => (
            <li key={page}>
              <NavLink
                to={'/rickandmorty/' + page.toString()}
                // onClick={() => setCurrentPage(page)}
                className={styles.btn(currentPage === page)}
              >
                {page}
              </NavLink>
            </li>
          ))}

          <li key={"next"}>
            <NavLink
              to={'/rickandmorty/' + (currentPage + 1).toString()}
              // onClick={() => setCurrentPage(currentPage + 1)}
              className={styles.nextBtn()}
            >
              Next
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
