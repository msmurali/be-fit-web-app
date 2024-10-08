import { useNavigate, useParams } from "react-router-dom";
import backArrowIcon from "../assets/icons/back.svg";
import playIcon from "../assets/icons/play.svg";
import React from "react";
import { Exercise } from "../models/excercise.model";
import { v4 as uuid } from "uuid";
import { AppStateContext } from "../contexts/app-state.context";
import { ExerciseVideo } from "../models/exercise-video.model";
import { getExercisesApi, getExercisesVideosApi } from "../configs/api.config";

type ExerciseDetailsPageParams = {
  id: string;
};

interface ExerciseDetailsState {
  exercise: Exercise | null;
  exerciseVideos: ExerciseVideo[];
  alternatives: Exercise[];
  loading: boolean;
  error?: Error;
}

const INITIAL_STATE = {
  exercise: null,
  exerciseVideos: [],
  alternatives: [],
  loading: false,
};

const LOADING_STATE = {
  exercise: null,
  exerciseVideos: [],
  alternatives: [],
  loading: true,
};

const ExerciseDetails = () => {
  const { id } = useParams<ExerciseDetailsPageParams>();
  const [state, setState] = React.useState<ExerciseDetailsState>(INITIAL_STATE);
  const { exercises } = React.useContext(AppStateContext) || {};
  const navigate = useNavigate();
  const exercisesVideosHalfLen = Math.floor(state?.exerciseVideos?.length / 2);
  const exercisesVideosFirstHalf = [
    ...state?.exerciseVideos?.slice(0, exercisesVideosHalfLen),
  ];
  const exercisesVideosSecondHalf = [
    ...state?.exerciseVideos?.slice(exercisesVideosHalfLen),
  ];

  React.useEffect(() => {
    const exercisesDbApi = getExercisesApi();
    const exercisesVideoApi = getExercisesVideosApi();

    if (id) {
      setState(LOADING_STATE);

      exercisesDbApi
        .fetchExerciseById(id)
        .then((exercise) => {
          setState((state) => ({ ...state, exercise }));
          return exercisesVideoApi.searchExercisesVideos(exercise?.name);
        })
        .then((exerciseVideos) => {
          setState((state) => ({ ...state, exerciseVideos }));
        })
        .catch((error) => setState((state) => ({ ...state, error })))
        .finally(() => setState((state) => ({ ...state, loading: false })));
    }
  }, [id]);

  const navigateToHomePage = () => {
    navigate("/");
  };

  const navigateToDetailsPage = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <div className="exercise-details bg-primary min-h-screen w-full font-poppins">
      <div className="h-full md:grid md:grid-cols-[35%_65%]">
        <div className="w-full max-w-full bg-gradient-to-tr from-secondary-dark to-secondary text-white">
          <button
            className="p-8 text-md flex flex-row justify-start items-center"
            onClick={navigateToHomePage}
          >
            <img className="w-6 h-6" src={backArrowIcon} alt="back-arrow" />
            <span className="ml-2">Back to Home</span>
          </button>
          <div className="px-8 exercise-details-title">
            <h1 className="text-2xl font-medium">{state?.exercise?.name}</h1>
          </div>
          <div className="px-8 pt-4 pb-8">
            <div className="exercise-details-img relative">
              <img
                className="w-full rounded-2xl shadow-xl"
                src={state?.exercise?.gifUrl}
                alt="exercise-details-img"
              />
              <div className="flex flex-row justify-start items-center gap-4 pt-4 absolute bottom-4 left-4">
                <div className="bg-secondary text-white font-medium px-4 py-1 rounded-full">
                  <span>{state?.exercise?.target}</span>
                </div>
                <div className="bg-secondary text-white font-medium px-4 py-1 rounded-full">
                  <span>{state?.exercise?.equipment}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="exercise-details-videos w-full max-w-full">
            <div className="text-xl font-medium px-8 pb-4">Videos</div>
            <div className="w-full max-w-full overflow-x-auto scrollbar-hide pb-8">
              <div className="flex flex-row">
                {exercisesVideosFirstHalf?.map((video) => (
                  <ExerciseVideoCard
                    key={uuid()}
                    videoId={video?.id}
                    thumbnailLink={video?.thumbnailLink}
                  />
                ))}
                <span className="min-w-8"></span>
              </div>
            </div>
            <div className="w-full max-w-full overflow-x-auto scrollbar-hide pb-8">
              <div className="flex flex-row">
                {exercisesVideosSecondHalf?.map((video) => (
                  <ExerciseVideoCard
                    key={uuid()}
                    videoId={video?.id}
                    thumbnailLink={video?.thumbnailLink}
                  />
                ))}
                <span className="min-w-8"></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-8 exercise-details-title text-white">
            <h1 className="text-2xl font-medium">Instructions</h1>
          </div>
          <div className="px-8">
            {state?.exercise?.instructions?.map((instruction, index) => {
              return (
                <div
                  className="flex flex-row justify-start items-start pb-8"
                  key={uuid()}
                >
                  <span className="min-w-8 min-h-8 flex rounded-full justify-center items-center bg-primary-light-bg text-primary-light-fg">
                    {index + 1}
                  </span>
                  <span className="text-white text-lg ml-4">{instruction}</span>
                </div>
              );
            })}
          </div>
          <div className="exercise-details-videos w-full max-w-full">
            <div className="text-xl text-white font-medium px-8 pb-8">
              Secondary Muscles
            </div>
            <div className="px-8 pb-8">
              {state?.exercise?.secondaryMuscles?.map((secondaryMuscle) => {
                return (
                  <div
                    key={uuid()}
                    className="text-secondary px-2 py-1 border-2 border-secondary rounded-full inline-block mr-3 mb-3"
                  >
                    {secondaryMuscle}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="px-8">
              <h1 className="text-xl font-medium text-white pb-8">
                Alternatives for {state?.exercise?.name}
              </h1>
            </div>
            <div className="w-full max-w-full overflow-auto scrollbar-hide px-8 pb-8">
              <div className="flex flex-row">
                {exercises &&
                  exercises
                    ?.filter(
                      (exercise) => exercise?.target === state?.exercise?.target
                    )
                    ?.map((exercise) => (
                      <div
                        key={uuid()}
                        className="min-w-72 min-h-72 max-w-72 max-h-72 mr-8 rounded-2xl shadow-xl shadow-primary-dark cursor-pointer"
                        onClick={() => navigateToDetailsPage(exercise?.id)}
                      >
                        <img
                          className="w-full h-full object-cover rounded-2xl"
                          src={exercise?.gifUrl}
                          alt={exercise?.name}
                        />
                      </div>
                    ))}
                <span className="min-w-8"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ExerciseVideoCardProps {
  videoId: string;
  thumbnailLink: string;
}

const ExerciseVideoCard = ({
  videoId,
  thumbnailLink,
}: ExerciseVideoCardProps) => {
  const exercisesVideoApi = getExercisesVideosApi();

  return (
    <div
      className="min-w-80 ml-8 relative rounded-2xl shadow-lg cursor-pointer"
      onClick={() => exercisesVideoApi.openVideoInYoutube(videoId)}
    >
      <button className="p-3 bg-white rounded-full absolute shadow-sm hover:shadow-2xl hover:scale-110 bottom-4 left-4">
        <img className="w-5 h-5" src={playIcon} alt="play" />
      </button>
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={thumbnailLink}
        alt="thumbnail"
      />
    </div>
  );
};

export default ExerciseDetails;
