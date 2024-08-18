import React, { ReactNode } from "react";
import { AppStateContext } from "../contexts/app-state.context";
import { AppState } from "../models/app-state.model";
import { getExercisesApi } from "../configs/api.config";

interface AppStateProviderProps {
  children: ReactNode;
}

const INITIAL_APP_STATE = {
  bodyParts: [],
  exercises: [],
  targetMuscles: [],
  equipements: [],
  error: null,
  loading: false,
} as AppState;

const LOADING_APP_STATE = {
  bodyParts: [],
  exercises: [],
  targetMuscles: [],
  equipements: [],
  error: null,
  loading: true,
};

const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [appState, setAppState] = React.useState(INITIAL_APP_STATE);

  React.useEffect(() => {
    const exercisesDbApi = getExercisesApi();

    const initAppState = async () => {
      setAppState(LOADING_APP_STATE);

      /* Fetch Excercises */
      exercisesDbApi
        .fetchAllExcercises()
        .then((exercises) =>
          setAppState((appState) => ({
            ...appState,
            exercises,
          }))
        )
        .catch((error) =>
          setAppState((appState) => ({
            ...appState,
            error,
          }))
        );

      /* Fetch Body Parts */
      exercisesDbApi
        .fetchAllBodyParts()
        .then((bodyParts) =>
          setAppState((appState) => ({ ...appState, bodyParts }))
        )
        .catch((error) => setAppState((appState) => ({ ...appState, error })));

      /* Fetch Equipements */
      exercisesDbApi
        .fetchAllEquipement()
        .then((equipements) =>
          setAppState((appState) => ({ ...appState, equipements }))
        )
        .catch((error) => setAppState((appState) => ({ ...appState, error })));

      /* Fetch Target Muscles */
      exercisesDbApi
        .fetchAllTargetMuscles()
        .then((targetMuscles) =>
          setAppState((appState) => ({ ...appState, targetMuscles }))
        )
        .catch((error) => setAppState((appState) => ({ ...appState, error })));
    };

    initAppState();
  }, []);

  return (
    <AppStateContext.Provider value={appState}>{children}</AppStateContext.Provider>
  );
};

export default AppStateProvider;
