interface ArrowIconProps {
  active: boolean;
  clickHandler: React.MouseEventHandler<Element>;
}

const LeftArrowIcon = ({ active, clickHandler }: ArrowIconProps) => {
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

export default LeftArrowIcon;
