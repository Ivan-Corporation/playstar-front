import './assets/styles/App.css';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './assets/styles/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import React, {useEffect} from "react";

import sliderExample from './assets/images/slider-example.png'
import sliderExample2 from './assets/images/slider-example2.jpg'
import sliderExample3 from './assets/images/slider-example3.jpg'
import sliderExample4 from './assets/images/slider-example4.jpg'
import HorizontalScroll from './horizontal_scrollbar/HorizontalScroll';


import EZDrawer from './drawer/index.modern'
import './assets/styles/drawer.css'
import './assets/styles/advt-card.css'


import user from './assets/images/user.png'
import stars from './assets/images/stars.svg'
import triangle from './assets/images/triangles.svg'



const titleList = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  }

]



const AutoplaySlider = withAutoplay(AwesomeSlider);





function App() {


  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)

    }




 


  return (
    <React.Fragment>
       <button onClick={toggleDrawer} className="wrapper-menu">🔮</button>
    
    <div className='main-content'>


   
        



            <EZDrawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                classNameName='drawer-playstar'
                overlayOpacity={0.4}
            >

      {/* Test components request */}
      {titleList.map(({id}) => ( 
      <div className="advt-card" id={id}>
      <div className="advt-card__content">
        <a className="advt-card__list-title list-title" href="#">
          <div className="list-title__img-wrapper">
            <div className="list-title__circle">
              <span className="circle__inner">
                <img
                  className="circle__img"
                  src="img/play.svg"
                  alt="play-stream-icon"
                />
              </span>
            </div>

            <img
              className="list-title__avatar"
              src={user}
              alt="user-avatar"
            />
          </div>

          <div className="list-title__info">
            <h2 className="list-title__name">Сергей Ермолов</h2>
            <p className="list-title__game">Call of durty</p>

            <div className="list-title__rating">
              <p className="rating__text">
                Рейтинг: <span className="rating__number">1 328</span>
              </p>
              <img src={stars} alt="rating-star" />
            </div>
          </div>
        </a>
   
      </div>

      <div className="advt-card__price">
        <svg
          className="price__triangles"
          width="9"
          height="99"
          viewBox="0 0 9 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 27.5003L9 21.8711V33.1294L0 27.5003Z" fill="#288BFF" />
          <path d="M0 49.5003L9 43.8711V55.1294L0 49.5003Z" fill="#288BFF" />
          <path d="M0 71.5003L9 65.8711V77.1294L0 71.5003Z" fill="#288BFF" />
          <path d="M0 93.5003L9 87.8711V99.1294L0 93.5003Z" fill="#288BFF" />
          <path d="M0 16.5003L9 10.8711V22.1294L0 16.5003Z" fill="#288BFF" />
          <path d="M0 5.50026L9 -0.128906V11.1294L0 5.50026Z" fill="#288BFF" />
          <path
            d="M2.18561e-08 38.0003L9 32.8041V43.1964L2.18561e-08 38.0003Z"
            fill="#288BFF"
          />
          <path
            d="M2.18561e-08 61.0003L9 55.8041V66.1964L2.18561e-08 61.0003Z"
            fill="#288BFF"
          />
          <path d="M0 82.5003L9 76.8711V88.1294L0 82.5003Z" fill="#288BFF" />
        </svg>

        <h2 className="price__text">$299</h2>
      </div>
    </div>
    ))}



<a class="send-button">Update ⏳</a>

     </EZDrawer>



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
    </React.Fragment>
  );
}

export default App;
