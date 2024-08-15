interface ArrowIconProps {
  active: boolean;
  clickHandler: React.MouseEventHandler<Element>;
}

const RightArrowIcon = ({ active, clickHandler }: ArrowIconProps) => {
  const inActiveColor = "#1677ff";
  const activeColor = "#808080";

  return (
    <div
      className={`size-9 border-2 rounded-full p-2 cursor-pointer ${
        active ? "border-primary-light-fg" : "border-secondary"
      }`}
      onClick={clickHandler}
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

export default RightArrowIcon;
