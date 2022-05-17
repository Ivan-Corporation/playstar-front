import './assets/styles/App.css';
import sliderExample from './assets/images/slider-example.png'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './assets/styles/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);



function App() {
  return (
    <div className='main-content'>
    <div className='App'>
       <AutoplaySlider 
       cssModule={AwsSliderStyles}
       play={true}
       cancelOnInteraction={false} 
       interval={6000}
       >
    <div data-src={sliderExample} />
    <div data-src={sliderExample} />
    <div data-src={sliderExample} />

  </AutoplaySlider>
  </div>
    </div>
  );
}

export default App;
