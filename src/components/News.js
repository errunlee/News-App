import React,{useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export default function News({setProgress,query}) {
  let [articles,setArticles]=useState([])
  let [loading,setLoading]=useState(true)
  let [page,setPage]=useState(1)
  
  useEffect(()=>{
    update()
  },[])
  async function update() {
    setProgress(0)
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=3e5e5eae165045bfa4d2974b17d12745&pageSize=20&page=${page}`
    setLoading(true)
    document.title=`${query.split("+").join(" ")} | NewsLonkey `;
    setProgress(20)
    let data = await fetch(url)
    let response = await data.json();
    setProgress(70)
    setArticles(response.articles)
    setLoading(false)
    setProgress(100)
  }
  const handlePrevious = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(page=page - 1)
    setTimeout(()=>{      
      update()
      },10)
  }
  const handleNext = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage( page=page + 1 )
    setTimeout(()=>{      
    update()
    },10)
  }
    return (
      <div className='container my-3' >
        <p className='lead' style={{marginTop:'10vh'}}>Top Headlines - {query}</p>
        {loading && <Spinner />}
        <div className="row">
          {!loading && articles.map((element) => {
            return <div key={element.url} className="col-md-4">
              <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description.slice(0, 90) + '...' : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://source.unsplash.com/random/200x100'} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
            </div>
          })}
        </div>
        <div className='d-flex justify-content-center'>
          <nav aria-label="...">
           {!loading &&  <ul className="pagination">
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePrevious}>Previous</button>
              </li>
              <li className="page-item">
                <button className="page-link" onClick={handleNext}>Next</button>
              </li>
            </ul>}
          </nav>
        </div>
      </div>
    )
  }
