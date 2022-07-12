import React from 'react';

//import styles 👇
import './components/right_sidebar/drawer/index.css'
import Header from './components/header/Header';
import { motion } from 'framer-motion'
import './components/header/header.css'
import './components/footer/footer.css'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Money from './pages/Money';
import LeftSidebar from './components/left_sidebar/LeftSidebar';
import Rooms from './pages/Rooms';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

function App() {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <React.Fragment>
    
    

   
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
        
       
          <main>




            
          <BrowserRouter>
          <aside>
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
                </aside>
    <Routes>
            
            <Route path="/" element={<Home toggleDrawer={toggleDrawer} isOpen={isOpen}/>}/>
            <Route path="/money" element={<Money/>}/>
            <Route path="/rooms" element={<Rooms/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/profile" element={<Profile/>}/>
        
      
    </Routes>
  </BrowserRouter>
          </main>


                {/* Don't worry i'm just CRAZY!!!! (check footer work)*/}
                <div style={{height:'1500px'}}></div>


      <footer>
      {isOpen ? <div className='footer_open'> <Footer/></div> :  <div className='footer_close'> <Footer/></div>}

         
      </footer>
    </React.Fragment>
  );
}

export default App;
