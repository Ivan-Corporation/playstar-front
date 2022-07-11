import LeftSidebar from '../components/left_sidebar/LeftSidebar';
import RightSidebar from '../components/right_sidebar/RightSidebar';
import MainSlider from '../components/main_slider/MainSlider';
import '../components/main_slider/slider__main.css'
import '../components/horizontal_scrollbar/slider__horizontal.css'
import HorizontalScroll from '../components/horizontal_scrollbar/HorizontalScroll';
import { motion } from 'framer-motion'
//import styles 👇
import '../components/right_sidebar/drawer/index.css'
import Drawer from '../components/right_sidebar/drawer/index'
import CardExample from '../components/right_sidebar/card/CardExample'


import React from 'react';

export default function Home(props:any) {

    


  return (
    <>
    {props.isOpen ? <div className='slider__horizontal_open'><HorizontalScroll /></div> :  <div className='slider__horizontal_close'><HorizontalScroll /></div>}
        
       
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.5,
                }}
                >
        {props.isOpen ? <div className='slider__main_open'><MainSlider /></div> : <div className='slider__main_close'><MainSlider /></div>}
        </motion.div>


       




        {/* <RightSidebar /> */}
        
        <button className='drawer__button_close' onClick={props.toggleDrawer}><div className="arrow-left"></div></button>
      <Drawer
          open={props.isOpen}
          onClose={props.toggleDrawer}
          direction='right'
          className='bla bla bla'
          enableOverlay={false}
      >
          <button className='drawer__button_open' onClick={props.toggleDrawer}><div className="arrow-right"></div></button>

          <CardExample/>
      </Drawer>

             
    </>
  );
}
