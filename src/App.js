import './assets/styles/App.css';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './assets/styles/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


import sliderExample from './assets/images/slider-example.png'
import sliderExample2 from './assets/images/slider-example2.jpg'
import sliderExample3 from './assets/images/slider-example3.jpg'


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
    <div data-src={sliderExample2} />
    <div data-src={sliderExample3} />

  </AutoplaySlider>
  </div>
    </div>
  );
}

export default App;
