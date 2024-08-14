import { Exercise } from "./excercise.modal";

export interface AppState {
    exercises?: Exercise[];
    targetMuscles?: string[];
    bodyParts?: string[];
    name?: string;
    loading?: boolean;
    error?: Error | null;
}