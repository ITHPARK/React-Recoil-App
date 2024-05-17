import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import {Routes, Route, Outlet} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {useRecoilState} from 'recoil';
import './reset.css';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Admin from './components/Admin';
import axios from 'axios';
import {Post} from './atoms/atom';



const LayOut = () => {
  return (
    <div>
      <Nav></Nav>

      <Outlet></Outlet>
    </div>
  )
}

function App() {

  const [lists, setLists] = useRecoilState(Post);

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
    
      <div className="App">
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route index element={<List/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
