import React, {useState, useEffect} from 'react'
import {Post} from '../atoms/atom';


const Pagination = ({setCurrentPage, pagingCurrent ,setPagingCurrent, listLen}) => {

  const [pagingArr, setPagingArr] = useState([]);

 
  const handleClickPaging = (e) => {
    if(e) {
      //마지막 페이지면 작동을 안한다.
      if(pagingCurrent >= ((listLen / 10)/5)){
        return false;
      }else {
        setPagingCurrent(prev => prev + 1);
      }
    }else {
      //맨처음 페이지면 작동을 안한다.
      if(pagingCurrent == 1) {
        return false;
      }else {
        setPagingCurrent(prev => prev - 1);
      }
    }
  } 

  useEffect(() => {

    //pagingCurrent = 1 이면 1,2,3,4,5 | 2면 5, 6, 7, 8, 9, 10
    const start = (pagingCurrent - 1) * 5 + 1;
    const end = start + 4;
    const newPagingArr = [];
    for (let i = start; i <= end; i++) {
      newPagingArr.push(i);
    }
    setPagingArr(newPagingArr);

  }, [pagingCurrent, listLen]);

  const handleClickList = (e) => {
    setCurrentPage(e);
  }
  

  

  return (
    <div className='pagination'>
        <button className='btn_paging prev' onClick={() => handleClickPaging(0)}>&lt;</button>
        <div className='page_wrap'>
           {
            pagingArr.map((a) => {
              return (
                <button onClick={() => handleClickList(a)} key={a}>{a}</button>
              )
            })
           }
        </div>
        <button className='btn_paging next' onClick={() => handleClickPaging(1)}>&gt;</button>
    </div>
  )
}

export default Pagination