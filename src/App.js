import { useEffect, useState } from "react";
import "./App.css"

function App() {
    const [quote,setQuote]=useState("");
    const [author,setAuthor]=useState("");

    useEffect(()=>{
      fetch("http://api.quotable.io/random")
      .then(res=>res.json())
      .then(
        (quote)=>{
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
    },[]);

    let fetchnewquote = ()=>{
      fetch("http://api.quotable.io/random")
      .then(res=>res.json())
      .then(
        (quote)=>{
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
    }
  return (
    <div className="quote-box">
       <h1>Quote of the Day</h1>
        <blockquote>{quote}</blockquote>
        <span>{author}</span>
        <button onClick={fetchnewquote}>New Quote</button>
    </div>
  );
}

export default App;
