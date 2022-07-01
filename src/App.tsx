import React from 'react';
import LeftSidebar from './components/left_sidebar/LeftSidebar';
import RightSidebar from './components/right_sidebar/RightSidebar';
import MainSlider from './components/main_slider/MainSlider';
import './components/main_slider/slider__main.css'
import './components/horizontal_scrollbar/slider__horizontal.css'
import HorizontalScroll from './components/horizontal_scrollbar/HorizontalScroll';



function App() {
  return (
    <React.Fragment>
      <header>

      </header>
      <div>

        <div className='slider__horizontal_open'><HorizontalScroll /></div>
        {/* <div className='slider__horizontal_close'><HorizontalScroll /></div> */}

        <div className='slider__main'><MainSlider /></div>

        <LeftSidebar />





        <RightSidebar />



      </div>

      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
