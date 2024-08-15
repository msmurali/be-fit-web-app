import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MuscleGroupCarousel from "./components/MuscleGroupCarousel";
import EquipementSection from "./components/EquipementSection";
import WorkoutList from "./components/ExerciseList";
import AppStateProvider from "./providers/app-state.provider";
import SearchExercises from "./components/SearchExercises";

const App = () => {
  return (
    <div className="app">
      <AppStateProvider>
        <SearchExercises></SearchExercises>
      </AppStateProvider>
    </div>
  );
};

export default App;
