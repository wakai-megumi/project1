import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1> Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <li>
            <Carditem
              src='images/nature-3.jpg'
              text='Explore the hidden waterfall deep iside the Amazon Jungle'
              label='Adventure'
              path='/Services'
            />
            </li>
            <Carditem
              src='images/nature-2.jpg'
              text='This is the other destination'
              label='move up'
              path='/Services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem

              src='images/nature-3.jpg'
              text='Explore the hidden waterfall deep iside the Amazon Jungle'
              label='Adventure'
              path='/Products'

            />


            <Carditem

              src='images/image-back.jpg'
              text='This is the other destination'
              label='move up'
              path='/Products'

            />

            <Carditem

              src='images/nature-2.jpg'
              text='This is the other destination'
              label='move up'
              path='/sign-up'

            />
          </ul>


        </div>
      </div>
    </div>
  )
}

export default Cards