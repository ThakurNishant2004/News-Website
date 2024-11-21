import React, { useState } from 'react'
import Card from './Card'
const NewsApp = () => {
  const[search,setsearch] = useState("india");
  const[newsData,setNewsData] = useState(null)
   const API_KEY = "f9bc0525eb7c4c1cb9f5c7c968e1c07d";
   const getData = async()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`) ;
     const jsonData = await response.json() ;
     console.log(jsonData.articles);
     setNewsData(jsonData.articles);
      }

      const handleInput =(e)=>{
        console.log(e.target.value);
        setsearch(e.target.value);
      }
  return (
    <div>
      <nav className='navbar'>
        <div className="l1">
        <div>
            <h1>News</h1>
        </div>
        <ul className='list'>
            <li>All news</li>
            <li>Trending news</li>
        </ul>
        <div className='searchbar'>
            <input id='search-news' type="text" placeholder='Search news' onChange={handleInput} />
            <button onClick={getData} className='search-btn' >Search</button>
        </div>
        </div>
        <div className="l2">
         <div className="btntype">
            <button className='btn'>Sports</button>
            <button className='btn'>Politics</button>
            <button className='btn'>Entertainment</button>
            <button className='btn'>Market</button>
            <button className='btn'>Research</button>
            <button className='btn'>Health</button>
         </div>
        </div>
      </nav>
      <div>
      {newsData?  <Card data={newsData}/> : null} </div>
    </div>
  )
}

export default NewsApp
