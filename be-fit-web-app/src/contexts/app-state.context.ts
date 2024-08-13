import React from "react";
import { AppState } from "../models/app-state.model";

export const AppStateContext = React.createContext<AppState | null>(null);
