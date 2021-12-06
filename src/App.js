import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayGif from './Components/DisplayGif';
import RandomizeGif from './Components/RandomizeGif';

function App() {
  const [gifData, setGifData] = useState('')

  let gifUrl = 'https://api.giphy.com/v1/gifs/random?api_key=KKwPyLZHZ2E0TUwsFHaQOkPyb4goDiYG&tag=&rating=g';

  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      setGifData(data.data.images.original.url)
      console.log("gifdata", gifData)
    });
  }

  useEffect(() => {
    makeApiCall()
  },[])


  return (
    <div className="App">
      <DisplayGif gif={gifData}/>
      <RandomizeGif handleClick={makeApiCall}/>
    </div>
  );
}

export default App;
