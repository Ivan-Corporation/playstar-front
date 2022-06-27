import './horizontal_scroll.css';
import ScrollContainer from "react-indiana-drag-scroll";

const numbers =  [
    {
      id: 1,
      price: '5000р',
      trophy: 'Золото - алмаз',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/blue.png'
    },
    
    {
      id: 2,
      price: '3000р',
      trophy: 'Серебро - алмаз',
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
      price: '150000р',
      trophy: 'Yellow star',
      star: 'https://raw.githubusercontent.com/Ivan-Corporation/playstar-front/master/src/assets/images/stars/yellow-hollow.png'
    },



]


function HorizontalScroll() {
  return (



<div>
<ScrollContainer horizontal={true} className="container">
  {numbers.map(({id, price, trophy, star }) => (
    <div key={id} className="row">
        <img src={star} alt="star" className="stars"/>
      <h4 className='price'>{price}</h4>
      <h4 className='trophy'>{trophy}</h4>
    </div>
  ))}
</ScrollContainer>
</div>

  )
}

export default HorizontalScroll;
