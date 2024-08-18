import { apiConfig } from "../configs/api.config";
import {
  ENGLISH_LAN,
  GET_METHOD,
  RELEVANCE_SORT,
  SHORT_DURATION,
  VIDEO_TYPE,
  X_RAPID_API_HOST,
  X_RAPID_API_KEY,
} from "../constants/consts";
import { mapVideoJsonObjToExerciseVideo } from "../utils/mappers";

export class ExercisesVideosApi {
  BASE_URL = apiConfig.baseUrl.youtubeApiBaseUrl;
  HOST = apiConfig.hosts.youtubeApiHost;
  API_KEY = apiConfig.apiKey;
  SEARCH_PATH = apiConfig.paths.youtubeApi.search;
  PARAMS = apiConfig.queryParams.youtubeApi;
  OPTIONS = {
    method: GET_METHOD,
    headers: {
      [X_RAPID_API_KEY]: this.API_KEY as string,
      [X_RAPID_API_HOST]: this.HOST as string,
    },
  };

  public searchExercisesVideos(query?: string) {
    const url = `${this.BASE_URL}/${this.SEARCH_PATH}
    ?${this.PARAMS.query}=${query}
    &${this.PARAMS.language}=${ENGLISH_LAN}
    &${this.PARAMS.type}=${VIDEO_TYPE}
    &${this.PARAMS.duration}=${SHORT_DURATION}
    &${this.PARAMS.sort}=${RELEVANCE_SORT}`;

    return fetch(url, this.OPTIONS).then((response) =>
      mapVideoJsonObjToExerciseVideo(response)
    );
  }
}
