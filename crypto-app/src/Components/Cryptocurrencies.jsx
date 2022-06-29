import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input} from "antd";

import { useGetCryptosQuery } from '../Services/CryptoApi';
import Loader from './Loader';


const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm]= useState("")

  const {data:cryptoList, isFetching} = useGetCryptosQuery(count);
  const[cryptos, setCryptos] = useState([]);
  console.log(cryptos);

  useEffect(()=>{
    
    const filterdData = cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
   setCryptos(filterdData);
  },[cryptoList,searchTerm])

  if(isFetching) return (
    <Loader/>
  )
  return (
   <>
   {!simplified && (
     <div className='search-crpto'>
     <input placeholder='Search Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)} />
   
   </div>

   )}


   <Row gutter={[32,32]} className="crypto-card-container">
     {cryptos?.map((currency)=> (
       <Col xs={24} sm={12} lg={6} className="crypto-card"  key={currency.uuid} >
         <Link to={`/crypto/${currency.uuid}`}>
           <Card title={`${currency.rank}. ${currency.name}`}  extra={<img className='crypto-image' src ={currency.iconUrl}  />}>
                 <p>Price : {millify(currency.price)}</p>
                 <p>Market Cap : {millify(currency.marketCap)}</p>
                 <p>Daily Change : {millify(currency.change)}%</p>
             
             </Card>       
          </Link>
       </Col>
     ))}

   </Row>
   </>
  )
}

export default Cryptocurrencies
