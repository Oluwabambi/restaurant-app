import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
        <nav className="navbar pfixed navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to='/'>DELICE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>HOME</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/menu'>MENU</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/gallery'>PHOTOS GALLERY</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/our-story'>OUR STORY</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/news'>NEWS</Link> 
                        </li>
                    </ul>
                    <div className="ms-auto">
                        <button className='btn btn-dark'>BOOK A TABLE</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header