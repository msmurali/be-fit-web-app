import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MuscleGroupCarousel from "./components/MuscleGroupCarousel";
import EquipementSection from "./components/EquipementSection";
import WorkoutList from "./components/ExerciseList";
import AppStateProvider from "./providers/app-state.provider";
import SearchExercises from "./components/SearchExercises";
import ExerciseDetails from "./components/ExerciseDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailsPage />} />
          <Route path="/explore" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AppStateProvider>
        <MuscleGroupCarousel />
        <EquipementSection />
        <WorkoutList />
      </AppStateProvider>
    </>
  );
};

const DetailsPage = () => {
  return (
    <>
      <AppStateProvider>
        <ExerciseDetails />
      </AppStateProvider>
    </>
  );
};

const SearchPage = () => {
  return (
    <>
      <AppStateProvider>
        <SearchExercises />
      </AppStateProvider>
    </>
  );
};

export default App;
