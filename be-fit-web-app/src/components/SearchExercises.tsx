import React from "react";
import { AppStateContext } from "../contexts/app-state.context";
import { ExerciseFilter } from "../models/exercise-filter.model";
import { EMPTY_STRING } from "../constants/consts";
import ExerciseList from "./ExerciseList";
import SearchTags from "./SearchTags";

const SearchExercises = () => {
  const { exercises, targetMuscles, bodyParts, equipements } =
    React.useContext(AppStateContext) || {};
  const [showFilter, setShowFilter] = React.useState<boolean>(true);
  const [filter, setFilter] = React.useState<ExerciseFilter>({});

  const filteredExercises = exercises?.filter(
    ({ bodyPart, equipment, name, target }) => {
      const {
        name: filterName = EMPTY_STRING,
        bodyPart: bodyPartFilter,
        targetMuscle: targetMuscleFilter,
        equipement: equipementFilter,
      } = filter;
      const nameMatch = filterName ? name?.includes(filterName) : true;
      const bodyPartMatch = bodyPartFilter ? bodyPartFilter === bodyPart : true;
      const targetMuscleMatch = targetMuscleFilter
        ? targetMuscleFilter === target
        : true;
      const equipementMatch = equipementFilter
        ? equipementFilter === equipment
        : true;

      return nameMatch && bodyPartMatch && targetMuscleMatch && equipementMatch;
    }
  );

  const onTargetMuscleSearchTagClick = (name: string) => {
    if (name !== filter?.targetMuscle) {
      setFilter((filter) => ({
        ...filter,
        targetMuscle: name,
      }));
    } else {
      const { targetMuscle, ...restOfFilter } = filter;
      setFilter(restOfFilter);
    }
  };

  const onBodyPartSearchTagClick = (name: string) => {
    if (name !== filter?.bodyPart) {
      setFilter((filter) => ({
        ...filter,
        bodyPart: name,
      }));
    } else {
      const { bodyPart, ...restOfFilter } = filter;
      setFilter(restOfFilter);
    }
  };

  const onEquipementSearchTagClick = (name: string) => {
    if (name !== filter?.equipement) {
      setFilter((filter) => ({
        ...filter,
        equipement: name,
      }));
    } else {
      const { equipement, ...restOfFilter } = filter;
      setFilter(restOfFilter);
    }
  };

  const exerciseNameSearchChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event?.target?.value || EMPTY_STRING;
    setFilter((filter) => ({
      ...filter,
      name: value,
    }));
  };

  const negateShowFilter = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  return (
    <div className="search-exercises font-poppins bg-primary p-8 lg:px-16 min-h-screen">
      <div
        className={`search-exercises_header flex flex-row justify-between items-center ${
          showFilter ? "mb-10" : "mb-0"
        }`}
      >
        <h1 className="text-3xl text-white font-bold ml-3">Explore</h1>

        <button className="text-secondary" onClick={negateShowFilter}>
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilter && targetMuscles && (
        <SearchTags
          title="Target Muscles"
          filter={filter}
          filteringField="targetMuscle"
          tags={targetMuscles}
          onSearchTagClick={onTargetMuscleSearchTagClick}
        ></SearchTags>
      )}

      {showFilter && bodyParts && (
        <SearchTags
          title="Body Parts"
          filter={filter}
          filteringField="bodyPart"
          tags={bodyParts}
          onSearchTagClick={onBodyPartSearchTagClick}
        ></SearchTags>
      )}

      {showFilter && equipements && (
        <SearchTags
          title="Equipements"
          filter={filter}
          filteringField="equipement"
          tags={equipements}
          onSearchTagClick={onEquipementSearchTagClick}
        ></SearchTags>
      )}

      {showFilter && (
        <div className="exercise-name-search mt-10">
          <input
            className="bg-primary-light-bg shadow-none text-md py-2 rounded-full w-full md:w-96 placeholder-primary-light-fg text-white indent-4"
            type="text"
            value={filter?.name}
            onInput={exerciseNameSearchChangeHandler}
            placeholder="Search exercise by name"
          />
        </div>
      )}

      <div className="exercises">
        <ExerciseList exercises={filteredExercises} />
      </div>
    </div>
  );
};

export default SearchExercises;
