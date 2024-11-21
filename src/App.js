import './App.css';
import {
  BrowserRouter as Router,
  Route,Routes,
  Link,
  useParams,
  useRouteMatch,
  Navigate
} from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from 'react';
import HomeView from './views/HomeView';
import DevCard from './components/DevCard';
import DogCard from './components/DogCard';
import DevView from './views/DevView';
import DogView from './views/DogView';
import Layout from './views/Layout';

function App() {
  const [homeObj,setNavObj] = useState(null);

  useEffect(()=>{
    console.log('App Loaded');
  },[]);
  return (
    <div className="App vHome">
      <Layout/>
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route index element={<HomeView homeObj={homeObj} setNav={setNavObj} />}/>
      <Route path='/dev' element={<DevView/>}/>
      <Route path='/dog' element={<DogView/>}/>
    </Routes>
    </div>
  );
}

export default App;
