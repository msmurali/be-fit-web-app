import React from "react";
import { ExerciseFilter } from "../models/exercise-filter.model";
import { v4 as uuid } from "uuid";
import LeftArrowIcon from "./LeftArrowIcon";
import RightArrowIcon from "./RightArrowIcon";

interface SearchTagsProps {
  tags: string[];
  onSearchTagClick: (tagName: string) => void;
  filter: ExerciseFilter;
  title: string;
  filteringField: keyof ExerciseFilter;
}

const SearchTags = ({
  title,
  tags,
  filter,
  filteringField,
  onSearchTagClick,
}: SearchTagsProps) => {
  const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

  const onClickLeftArrowIcon = () => {
    const scrollableElement = scrollableContainerRef?.current;
    if (scrollableElement) {
      const { scrollWidth } = scrollableElement;
      scrollableElement.scrollLeft += scrollWidth * 0.1;
    }
  };

  const onClickRightArrowIcon = () => {
    const scrollableElement = scrollableContainerRef?.current;
    if (scrollableElement) {
      const { scrollWidth } = scrollableElement;
      scrollableElement.scrollLeft -= scrollWidth * 0.1;
    }
  };

  return (
    <section className="my-4">
      <h4 className="text-primary-light-fg text-xs inline-block mb-2 ml-2">
        {title}
      </h4>
      <div className="grid grid-cols-auto-1fr-auto">
        <div className="pr-3 hidden md:block">
          <LeftArrowIcon
            active
            clickHandler={onClickLeftArrowIcon}
          ></LeftArrowIcon>
        </div>
        <div
          ref={scrollableContainerRef}
          className="target-muscles-search-tags flex flex-row items-center w-full max-w-full overflow-auto scrollbar-hide scroll-smooth"
        >
          {tags?.map((tag) => (
            <SearchTag
              key={uuid()}
              clickHandler={onSearchTagClick}
              name={tag}
              active={tag === filter?.[filteringField]}
            ></SearchTag>
          ))}
        </div>
        <div className="pl-3 hidden md:block">
          <RightArrowIcon
            active
            clickHandler={onClickRightArrowIcon}
          ></RightArrowIcon>
        </div>
      </div>
    </section>
  );
};

export default SearchTags;

interface SearchTagProps {
  name: string;
  active: boolean;
  clickHandler: (name: string) => void;
}

const SearchTag = ({ name, clickHandler, active }: SearchTagProps) => {
  return (
    <div
      className={`search-tag px-3 py-1 rounded-full ${
        active ? "bg-secondary" : "bg-transparent"
      } border-secondary border-2 text-white whitespace-nowrap mr-2 cursor-pointer`}
      onClick={() => clickHandler(name)}
    >
      {name}
    </div>
  );
};
