import './horizontal_scroll.css';
import ScrollContainer from "react-indiana-drag-scroll";

const numbers =  [
    {
      id: 1,
      price: '5000р',
      trophy: 'Золото - алмаз',
      star: 'star'
    },
    
    {
      id: 2,
      price: '3000р',
      trophy: 'Серебро - алмаз',
      star: ''
    },
    {
      id: 3,
      price: '10000р',
      trophy: 'Золото - алмаз',
      star: ''
    },
    {
      id: 4,
      price: '150000р',
      trophy: 'Yellow star',
      star: '',
      background: 'yellow-star-background'
    },



]


function HorizontalScroll() {
  return (



<div>
<ScrollContainer horizontal={true} className="container">
  {numbers.map(({id, price, trophy, star, background }) => (
    <div key={id} className="row">
        <img src={star} alt="star" className={background}/>
      {price}
      {trophy}
    </div>
  ))}
</ScrollContainer>
</div>

  )
}

export default HorizontalScroll;
