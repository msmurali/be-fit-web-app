import { apiConfig } from "../configs/api.config";
import videoList from "../mock/json/exercises-videos.json";
import { ExerciseVideo } from "../models/exercise-video.model";
import { mapVideoJsonObjToExerciseVideo } from "../utils/mappers";

export class ExercisesVideosMockApi {
  public searchExercisesVideos(query?: string): Promise<ExerciseVideo[]> {
    if (!query) {
      return Promise.reject(null);
    }
    return Promise.resolve(
      videoList?.contents?.map(mapVideoJsonObjToExerciseVideo)
    );
  }

  public openVideoInYoutube(id?: string) {
    if (id) {
      const url = `${apiConfig.baseUrl.youtubeStreamApiBaseUrl}?${apiConfig.queryParams.youtubeStreamApi.video}=${id}`;
      window.open(url, "_blank");
    }
  }
}
