import React from 'react'

const NewsSection = ({image, category, text, date}) => {
  return (
    <>
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='card-m'>
                    <p className='mb-0'>
                        {date} <span><i className="bi bi-dot"></i></span> {category}
                    </p>
                    <h3 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h3>
                </div>
                <a href="#" className="btn btn-outline-dark">READ ARTICLE</a>
            </div>
        </div>
    </>
  )
}

export default NewsSection