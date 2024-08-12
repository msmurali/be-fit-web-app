import exercisesList from "../mock/json/exercises.json";
import bodyPartList from "../mock/json/body-part-list.json";
import equipementList from "../mock/json/equipement-list.json";
import targetMusclesList from "../mock/json/target-list.json";
import { Exercise } from "../models/Excercise.modal";

export class ExercisesDBMockApi {
  public fetchAllExcercises(): Exercise[] {
    return exercisesList;
  }

  public fetchAllEquipement(): string[] {
    return equipementList;
  }

  public fetchAllBodyParts(): string[] {
    return bodyPartList;
  }

  public fetchAllTargetMuscles(): string[] {
    return targetMusclesList;
  }
}
