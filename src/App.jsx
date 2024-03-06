import { useState, useEffect } from 'react'
import axios from 'axios'
import { Skeleton, Typography } from '@mui/material'
import './App.css'
import NavBar from './NavBar/NavBar'
import News from './Newscard/News'
import Footer from './Newscard/Footer'



function App() {

  const [dayNews, setDayNews] = useState([])

  const newsCall = async () => {
    try {
      const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date')
      setDayNews(response.data.hits)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    newsCall();
  }, []);

  const dayNewsApi = async (search) => {
    console.log(search);
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${search}&tags=story`)
      setDayNews(response.data.hits) 
      console.log(response);
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <>
      <NavBar searchCall={dayNewsApi}/>
      <div>
        <marquee behavior="slow" direction=""><h2>Hacker News - Headlines Of The Day</h2></marquee></div>
      <News dayNews={dayNews}/>
      <Footer />
      
      
           
      
    </>
  ) 
} 

export default App
