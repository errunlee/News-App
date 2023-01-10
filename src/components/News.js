import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export default class News extends Component {
  artilces = []
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1
    }
    document.title=`${this.props.query.split("+").join(" ")} | NewsLonkey `;
  }
  async componentDidMount() {
    this.update();
  }
  async update() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=3e5e5eae165045bfa4d2974b17d12745&pageSize=20&page=${this.state.page}`
    this.setState({ loading: true })
    this.props.setProgress(20)
    let data = await fetch(url)
    let response = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: response.articles,
      loading: false
    })
    this.props.setProgress(100)
  }
  handlePrevious = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.setState({ page: this.state.page - 1 })
    setTimeout(()=>{      
      this.update()
      },10)
  }
  handleNext = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.setState({ page: this.state.page + 1 })
    setTimeout(()=>{      
    this.update()
    },10)
  }
  render() {
    return (
      <div className='container my-3'>
        <p className='lead'>Top Headlines - {this.props.query}</p>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url} className="col-md-4">
              <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description.slice(0, 90) + '...' : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://source.unsplash.com/random/200x100'} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
            </div>
          })}
        </div>
        <div className='d-flex justify-content-center'>
          <nav aria-label="...">
            <ul className="pagination">
              <li className={`page-item ${this.state.page === 1 ? 'disabled' : ''}`}>
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
