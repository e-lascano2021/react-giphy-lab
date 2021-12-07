import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayGif from './Components/DisplayGif';
import RandomizeGif from './Components/RandomizeGif';
import Form from './Components/Form'

function App() {
  const [gifData, setGifData] = useState('')
  const [apiUrl, setApiUrl] = useState("https://api.giphy.com/v1/gifs/random?api_key=KKwPyLZHZ2E0TUwsFHaQOkPyb4goDiYG&tag=&rating=g")
  const [searchCount, setSearchCount] = useState(0)




  const handleSubmit = (searchTerm) => {
    if (typeof searchTerm == 'string') {
      setApiUrl(`https://api.giphy.com/v1/gifs/search?api_key=KKwPyLZHZ2E0TUwsFHaQOkPyb4goDiYG&q=${searchTerm}&limit=1&offset=0&rating=g&lang=en`)
    } else {
      setApiUrl(`https://api.giphy.com/v1/gifs/random?api_key=KKwPyLZHZ2E0TUwsFHaQOkPyb4goDiYG&tag=&rating=g`)
    }
    setSearchCount(searchCount + 1)
  }




  useEffect(() => {
    const makeApiCall = (url) => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Gif data:', data)
        if (data.data.length) {
          setGifData(data.data[0].images.original.url)
        } else {
          setGifData(data.data.images.original.url)
        }
      })
    }
    makeApiCall(apiUrl)
  }, [searchCount])



  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <DisplayGif gif={gifData}/>
      <RandomizeGif handleClick={handleSubmit}/>
    </div>
  )
}


export default App;
