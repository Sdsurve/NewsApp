import React from 'react'
import './NewsArticals.css'
function NewsArticals({ author, title, description, url, urlToImage, publishedAt, content }) {
  return (
    <div className="news-article">
      <img src={urlToImage} alt="" className="news-article-image" />
      <h2>{title}</h2><br />
      <p>{description}</p><br />
      <p className='author'>Publish By : <span>{author}</span> </p>
      <p className='author'>Publish On : <span>{new Date(publishedAt).toLocaleString()}</span> </p><br />
      <a href={url} target="_blank" rel="noopener noreferrer">Read more ....</a>

    </div>
  )
}

export default NewsArticals