import React from "react";

const MuscleGroupCarousel: React.FC = () => {
  const carousel = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {}, []);

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
            <LeftArrowIcon active={false}></LeftArrowIcon>
          </button>
          <button className="ml-3">
            <RightArrowIcon active={false}></RightArrowIcon>
          </button>
        </div>
      </div>
      <div className="wrapper w-full max-w-full overflow-auto scrollbar-hide px-8 pb-20">
        <div className="muscle-group-carousel flex flex-row" ref={carousel}>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
          <MuscleGroupCarouselCard targetMuscleGroup="biceps"></MuscleGroupCarouselCard>
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

  return (
    <div
      ref={cardRef}
      className="p-6 mr-8 muscle-group-carousel-card bg-primary-light-bg hover:bg-gradient-to-tr hover:from-secondary-dark hover:to-secondary text-white min-w-72 rounded-lg shadow-black shadow-md font-poppins cursor-pointer"
    >
      <div className="muscle-group-carousel-card_icon">
        <img className="w-14 h-14" src={imgSrc} alt={targetMuscleGroup} />
      </div>
      <div className="muscle-group-carousel-card_content flex items-end justify-between mt-4">
        <div>
          <span className="text-xs leading-none">workouts for</span>
          <h2 className="text-3xl font-bold">{targetMuscleGroup}</h2>
        </div>
        <div>
          <button>
            <RightArrowIcon active={active} />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ArrowIconProps {
  active: boolean;
}

const RightArrowIcon = ({ active }: ArrowIconProps) => {
  const inActiveColor = "#1677ff";
  const activeColor = "#808080";

  return (
    <div
      className={`size-9 flex justify-center items-center border-2 rounded-full p-2 ${
        active ? "border-primary-light-fg" : "border-secondary"
      }`}
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 15.3333L15 8.33325M15 8.33325L8 1.33325M15 8.33325H1"
          stroke={active ? activeColor : inActiveColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const LeftArrowIcon = ({ active }: ArrowIconProps) => {
  const inActiveColor = "#1677ff";
  const activeColor = "#808080";

  return (
    <div
      className={`size-9 border-2 rounded-full p-2  ${
        active ? "border-primary-light-fg" : "border-secondary"
      }`}
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1.66675L1 8.66675M1 8.66675L8 15.6667M1 8.66675H15"
          stroke={active ? activeColor : inActiveColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MuscleGroupCarousel;
