import React from 'react'
import {Link} from 'react-router-dom'

const List = () => {
  return (
    <div className='list'>
      <div className='list_inner'>
        <div className='top'>
          <span className='top_title'>제목</span>
          <span className='top_date'>날짜</span>
        </div>
        <ul>
          <li>
            <Link to='/'>
              <span className='title'>titletitletitle</span>
              <span className='date'>2024.01.01</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span className='title'>titletitletitle</span>
              <div className='info'>
                <span className=''>작성자</span>
              <span className='date'>2024.01.01</span>
              
              </div>
              
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span className='title'>titletitletitle</span>
              <span className='date'>2024.01.01</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span className='title'>titletitletitle</span>
              <span className='date'>2024.01.01</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span className='title'>titletitletitle</span>
              <span className='date'>2024.01.01</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default List