import React, { useState } from 'react'
import'./Randomquote.css'
import twitter_icon from '../Assets/twitter.jpg'
import reload_icon from'../Assets/reload.jpg'


export const RandomQuote = () => {

  let quotes = [];

   async function loadquote(){
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
   }



    const[quote,setquote] = useState({

      text:"I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts",
      author:"addy"

    });


    const random = () =>{
      const select = quotes[Math.floor(Math.random()*quotes.length)];
      setquote(select);
    }
    loadquote();

    const twitter = () =>{
      window.open(`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author.split(',')[0]}`)
    }
                 
  return (

    
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author"> -{quote.author.split(',')[0]}</div>
        <div className="icons">
          <img src={reload_icon} onClick={()=>{random()}} alt="" />
          <img src={twitter_icon} onClick={()=>{twitter()}} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

