import { apiConfig } from "../configs/api.config";
import {
  GET_METHOD,
  LIMIT,
  OFFSET,
  X_RAPID_API_HOST,
  X_RAPID_API_KEY,
} from "../constants/consts";
import { Exercise } from "../models/excercise.model";

export class ExercisesDBApi {
  BASE_URL = apiConfig.baseUrl.exercisesApiBaseUrl;
  HOST = apiConfig.hosts.exercisesApiHost;
  API_KEY = apiConfig.apiKey;
  BODY_PATH_LIST_PATH = apiConfig.paths.exercisesApi.bodyPartList;
  EQUIPEMENTS_LIST_PATH = apiConfig.paths.exercisesApi.equipementList;
  TARGET_MUSCLE_LIST_PATH = apiConfig.paths.exercisesApi.targetList;
  EXERCISE_LIST_PATH = apiConfig.paths.exercisesApi.exercises;
  EXERCISE_PATH = apiConfig.paths.exercisesApi.exercise;
  PARAMS = apiConfig.queryParams.exercisesApi;
  OPTIONS = {
    method: GET_METHOD,
    headers: {
      [X_RAPID_API_KEY]: this.API_KEY as string,
      [X_RAPID_API_HOST]: this.HOST as string,
    },
  };

  public async fetchAllExcercises(): Promise<Exercise[]> {
    const url = `${this.BASE_URL}/${this.EXERCISE_LIST_PATH}
    ?${this.PARAMS.limit}=${LIMIT}
    &${this.PARAMS.offset}=${OFFSET}`;
    return fetch(url, this.OPTIONS).then(
      (response) => response.json() as Promise<Exercise[]>
    );
  }

  public async fetchAllEquipement(): Promise<string[]> {
    const url = `${this.BASE_URL}/${this.EQUIPEMENTS_LIST_PATH}`;
    return fetch(url, this.OPTIONS).then(
      (response) => response.json() as Promise<string[]>
    );
  }

  public async fetchAllBodyParts() {
    const url = `${this.BASE_URL}/${this.BODY_PATH_LIST_PATH}`;
    return fetch(url, this.OPTIONS).then(
      (response) => response.json() as Promise<string[]>
    );
  }

  public async fetchAllTargetMuscles() {
    const url = `${this.BASE_URL}/${this.TARGET_MUSCLE_LIST_PATH}`;
    return fetch(url, this.OPTIONS).then(
      (response) => response.json() as Promise<string[]>
    );
  }

  public async fetchExerciseById(id: string) {
    const url = `${this.BASE_URL}/${this.EXERCISE_PATH}/${encodeURIComponent(
      id
    )}`;
    return fetch(url, this.OPTIONS).then(
      (response) => response.json() as Promise<Exercise>
    );
  }
}
