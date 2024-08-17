import { ExerciseVideo } from "../models/exercise-video.model"

export const mapVideoJsonObjToExerciseVideo = (jsonObj: { [key: string]: any }) => {
    const [last] = jsonObj?.video?.thumbnails || [];
    return {
        id: jsonObj?.video?.videoId,
        thumbnailLink: last?.url,
    } as ExerciseVideo;
}