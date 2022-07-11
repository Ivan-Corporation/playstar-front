
import '../components/main_slider/slider__main.css'

import { motion } from 'framer-motion'
//import styles 👇
import '../components/money/money.scss'

// buttons from modal (separate in future)
import '../components/header/userAuth/modal.css'
import '../components/money/react-tabs.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



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


export default function Money(props:any) {

    


  return (
    <div className='money__block'>
      <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.3,
                }}
                >
      <h1 className='money__title'>Работа со средствами</h1>

      <div className='money__balance'>
      <p style={{fontSize:'32px'}}><span style={{fontSize:'22px'}}>Баланс:</span> 1053.00</p>
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
        <button className='modal__button_blue' style={{width:'15.5em',height:'3.5em', marginRight:'10px'}}>ПОПОЛНИТЬ БАЛАНС</button>
        <button className='modal__button_blue-border' style={{width:'15.5em',height:'3.5em'}}>ВЫВЕСТИ</button>
        </div>
      </div>
      </motion.div>

      <div className='money__tabs'>
      <Tabs>
    <TabList>
      <Tab>Баланс</Tab>
      <Tab>Пополнение</Tab>
      <Tab>Вывод</Tab>
      <Tab>История заказов</Tab>
      <Tab>Реферальные накопления</Tab>
    </TabList>



    <TabPanel>
     
    <table className="rwd-table" >
    {tableMockData.map(({id, date, price, add}:tableDataTypes) =>
    <>
  <tr id={id}>
    <th>Дата</th>
    <th>Сумма</th>
    <th>Действие</th>
  </tr>
  
  <tr>
    <td data-th="date">{date}</td>
    <td data-th="price">{price}</td>
    <td data-th="add">{add}</td>
  </tr>
  <br/>
  <br/>
  </>
)}
</table>

    </TabPanel>



    <TabPanel>
    <table className="rwd-table">
  <tr>
    <th>Дата</th>
    <th>Сумма</th>
    <th>Действие</th>
  </tr>
  <tr>
    <td data-th="date">12.07.2021</td>
    <td data-th="price">+91.00</td>
    <td data-th="add">Пополнение: Mastercard</td>
  </tr>

</table>
    </TabPanel>

    <TabPanel> <table className="rwd-table" >
    {tableMockData.map(({id, date, price, add}:tableDataTypes) =>
    <>
  <tr id={id}>
    <th>Дата</th>
    <th>Сумма</th>
    <th>Действие</th>
  </tr>
  
  <tr>
    <td data-th="date">{date}</td>
    <td data-th="price">{price}</td>
    <td data-th="add">{add}</td>
  </tr>
  <br/>
  <br/>
  </>
)}
</table></TabPanel>
    <TabPanel> <table className="rwd-table" >
    {tableMockData.map(({id, date, price, add}:tableDataTypes) =>
    <>
  <tr id={id}>
    <th>Дата</th>
    <th>Сумма</th>
    <th>Действие</th>
  </tr>
  
  <tr>
    <td data-th="date">{date}</td>
    <td data-th="price">{price}</td>
    <td data-th="add">{add}</td>
  </tr>
  <br/>
  <br/>
  </>
)}
</table></TabPanel>
    <TabPanel> <table className="rwd-table" >
    {tableMockData.map(({id, date, price, add}:tableDataTypes) =>
    <>
  <tr id={id}>
    <th>Дата</th>
    <th>Сумма</th>
    <th>Действие</th>
  </tr>
  
  <tr>
    <td data-th="date">{date}</td>
    <td data-th="price">{price}</td>
    <td data-th="add">{add}</td>
  </tr>
  <br/>
  <br/>
  </>
)}
</table></TabPanel>
  </Tabs>
  </div>
    </div>
  );
}
