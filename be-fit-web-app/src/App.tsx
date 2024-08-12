import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MuscleGroupCarousel from './components/MuscleGroupCarousel';
import EquipementSection from './components/EquipementSection';
import WorkoutList from './components/WorkoutList';

const App = () => {
  return <div className="app">
    <Header></Header>
    <HeroSection></HeroSection>
    <MuscleGroupCarousel></MuscleGroupCarousel>
    <EquipementSection/>
    <WorkoutList></WorkoutList>
  </div>;
};

export default App;
