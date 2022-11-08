import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import star from '../assets/images/star-shape.svg'
import starColored from "../assets/images/star-shape-colored.svg";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Header = () => {

    const scrollDirection = useScrollDirection()
    return (
        <header className={`stickynav ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
            <nav className="navbar pfixed navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to='/'><img alt='' src={star} />FLAVO<img alt='' src={star} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/'>HOME</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/menu'>MENU</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/gallery'>PHOTOS GALLERY</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/our-story'>OUR STORY</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/news'>NEWS</Link> 
                            </li>
                        </ul>
                        <div className="ms-auto">
                            <button className='btn btn-black'><div className="opaq"></div><img className="star-left" alt='' src={starColored} />BOOK A TABLE<img className="star-right" alt='' src={starColored} /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header