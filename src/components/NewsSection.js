import { Link } from "react-router-dom"
import star from "../assets/images/star-shape.svg";

const NewsSection = ({image, category, text, wStyle, date}) => {
  return (
    <>
        <div className={'card ' + wStyle}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='card-m'>
                    <p className='mb-0'>
                        {date} <span><i className="bi bi-dot"></i></span> {category}
                    </p>
                    <h3 className="card-text">{text}</h3>
                </div>
                <Link  className="btn btn-outline-black"><img src={star} className = 'star-left' alt="article"/><div className="opaq-outline"></div>READ ARTICLE<img src={star} className='star-right' alt="article" /> </Link>
            </div>
        </div>
    </>
  )
}

export default NewsSection