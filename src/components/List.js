import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {CafeList} from '../atoms/atom';

const List = () => {

  const [todos, setTodos] = useRecoilState(CafeList);


  return (
    <div className='cafe_main'>
      <div className='top'>
        <p>CAFE</p>
      </div>
      <div className='content'>
        <div className='aside'>
          <ul className='aside_main_nav'>
            <li><Link to='/'>카페홈</Link></li>
            <li><Link to='/'>이웃</Link></li>
            <li><Link to='/'>인기글</Link></li>
            <li><Link to='/'>내 소식</Link></li>
            <li><Link to='/'>채팅</Link></li>
          </ul>
          <ul className='aside_sub_nav'> 
            <li><Link to="" >주제별 카페</Link></li>
            <li><Link to="" >지역별 카페</Link></li>
            <li><Link to="" >인기 팬카페</Link></li>
            <li><Link to="" >대표 카페</Link></li>
          </ul>
        </div>
        <div className='list'>
          <div className='list_inner'>
            <ul>
              <li>
                <Link to='/'>
                  <span className='title'>{todos[0]}</span>
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
      </div>
    </div>
    
    
  )
}

export default List