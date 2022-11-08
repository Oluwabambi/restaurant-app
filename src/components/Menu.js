import { Link } from "react-router-dom";
import menu from "../assets/images/delice-menu.png";
import { menuList } from "./Menu-List";
import MenuSection from "./MenuSection";
import { useInView } from "react-intersection-observer";

const Menu = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.4,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.4,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.4,
  });

  // window.addEventListener('scroll', ()=> {
  //     const elem = document.getElementById('starters');
  //     const position = elem.getBoundingClientRect();

  // console.log(position.top);

  // if (position.top <= 0 && position.bottom <= window.innerHeight) {
  //     setStarterShow(true)
  //   console.log(position.top);
  //   console.log("Reached Starters");
  // }
  // else {
  //     setStarterShow(false)
  // }
  // })

  return (
    <div className="menu-sect">
      <div className="menu-first">
        <div className="m-one">
          <h1>OUR MENU</h1>
        </div>
        <div className="poster-menu-img">
          <img src={menu} alt="" />
        </div>
        <div className="m-two">
          <div className="scroll-circle">
            <Link>SCROLL</Link>
          </div>
        </div>
      </div>
      <div className="menu-second">
        <div className="m-list">
          <h2>Categories</h2>
          <ul>
            <li>
              <Link className={inView1 ? "set-border" : ""}>STARTERS</Link>
            </li>
            <li>
              <Link className={inView2 ? "set-border" : ""}>DISHES</Link>
            </li>
            <li>
              <Link className={inView3 ? "set-border" : ""}>DESSERTS</Link>
            </li>
            <li>
              <Link className={inView4 ? "set-border" : ""}>
                DRINKS & WINES
              </Link>
            </li>
          </ul>
        </div>
        <div className="m-details">
          <div ref={ref1} className="details-container" id="starters">
            <p>{`${inView1}`}</p>
            <h1 className="details-head">01. Starters</h1>
            {menuList.starters.map((menuItem) => (
              <MenuSection key={menuItem.id} {...menuItem}></MenuSection>
            ))}
          </div>
          <div ref={ref2} className="details-container" id="dishes">
            <h1 className="details-head">02. Dishes</h1>
            {menuList.starters.map((menuItem) => (
              <MenuSection key={menuItem.id} {...menuItem}></MenuSection>
            ))}
          </div>
          <div ref={ref3} className="details-container" id="desserts">
            <h1 className="details-head">03. Desserts</h1>
            {menuList.starters.map((menuItem) => (
              <MenuSection key={menuItem.id} {...menuItem}></MenuSection>
            ))}
          </div>
          <div ref={ref4} className="details-container" id="drinks">
            <h1 className="details-head">04. Drinks & Wines</h1>
            {menuList.starters.map((menuItem) => (
              <MenuSection key={menuItem.id} {...menuItem}></MenuSection>
            ))}
          </div>
        </div>
      </div>
      <div className="menu-third">
        <h2>Enjoy a special and tasty moment</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odio
          aliquam at. Ullam unde magnam porro magni, odit culpa ipsa nisi eaque
          ducimus.
        </p>
        <button>BOOK A TABLE NOW</button>
      </div>
    </div>
  );
};

export default Menu;
