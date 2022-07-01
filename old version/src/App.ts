import './assets/styles/App.css';

import React, {useEffect} from "react";

import HorizontalScroll from './horizontal_scrollbar/HorizontalScroll';



import MainSlider from './main_slider/MainSlider';






function App() {






 


  return (
    <React.Fragment>
    
    <div className='main-content'>


   
        


    <div className='App'>

    <HorizontalScroll/>



    <MainSlider/>
  </div>


  
    </div>
    </React.Fragment>
  );
}

export default App;
