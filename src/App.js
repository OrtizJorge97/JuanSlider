import Sound from "react-sound";
import MonaChina from "./assets/sounds/Hey-World.mp3";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from './components/SliderData';
import './App.css';

function App() {

  return (
    <div>
      <Sound 
        url={MonaChina}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0}
        loop={true}
      />
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
