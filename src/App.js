import logo from './logo.svg';
import {Routes, Route, Outlet} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import './reset.css';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Admin from './components/Admin';


const LayOut = () => {
  return (
    <div>
      <Nav></Nav>

      <Outlet></Outlet>
    </div>
  )
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route index element={<List/>}/>
            <Route index element={<Admin/>}/>
          </Route>
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
