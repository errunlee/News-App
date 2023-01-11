import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  let [search,setSearch]=useState(null)
  let [progress,setProgress]=useState(0)
   useEffect( ()=>{
    document.querySelector('.btnSearch').addEventListener('click', async () => {
      let searchtext = document.getElementById('searching').value.split(' ').join('+');
      if (!searchtext) {
        alert('input something')
        return;
      }
      setSearch(searchtext)
    })
  })
  let progressBar=(progress)=>{
    setProgress(progress)
  }
    return (
      <Router>
        <div>
          <Navbar val={search} />

          <div>
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
          </div>

          <Routes>
            <Route exact path='/' element={<News setProgress={progressBar} key='1' query="General" />} />
            <Route exact path='/international' element={<News setProgress={progressBar}  key='2' query="International" />} />
            <Route exact path='/sports' element={<News setProgress={progressBar}  key='3' query="Sports" />} />
            <Route exact path='/election' element={<News setProgress={progressBar}  key='4' query="Election" />} />
            <Route exact path='/health' element={<News setProgress={progressBar}  key='5' query="Health" />} />
            <Route exact path='/business' element={<News setProgress={progressBar}  key='6' query="Business" />} />
            {search} && <Route exact path={`/${search}`} element={<News setProgress={progressBar}  key={search} query={search} />} />
          </Routes>
        </div>
      </Router>
    )
}
