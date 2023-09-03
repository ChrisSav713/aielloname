import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import photo1 from '../../img/IMG-6705.jpg'
import photo2 from '../../img/IMG-6706.jpg'
import photo3 from '../../img/IMG-6707.jpg'
import photo4 from '../../img/IMG-6709.jpg'
import photo5 from '../../img/IMG-6710.jpg'
import photo6 from '../../img/IMG-2684.JPG'

const Dashboard = () => {
  return (
    <div>
      <ul role='list' className='divide-y divide-gray-200'>
        <li key={1} className='py-4'>
          <img src={photo6} alt='' className='w-96 h-96' />
        </li>

        <li key={2} className='py-4'>
          <Carousel data-bs-theme='dark'>
            <Carousel.Item>
              <img
                className='mx-auto  h-fit d-block'
                src={photo1}
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-25' src={photo2} alt='First slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-25' src={photo3} alt='Second slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-25' src={photo4} alt='Third slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-25' src={photo5} alt='Third slide' />
            </Carousel.Item>
          </Carousel>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard
