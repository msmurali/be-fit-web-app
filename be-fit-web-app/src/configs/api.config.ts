import { ExercisesVideosApi } from "../services/exercise-videos.api";
import { ExercisesVideosMockApi } from "../services/exercise-videos.api.mock";
import { ExercisesDBApi } from "../services/exercises-db.api";
import { ExercisesDBMockApi } from "../services/exercises-db.api.mock";

enum Environment {
  PROD = "prod",
  DEV = "dev",
}

export const apiConfig = {
  apiKey: process.env.REACT_APP_RAPID_API_KEY,
  baseUrl: {
    exercisesApiBaseUrl: process.env.REACT_APP_EXERCISES_API_BASE_URL,
    youtubeApiBaseUrl: process.env.REACT_APP_YOUTUBE_API_BASE_URL,
    youtubeStreamApiBaseUrl: process.env.REACT_APP_YOUTUBE_STREAM_API_BASE_URL,
  },
  hosts: {
    exercisesApiHost: process.env.REACT_APP_EXERCISES_API_HOST,
    youtubeApiHost: process.env.REACT_APP_YOUTUBE_API_HOST,
  },
  paths: {
    exercisesApi: {
      exercises: "exercises",
      exercise: "exercises/exercise",
      targetList: "exercises/targetList",
      equipementList: "exercises/equipmentList",
      bodyPartList: "exercises/bodyPartList",
    },
    youtubeApi: {
      search: "search",
    },
  },
  queryParams: {
    exercisesApi: {
      limit: "limit",
      offset: "offset",
    },
    youtubeApi: {
      query: "query",
      language: "hl",
      type: "type",
      duration: "duration",
      sort: "sort",
    },
    youtubeStreamApi: {
      video: "v",
    },
  },
  env: Environment.PROD,
};

export function getExercisesApi(): ExercisesDBApi | ExercisesDBMockApi {
  switch (apiConfig.env) {
    case Environment.DEV:
      return new ExercisesDBMockApi();
    case Environment.PROD:
      return new ExercisesDBApi();
    default:
      throw new Error("Invalid service configuration");
  }
}

export function getExercisesVideosApi():
  | ExercisesVideosApi
  | ExercisesVideosMockApi {
  switch (apiConfig.env) {
    case Environment.DEV:
      return new ExercisesVideosMockApi();
    case Environment.PROD:
      return new ExercisesVideosApi();
    default:
      throw new Error("Invalid service configuration");
  }
}
