import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import React, {useEffect} from "react";

import sliderExample from './slider/slider-example.png'
import sliderExample2 from './slider/slider-example2.jpg'
import sliderExample3 from './slider/slider-example3.jpg'
import sliderExample4 from './slider/slider-example4.jpg'






const AutoplaySlider = withAutoplay(AwesomeSlider);


function MainSlider() {
    return(
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
    )
}

export default MainSlider
