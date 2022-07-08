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
import { motion } from 'framer-motion'
import './components/header/header.css'
import './components/footer/footer.css'
import Footer from './components/footer/Footer';


function App() {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <React.Fragment>
    
    

      <div>
      <header>
      <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.4,
                }}
                >
                 {isOpen ? <div className='header_open'><Header/></div> : <div className='header_close'><Header/></div>}
      
      </motion.div>
        </header>
        {isOpen ? <div className='slider__horizontal_open'><HorizontalScroll /></div> :  <div className='slider__horizontal_close'><HorizontalScroll /></div>}
        
       
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.5,
                }}
                >
        {isOpen ? <div className='slider__main_open'><MainSlider /></div> : <div className='slider__main_close'><MainSlider /></div>}
        </motion.div>


        <motion.div
                initial={{ opacity: 0, x: -180 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.5,
                }}
                >

        <LeftSidebar />
        </motion.div>




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
      {isOpen ? <div className='footer_open'> <Footer/></div> :  <div className='footer_close'> <Footer/></div>}

         
      </footer>
    </React.Fragment>
  );
}

export default App;
