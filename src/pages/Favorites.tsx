
import '../components/main_slider/slider__main.css'

import { motion } from 'framer-motion'
//import styles 👇
import '../components/rooms/rooms.scss'

// buttons from modal (separate in future)
import '../components/header/userAuth/modal.css'
import MainSlider from '../components/main_slider/MainSlider'

// Icons
import searchIcon from '../images/header_images/search.svg'
import searchSettingsIcon from '../images/header_images/search-settings.svg'




const tableMockData = [
  {
    id: 1,
    date: '12.07.2021',
    price: '+12191.00',
    add: 'Пополнение: Mastercard'
  },
  {
    id: 2,
    date: '12.07.2021',
    price: '-4491.00',
    add: 'Проигрыш'
  },
  {
    id: 3,
    date: '12.07.2021',
    price: '+33491.00',
    add: 'Проигрыш'
  },
  {
    id: 4,
    date: '12.07.2021',
    price: '+111191.00',
    add: 'Проигрыш'
  },
  {
    id: 5,
    date: '12.07.2021',
    price: '+4491.00',
    add: 'Пополнение: Бонус'
  },
]


interface tableDataTypes {
  id: any,
  date: string,
  price: string,
  add: string
}


export default function Favorites(props:any) {

    


  return (
    <div className='money__block'>
      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.3,
                }}
                >
        <div className='rooms__slider'><MainSlider /></div>
        </motion.div>
      <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.5,
                }}
                >
      <h1 className='rooms__title'>Избранные игры</h1>
        
      </motion.div>

    </div>
  );
}
