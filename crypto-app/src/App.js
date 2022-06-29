
import './App.css';
import {Switch, Route, Link, Routes} from "react-router-dom"
import { Layout, Typography, Space} from "antd"
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Exchanges from './Components/Exchanges';
import Cryptocurrencies from './Components/Cryptocurrencies';
import CryptoDetails from './Components/CryptoDetails';
import News from './Components/News';

function App() {
  return (
    <div className="app">
     <div className='navbar'>
       <Navbar/>
     </div>
     <div className='main'>
       <Layout>
         <div className='routes'>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
          <Route path="/news" element={<News/>}/>
         </Routes>
         </div>
       </Layout>
       <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
     </div>
     
    </div>
  );
}

export default App;
