import React from 'react'

const Card = ({data}) => {
  console.log(data);
  
  return (
    <div className='cardContainer'>
      {data.map((curData,index)=>{
        return (
          <div className='card'>
               <img src={curData.urlToImage}/>
               <div className='cardDescription'>
               <a>{curData.title}</a>
               <p>{curData.desc}</p>
               <button>Read more...</button>
               </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
