import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Home = () => {
const apiFunc = ()=>{
    axios.get("https://api.themoviedb.org/3/movie/550?api_key=a3fb0f94101300ab3f31911fb856ad7b").then(res=> console.log(res))
}

/* useEffect(() => {
  apiFunc();
}, []) */

apiFunc();


  return (
    <div>
      home
    </div>
  )
}

export default Home
