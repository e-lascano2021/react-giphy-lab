import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayGif from './Components/DisplayGif';

function App() {
  const [gifData, setGifData] = useState('')

  useEffect(() => {
    let gifUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=KKwPyLZHZ2E0TUwsFHaQOkPyb4goDiYG&limit=1&rating=g';

    const makeApiCall = () => {
      fetch(gifUrl)
      .then(res => res.json())
      .then(data => {
        setGifData(data.data[0].images.original.url)
        console.log("gifdata", gifData)
      });
    }
    makeApiCall()
  },[])


  return (
    <div className="App">
      <DisplayGif gif={gifData}/>
    </div>
  );
}

export default App;
