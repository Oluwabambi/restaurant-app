import { Link } from "react-router-dom"
import menu from "../assets/images/delice-menu.png"
import { menuList } from "./Menu-List"
import MenuSection from "./MenuSection"

const Menu = () => {
  return (
    <div className='menu-sect'>
        <div className='menu-first'>
            <div className='m-one'>
                <h1>OUR MENU</h1>
            </div>
            <div className="poster-menu-img">
                <img src={menu} alt="" />
            </div>
            <div className='m-two'>
                <div className='scroll-circle'><Link>SCROLL</Link></div>
            </div>
        </div>
        <div className="menu-second">
            <div className="m-list">
                <h2>Categories</h2>
                <ul>
                    <li>STARTERS</li>
                    <li>DISHES</li>
                    <li>DESSERTS</li>
                    <li>DRINKS & WINES</li>
                </ul>
            </div>            
            <div className="m-details">
                <div className="starters-sect">
                    <h1 className="details-head">01. Starters</h1>
                    {menuList.starters.map((menuItem) =>  <MenuSection key={menuItem.id} {...menuItem} ></MenuSection>)}
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Menu