import React from 'react'

const Card = ({data}) => {
  console.log(data);
  // const readMore =(url)=>{
  //   window.open(url)
  // }
  return (
    <div className='cardContainer'>
      {data.map((curData,index)=>{
        return (
          <div className='card'>
               <img src={curData.urlToImage}/>
               <div className='content'>
               <a className='title' onClick={()=>{window.open(curData.url)}}>{curData.title}</a>
               <p>{curData.description}</p>
               <button onClick={()=>{window.open(curData.url)}}>Read more...</button>
               </div>
          </div>
        )
      })}
    </div>
  )
  console.log(Card);
  
}

export default Card
