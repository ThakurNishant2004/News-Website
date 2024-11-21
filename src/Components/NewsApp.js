import React from 'react'
import Card from './Card'
const NewsApp = () => {
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
            <input id='search-news' type="text" placeholder='Search news' />
            <button className='search-btn'>Search</button>
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
            <Card/>
         </div>
    </div>
  )
}

export default NewsApp
