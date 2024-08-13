import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MuscleGroupCarousel from "./components/MuscleGroupCarousel";
import EquipementSection from "./components/EquipementSection";
import WorkoutList from "./components/WorkoutList";
import AppStateProvider from "./providers/app-state.provider";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <HeroSection></HeroSection>
      <AppStateProvider>
        <MuscleGroupCarousel></MuscleGroupCarousel>
        <EquipementSection />
        <WorkoutList></WorkoutList>
      </AppStateProvider>
    </div>
  );
};

export default App;
