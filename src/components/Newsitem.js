import React, { Component } from 'react'

export default class Newscomponent extends Component {
  
  render() {
    let {imageUrl,title,description,newsUrl}=this.props
    return (
      <>
      <div>
        <div className="card my-2" style={{width:'18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
      </>
    )
  }
}
