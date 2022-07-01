import './horizontal_scroll.css';
import ScrollContainer from "react-indiana-drag-scroll";
import user from "./user.png"

interface HorizontalScrollProps {
  id: number,
  price: string,
  trophy: string,
  star: any
}




const horizontalScrollData =  [
    {
      id: 1,
      price: '5000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },
    
    {
      id: 2,
      price: '3000р',
      trophy: 'Бронза - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/pink.png'
    },
    {
      id: 3,
      price: '10000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },
    {
      id: 4,
      price: '15000р',
      trophy: 'Бронза - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/yellow-hollow.png'
    },
    {
      id: 5,
      price: '5000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },
    
    {
      id: 6,
      price: '3000р',
      trophy: 'Бронза - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/pink.png'
    },
    {
      id: 7,
      price: '10000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/yellow-hollow.png'
    },
    {
      id: 8,
      price: '15000р',
      trophy: 'Бронза - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/yellow-hollow.png'
    },
    {
      id: 9,
      price: '5000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },
    
    {
      id: 10,
      price: '3000р',
      trophy: 'Бронза - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/pink.png'
    },
    {
      id: 11,
      price: '10000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },
    {
      id: 12,
      price: '15000р',
      trophy: 'Бронза - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },



]


function HorizontalScroll() {
  return (



  <div>
  <ScrollContainer 
      horizontal={true}
      className="container"
      vertical={false}
   >
    {horizontalScrollData.map(({id, price, trophy, star }) => (
      <div key={id} className="row">
      <img src={user} alt="star" className="stars"/>
        <div className='price'>Заработано: {price}</div>
        <div className='completed'>Выполнено:<br/> <div style={{fontSize:'15px', color:'white'}}>{trophy}</div></div>
      </div>
    ))}
  </ScrollContainer>
  
  </div>

    )
}

export default HorizontalScroll;
