import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {Post} from '../atoms/atom';
import Pagination from './Pagination'
import axios from 'axios';


const List = () => {

  const [lists, setLists] = useRecoilState(Post);

  //현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  //페이징 페이지
  const [pagingCurrent, setPagingCurrent] = useState(1);


  const fetchListData  = async() => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const resData = res.data;

      const result = resData.map((a) => ({
        //객체를 복사하여 view 키를 추가
        ...a,
        view:true
      }))

      setLists(result);   
   
    }catch(e) {
      console.log(e);
    }
    
  }


   useEffect(() => {
    fetchListData();
   }, [])
   


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
            <h2 className='cafe_title'>카페 글</h2>
            <ul className='post_list'>
              {
                lists.map((item, idx) => {

                  if(idx < 10){
                    return(
                      <li key={item.id}>
                        <Link to="/">
                          <span className='post_title'>{item.title}</span>
                          <div className='info'>
                            <span className='post_user'>{item.userId}</span>
                            <span className='post_data'>2024.03.01</span>
                          </div>
                        </Link>
                      </li>
                    )
                  }
                  
                })
              }
            </ul>
            <Pagination
              pagingCurrent={pagingCurrent}
              setPagingCurrent={setPagingCurrent}
              listLen = {lists.length}
            />
           
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default List