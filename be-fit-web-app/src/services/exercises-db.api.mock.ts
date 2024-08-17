import exercisesList from "../mock/json/exercises.json";
import bodyPartList from "../mock/json/body-part-list.json";
import equipementList from "../mock/json/equipement-list.json";
import targetMusclesList from "../mock/json/target-list.json";
import { Exercise } from "../models/excercise.model";

export class ExercisesDBMockApi {
  public async fetchAllExcercises(): Promise<Exercise[]> {
    return Promise.resolve(exercisesList);
  }

  public async fetchAllEquipement(): Promise<string[]> {
    return Promise.resolve(equipementList);
  }

  public async fetchAllBodyParts(): Promise<string[]> {
    return Promise.resolve(bodyPartList);
  }

  public async fetchAllTargetMuscles(): Promise<string[]> {
    return Promise.resolve(targetMusclesList);
  }

  public async fetchExerciseById(id: string): Promise<Exercise | null> {
    const exercise = exercisesList?.find((exercise) => exercise?.id === id);
    if (exercise) {
      return Promise.resolve(exercise);
    }
    return Promise.resolve(null);
  }
}
