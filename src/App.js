import './assets/styles/App.css';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './assets/styles/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ScrollContainer from "react-indiana-drag-scroll";

import sliderExample from './assets/images/slider-example.png'
import sliderExample2 from './assets/images/slider-example2.jpg'
import sliderExample3 from './assets/images/slider-example3.jpg'
import sliderExample4 from './assets/images/slider-example4.jpg'
import HorizontalScroll from './horizontal_scrollbar/HorizontalScroll';


const AutoplaySlider = withAutoplay(AwesomeSlider);



function App() {
  return (
    <div className='main-content'>
    <div className='App'>

    <HorizontalScroll/>



    <AutoplaySlider 
       cssModule={AwsSliderStyles}
       play={true}
       cancelOnInteraction={false} 
       interval={9000}
       >
    <div data-src={sliderExample} />
    <div data-src={sliderExample2} />
    <div data-src={sliderExample3} />
    <div data-src={sliderExample4} />

  </AutoplaySlider>
  </div>


  
    </div>
  );
}

export default App;
