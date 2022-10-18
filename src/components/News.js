import React from 'react'
import NewsSection from './NewsSection'
import { newsList } from './News-List'
import { Link } from 'react-router-dom'

const News = () => {
    const allNews = newsList.allNews
  return (
    <div className='news-container'>
        <div className="news-first">
            <h1>Latest news</h1>
            <div className='news-cats'>
                <ul>
                    <li className='p-3'><Link>COOKING</Link></li>
                    <li className='p-3'><Link>CULTURE</Link></li>
                    <li className='p-3'><Link>DAILY LIFE</Link></li>
                    <li className='p-3'><Link>RECIPES</Link></li>
                </ul>
            </div>
        </div>
        <div className="news-grid">
            {allNews.map((news) => <NewsSection key={news.id} {...news} />)}
        </div>
    </div>
  )
}

export default News