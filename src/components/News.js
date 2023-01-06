import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
artilces=[]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true
    }
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/everything?q=nepal+politics&apiKey=3e5e5eae165045bfa4d2974b17d12745'
    let data=await fetch(url)
    let response=await data.json();
    this.setState({articles:response.articles})
    this.setState({loading:false})
  }
  render() {
    return (
      <div className='container my-3'>
        <p className='lead'>Top Headlines</p>
        <div className="row">
          {!this.state.loading?this.state.articles.map((element) => {
            return <div key={element.url} className="col-md-4">
              <Newsitem  title={element.title?element.title:''} description={element.description?element.description.slice(0,90)+'...':''} imageUrl={element.urlToImage?element.urlToImage:'https://source.unsplash.com/random/200x100'} newsUrl={element.url} />
            </div>
          }):<div>Getting latest news for you...</div>}
        </div>
      </div>
    )
  }
}
