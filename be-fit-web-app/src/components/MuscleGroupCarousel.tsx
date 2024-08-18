import React from "react";
import { AppStateContext } from "../contexts/app-state.context";
import { v4 as uuidv4 } from "uuid";
import {
  MUSCLE_GROUP_CAROUSEL_CARD_TEXT_MAX_LEN,
  SPACE,
} from "../constants/consts";
import RightArrowIcon from "./RightArrowIcon";
import LeftArrowIcon from "./LeftArrowIcon";
import { useNavigate } from "react-router-dom";

const MuscleGroupCarousel: React.FC = () => {
  const carousel = React.useRef<HTMLDivElement>(null);
  const { targetMuscles } = React.useContext(AppStateContext) || {};
  const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

  const leftArrowClickHandler = () => {
    const scrollableContainer = scrollableContainerRef.current;
    if (scrollableContainer) {
      scrollableContainer.scrollLeft -= 250;
    }
  };

  const rightArrowClickHandler = () => {
    const scrollableContainer = scrollableContainerRef.current;
    if (scrollableContainer) {
      scrollableContainer.scrollLeft += 250;
    }
  };

  return (
    <div className="bg-primary font-poppins pt-10">
      <div className="muscle-group-carousel_header w-full px-8 mb-10 flex flex-row  justify-between items-center">
        <div className="muscle-group-carousel_title w-2/3">
          <h3 className="text-2xl font-bold text-white">
            Discover Workouts by Muscle Group
          </h3>
        </div>
        <div className="muscle-group-carousel_btn-bar flex lg:flex flex-row">
          <button>
            <LeftArrowIcon
              active={false}
              clickHandler={leftArrowClickHandler}
            ></LeftArrowIcon>
          </button>
          <button className="ml-3">
            <RightArrowIcon
              active={false}
              clickHandler={rightArrowClickHandler}
            ></RightArrowIcon>
          </button>
        </div>
      </div>
      <div
        className="wrapper w-full max-w-full overflow-auto scroll-smooth scrollbar-hide px-8 pb-20"
        ref={scrollableContainerRef}
      >
        <div className="muscle-group-carousel flex flex-row" ref={carousel}>
          {targetMuscles &&
            targetMuscles?.map((targetMuscle) => (
              <MuscleGroupCarouselCard
                key={uuidv4()}
                targetMuscleGroup={targetMuscle}
              ></MuscleGroupCarouselCard>
            ))}
            <div className="min-w-8"></div>
        </div>
      </div>
    </div>
  );
};

interface MuscleGroupCarouselCardProps {
  targetMuscleGroup: string;
}

const MuscleGroupCarouselCard = ({
  targetMuscleGroup,
}: MuscleGroupCarouselCardProps) => {
  const imgSrc = require(`../assets/icons/${targetMuscleGroup}.svg`);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const cardElement = cardRef?.current;

    const onMouseEnter = (_: MouseEvent) => {
      setActive(true);
    };

    const onMouseLeave = (_: MouseEvent) => {
      setActive(false);
    };

    if (cardElement) {
      cardElement.addEventListener("mouseenter", onMouseEnter);
      cardElement.addEventListener("mouseleave", onMouseLeave);
    }
  }, []);

  const getTargetMuscleGroup = (targetMuscle: string) => {
    if (targetMuscle?.length < MUSCLE_GROUP_CAROUSEL_CARD_TEXT_MAX_LEN) {
      return targetMuscle;
    }
    const [firstWord] = targetMuscle?.split(SPACE);
    return firstWord;
  };

  const navigateToSearchPage = (targetMuscleGroup: string) => {
    navigate("/explore", { state: { targetMuscle: targetMuscleGroup } });
  };

  return (
    <div
      onClick={() => navigateToSearchPage(targetMuscleGroup)}
      ref={cardRef}
      className="p-6 mr-8 muscle-group-carousel-card bg-primary-light-bg hover:bg-gradient-to-tr hover:from-secondary-dark hover:to-secondary text-white min-w-72 rounded-lg shadow-black shadow-md font-poppins cursor-pointer"
    >
      <div className="muscle-group-carousel-card_icon">
        <img className="w-14 h-14" src={imgSrc} alt={targetMuscleGroup} />
      </div>
      <div className="muscle-group-carousel-card_content flex items-end justify-between mt-4">
        <div>
          <span className="text-xs leading-none">workouts for</span>
          <h2 className="text-2xl font-bold">
            {getTargetMuscleGroup(targetMuscleGroup)}
          </h2>
        </div>
        <div>
          <button onClick={() => navigateToSearchPage(targetMuscleGroup)}>
            <RightArrowIcon active={active} clickHandler={() => {}} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MuscleGroupCarousel;
