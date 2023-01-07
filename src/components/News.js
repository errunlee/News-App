import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export default class News extends Component {
artilces=[]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=3e5e5eae165045bfa4d2974b17d12745&pageSize=20&page=${this.state.page}`
    let data=await fetch(url)
    let response=await data.json();
    console.log(response)
    this.setState({articles:response.articles})
    this.setState({loading:false})
  }
    handlePrevious=async ()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    let url=`https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=3e5e5eae165045bfa4d2974b17d12745&pageSize=20&page=${this.state.page-1}`
    this.setState({loading:true})
    let data=await fetch(url)
    let response=await data.json();
    this.setState({
      page:this.state.page-1,
      articles:response.articles,
      loading:false
    })
}
    handleNext=async ()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
  let url=`https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=3e5e5eae165045bfa4d2974b17d12745&pageSize=20&page=${this.state.page+1}`
  this.setState({loading:true})
  let data=await fetch(url)
  let response=await data.json();
  this.setState({
    page:this.state.page+1,
    articles:response.articles,
    loading:false
  })
}
  render() {
    
    return (
      <div className='container my-3'>
        <p className='lead'>Top Headlines</p>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url} className="col-md-4">
              <Newsitem  title={element.title?element.title:''} description={element.description?element.description.slice(0,90)+'...':''} imageUrl={element.urlToImage?element.urlToImage:'https://source.unsplash.com/random/200x100'} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='d-flex justify-content-center'>
        <nav aria-label="...">
  <ul className="pagination">
    <li className={`page-item ${this.state.page===1?'disabled':''}`}>
      <button className="page-link" onClick={this.handlePrevious}>Previous</button>
    </li>
    <li className="page-item">
      <button className="page-link" onClick={this.handleNext}>Next</button>
    </li>
  </ul>
</nav>
</div>
      </div>
    )
  }
}
