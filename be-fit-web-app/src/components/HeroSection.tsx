import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigateToSearchPage = () => {
    navigate("/explore");
  };

  return (
    <div className="hero-section w-full min-h-screen p-8 lg:px-16 pt-36 lg:pt-48 bg-hero-section bg-right-top bg-cover flex justify-center items-start flex-col text-white font-poppins relative">
      <div className="hero-section_content w-full md:w-1/2 lg:pb-28">
        <h1 className="text-5xl lg:text-7xl leading-tight md:leading-snug font-bold">
          Get your ultimate training plan from 1300+ workouts
        </h1>
        <p className="mt-8 lg:mt-10 lg:text-xl lg:leading-snug">
          Find the perfect workout for your lifestyle. Explore a variety of
          workouts tailored to your needs.
        </p>
        <button
          onClick={navigateToSearchPage}
          className="mt-8 lg:mt-10 px-8 md:px-16 py-3 text-xl lg:text-2xl bg-secondary active:bg-secondary-dark transition-colors ease-in-out duration-150 rounded-lg  shadow-md"
        >
          Explore
        </button>
      </div>
      <div className="w-full bg-primary h-6 absolute bottom-0 left-0 rounded-tr-2xl rounded-tl-3xl"></div>
    </div>
  );
};

export default HeroSection;
