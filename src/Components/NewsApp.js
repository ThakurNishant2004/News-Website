import React, { useEffect, useState } from 'react'
import Card from './Card'


const NewsApp = () => {
  const [search, setsearch] = useState("india");
  const [newsData, setNewsData] = useState(null)
  const API_KEY = "f9bc0525eb7c4c1cb9f5c7c968e1c07d";
  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  }

  useEffect(() => {
    getData();
  }, [])


  const handleInput = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
  }
  const userInput = (event) => {
    setsearch(event.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getData(); 
    }
  };
  return (
    <div>
      <nav className='navbar'>
        <div className="l1">
          <div className='heading'>
            <h1 className='heading'>New$</h1>
          </div>
          <ul className='list'>
            <li>All news</li>
            <li>Trending news</li>
          </ul>
          <div className='searchbar'>
            <input id='search-news' type="text" placeholder='Search news' value={search} onChange={handleInput} onKeyDown={handleKeyDown} />
            <button onClick={getData} className='search-btn' >Search</button>
          </div>
        </div>
        <div className="l2">
          <div className="btntype">
            <button onClick={userInput} value="sports" className='btn'>Sports</button>
            <button onClick={userInput} value="politics" className='btn btnmed1'>Politics</button>
            <button onClick={userInput} value="entertainment" className='btn'>Entertainment</button>
            <button onClick={userInput} value="market" className='btn'>Market</button>
            <button onClick={userInput} value="research" className='btn'>Research</button>
            <button onClick={userInput} value="health" className='btn btnmed2'>Health</button>
          </div>
        </div>
      </nav>
      <div>
        {newsData ? <Card data={newsData} /> : null}
         </div>
    </div>
  )
}

export default NewsApp
