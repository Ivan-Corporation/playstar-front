import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import './drawer/index.css'

import logo from '../../images/logo.svg'


function RightSidebar(params:any) {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


    return(
      <>
      <button className='drawer__button_close' onClick={toggleDrawer}><div className="arrow-left"></div></button>
      <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla'
          enableOverlay={false}
      >
          <button className='drawer__button_open' onClick={toggleDrawer}><div className="arrow-right"></div></button>
      </Drawer>
  </>
    )
}

export default RightSidebar


