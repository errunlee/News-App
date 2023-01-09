import React, { Component } from 'react'

export default class Newscomponent extends Component {
  
  render() {
    let {imageUrl,title,description,newsUrl,date,author,source}=this.props
    return (
      <>
      <div className='d-flex justify-content-center'>
        <div className="card my-2" style={{width:'18rem'}}>
        <div className='d-flex justify-content-end'>
    <span style={{position:'absolute',right:'0'}}className="  badge rounded-pill bg-info">
    {source}
  </span>
  </div>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl} target='_blank'  rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
      </>
    )
  }
}
