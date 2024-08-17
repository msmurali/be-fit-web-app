import equipementSectionImg from "../assets/images/equipements-section-img.png";
import checkImg from "../assets/icons/check.svg";
import points from "../assets/json/equipements-section-points.json";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const EquipementSection = () => {
  const navigate = useNavigate();

  const navigateToSearchPage = () => {
    navigate("/explore");
  };

  return (
    <div className="equipement-section w-full flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-center lg:justify-evenly items-center px-8 py-14 bg-primary-dark">
      <div className="equipement-section-img lg:w-1/2 flex justify-center items-center">
        <img src={equipementSectionImg} alt="equipements" />
      </div>
      <div className="equipement-section-content font-poppins pt-8 text-white lg:w-1/2  md:flex md:flex-col md:justify-center md:items-center">
        <div className="wrapper lg:pl-6">
          <h1 className="text-4xl md:text-5xl font-bold pb-6">
            Gear up for the perfect workout
          </h1>
          {points.map((point) => {
            return (
              <div
                className="flex flex-row justify-start items-start pt-8"
                key={uuid()}
              >
                <img src={checkImg} alt="check" />
                <span className="pl-3 text-lg">{point?.text}</span>
              </div>
            );
          })}
          <button
            onClick={navigateToSearchPage}
            className="bg-secondary px-6 py-4 rounded-lg mt-12 text-xl "
          >
            Explore workouts by equipements
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipementSection;
