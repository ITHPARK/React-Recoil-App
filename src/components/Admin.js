import React, {useEffect, useState} from 'react'
import {useRecoilValue, useRecoilState} from 'recoil';
import {Post} from '../atoms/atom';
import Pagination from './Pagination'
import {Link} from 'react-router-dom';

const Admin = () => {

  const [count, setCount] = useRecoilState(Post);

  //현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  //페이징 페이지
  const [pagingCurrent, setPagingCurrent] = useState(1);

  //관리자 페이지 아코디언 작업을 위한 state
  const [stateArr, setStateArr] = useState(Array(count.length).fill(false));

  //관리자 페이지 
  const [titValue, setTitValue] = useState(Array(count.length));


  //리스트 아코디언 함수
  const handleClick = (e) => {
    
    const updatedClickedItem = [...stateArr]; 
    updatedClickedItem[e] =!updatedClickedItem[e];
    setStateArr(updatedClickedItem); 

  }

  //포스트 공개, 비공개 설정
  const handleView = (e) => {

    //atom을 복사
    const newArray = [...count];

    //veiw값의 상태를 변경
    newArray[e] = {
      ...newArray[e],
      view: !newArray[e].view
    }

    //view값을 변경한 배열을 atom값으로 변경
    setCount(newArray);
  
  }

  //수정할 값을 배열에 저장
  const handleInput = (e, idx) => {

    //post에 개수만큼 item을 가지는 배열을 복사 
    const result = [...titValue];

    //해당 포스트의 index에 맞게 수정할 title값을 배열에 삽입
    result[idx] = e.target.value;

    //배열값 변경
    setTitValue(result);
  }

  //수정값을 atom에 반환
  const handleModify = (idx) => {

    //atom을 복사
    const arr = [...count];

    //입력란에 2글자 이상 써야 수정이 가능
    if(titValue[idx].length > 1){

      let check = window.confirm('수정하시겠습니까?');

      if(check) {

        //복사한 배열에 title값을 변경
        arr[idx] ={
          ...arr[idx],
          title: titValue[idx]
        }

        //복사한 배열값을 atom값으로 변경
        setCount(arr);

        alert('수정되었습니다.');
      }else {
        return false;
      }
  
    }else {
      alert('최소 2자리를 입력해주세요');
      
    }
  }


  return (
    <div className="wrap">
       <div className='top'>
        <p>ADMIN</p>
      </div>
      <div className='content'>
        <div className='list'>
          <div className='list_inner'>
            <h2 className='cafe_title'>관리자</h2>
            <ul className='post_list'>
              {
                count.map((item, idx) => {

                  if(idx >= (currentPage - 1) * 10  && idx < currentPage * 10 ){
                    return(
                      <li className={stateArr[idx] ? 'set_on' : ' ' } key={item.id} >
                        <div className='post_box' onClick={() => handleClick(idx)}>
                          <span className='post_title'>{item.title}</span>
                          <div className='info'>
                            <span className='post_user'>{item.userId}</span>
                            <span className='post_data'>2024.03.01</span>
                          </div>
                        </div>

                        <div className="post_setting">
                          <div className='setting hide'>
                            <span className='setting_tit'>비공개</span>
                            <div>
                              <input
                                type="checkbox"
                                className="viewSetIpt"
                                id={`viewSet${item.id}`}
                                onClick={() => handleView(idx)}
                                value={titValue[idx]}
                              />
                              <label htmlFor={`viewSet${item.id}`} className={item.view ? "" : 'on'}>
                                <span></span>
                              </label>
                            </div>
                          </div>
                          <div className='setting modify'>
                            <span className='setting_tit'>제목</span>  
                            <div>
                              <input type="text"  onChange={(e) => handleInput(e, idx)}/>
                            </div>
                            <button onClick={() => handleModify(idx)}>수정</button>
                          </div>
                        </div>
                      </li>
                    )
                  }
                  
                })
              }
            </ul>
            <Pagination
              setCurrentPage = {setCurrentPage}
              pagingCurrent={pagingCurrent}
              setPagingCurrent={setPagingCurrent}
              listLen = {count.length}
            />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin