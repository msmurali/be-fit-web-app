import React from "react";
import ExerciseCard from "./ExerciseCard";
import { AppStateContext } from "../contexts/app-state.context";
import { EXERCISES_PER_PAGE, PAGINATION_WIDTH } from "../constants/consts";
import ResponsivePaginationComponent from "react-responsive-pagination";
import { v4 as uuid } from "uuid";
import "react-responsive-pagination/themes/classic.css";
import "../shared/styles/pagination-styles.css";
import { Exercise } from "../models/excercise.model";
import { useNavigate } from "react-router-dom";

interface ExerciseListProps {
  exercises?: Exercise[];
}

const ExerciseList = ({ exercises }: ExerciseListProps) => {
  const appState = React.useContext(AppStateContext) || {};
  const exercisesList = React.useMemo(
    () => exercises || appState?.exercises || [],
    [appState?.exercises, exercises]
  );
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const currentPageStart = EXERCISES_PER_PAGE * (currentPage - 1);
  const currentPageEnd = EXERCISES_PER_PAGE * currentPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const navigateToSearchPage = () => {
    return navigate("/explore");
  };

  React.useEffect(() => {
    setTotalPages(Math.ceil((exercisesList?.length || 0) / EXERCISES_PER_PAGE));
  }, [exercisesList]);

  return (
    <div className="exercise-list px-4 md:px-8 py-14 bg-primary font-poppins">
      {!exercises && (
        <div className="exercise-list_header flex flex-row justify-between items-center pb-14">
          <h1 className="text-2xl font-bold text-white w-3/5">
            Every exercise with detailed steps
          </h1>
          <button
            onClick={navigateToSearchPage}
            className="text-secondary p-2 border-2 border-secondary rounded-lg"
          >
            See More
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercisesList &&
          exercisesList
            ?.slice(currentPageStart, currentPageEnd)
            ?.map((exercise) => (
              <ExerciseCard key={uuid()} exercise={exercise}></ExerciseCard>
            ))}
      </div>
      <div className="mt-14 flex justify-center items-center">
        <ResponsivePaginationComponent
          className="pagination"
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
          maxWidth={PAGINATION_WIDTH}
        ></ResponsivePaginationComponent>
      </div>
    </div>
  );
};

export default ExerciseList;
