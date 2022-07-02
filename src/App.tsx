import React from 'react';
import LeftSidebar from './components/left_sidebar/LeftSidebar';
import RightSidebar from './components/right_sidebar/RightSidebar';
import MainSlider from './components/main_slider/MainSlider';
import './components/main_slider/slider__main.css'
import './components/horizontal_scrollbar/slider__horizontal.css'
import HorizontalScroll from './components/horizontal_scrollbar/HorizontalScroll';

import Drawer from './components/right_sidebar/drawer/index'
import CardExample from './components/right_sidebar/card/CardExample'
//import styles 👇
import './components/right_sidebar/drawer/index.css'
import Header from './components/header/Header';



function App() {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <React.Fragment>
    


      <div>
        {isOpen ? <div className='slider__horizontal_open'><HorizontalScroll /></div> :  <div className='slider__horizontal_close'><HorizontalScroll /></div>}
        
       

        {isOpen ? <div className='slider__main_open'><MainSlider /></div> : <div className='slider__main_close'><MainSlider /></div>}

        <LeftSidebar />





        {/* <RightSidebar /> */}
        
        <button className='drawer__button_close' onClick={toggleDrawer}><div className="arrow-left"></div></button>
      <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla'
          enableOverlay={false}
      >
          <button className='drawer__button_open' onClick={toggleDrawer}><div className="arrow-right"></div></button>

          <CardExample/>
      </Drawer>


      </div>

      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
