import React from "react";
import title from "../assets/icons/title.svg";
import equipement from "../assets/icons/equipement.svg";

const WorkoutCard = () => {
  return (
    <div className="workout-card h-96 rounded-2xl flex flex-row justify-start items-end relative overflow-hidden bg-white">
      <img
        className="w-full min-h-full rounded-2xl hover:scale-110 transition-transform origin-center"
        src="https://v2.exercisedb.io/image/NE1dPLWzEIlqhl"
        alt="workout"
      />
      <div className="absolute bottom-0 flex flex-col justify-start items-start flex-wrap pb-2 pl-2">
        <Tag tagName={"weighted seated bicep curl  (on stability ball)"} tagIcon={title}></Tag>
        <Tag tagName={"Body weight"} tagIcon={equipement}></Tag>
      </div>
    </div>
  );
};

interface TagProps {
  tagName: string;
  tagIcon: string;
}

const Tag = ({ tagIcon, tagName }: TagProps) => {
  return (
    <div className="bg-secondary text-white flex flex-row justify-evenly font-poppins py-1 px-4 mb-2 mr-2 rounded-full">
      <img className="mr-2" src={tagIcon} alt="icon" />
      <span className="text-sm">{tagName}</span>
    </div>
  );
};

export default WorkoutCard;
