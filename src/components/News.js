import React from 'react'
import NewsSection from './NewsSection'
import { newsList } from './News-List'

const News = () => {
    const allNews = newsList.allNews
  return (
    <div className='news-container'>
        <div className="news-first">
            <h1>Latest news</h1>
            <div className='news-cats'>
                <ul>
                    <li className='p-2'>COOKING</li>
                    <li className='p-2'>CULTURE</li>
                    <li className='p-2'>DAILY LIFE</li>
                    <li className='p-2'>RECIPES</li>
                </ul>
            </div>
        </div>
        <div className="article-sect">
            {allNews.map((news) => <NewsSection key={news.id} {...news} />)}
        </div>
    </div>
  )
}

export default News