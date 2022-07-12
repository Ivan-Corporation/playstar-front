
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


import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

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


export default function Rooms(props:any) {

    


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
      <h1 className='rooms__title'>Активные комнаты Apex Legends</h1>
        {/* Search */}
        <div className='rooms__search-bar'>
        <div className="header__search search" style={{marginBottom:'3%'}}>
                <img className="search__icon" src={searchIcon} alt="search-icon" />
                <input className="search__input" placeholder="Начните вводить..."/>
                <img className="search__icon search__settings-icon" src={searchSettingsIcon} alt="search-settings-icon" />
               
            </div>

            
            <Menu menuButton={
            <button className="rooms__menu-button">Сортировать: Истекающие ▼</button>}>
            <MenuItem style={{fontSize:'18px'}}>Истекающие</MenuItem>
            <MenuItem style={{fontSize:'18px'}}>Какие-то ещё</MenuItem>
            <MenuItem style={{fontSize:'18px'}}>Пример длинного текста</MenuItem>
    </Menu>
        </div>

    <div className='rooms__table'>
    <ul className="responsive-table">
   
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">42235</div>
      <div className="col col-2" data-label="Customer Name">John Doe</div>
      <div className="col col-3" data-label="Amount">$350</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li className="table-row">
    <div className="col col-1" data-label="Job Id">42235</div>
      <div className="col col-2" data-label="Customer Name">John Doe</div>
      <div className="col col-3" data-label="Amount">$350</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li className="table-row">
    <div className="col col-1" data-label="Job Id">42235</div>
      <div className="col col-2" data-label="Customer Name">John Doe</div>
      <div className="col col-3" data-label="Amount">$350</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
    <li className="table-row">
    <div className="col col-1" data-label="Job Id">42235</div>
      <div className="col col-2" data-label="Customer Name">John Doe</div>
      <div className="col col-3" data-label="Amount">$350</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
  </ul>
  </div>
      </motion.div>

    </div>
  );
}
