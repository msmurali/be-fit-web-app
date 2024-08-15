import { Exercise } from "./excercise.model";

export interface AppState {
    exercises?: Exercise[];
    targetMuscles?: string[];
    bodyParts?: string[];
    equipements?: string[];
    loading?: boolean;
    error?: Error | null;
}