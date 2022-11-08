import React from "react";
import star from "../assets/images/star-shape.svg";
import oval from "../assets/images/shape-oval-lines.svg";
import { slideImages } from "./Image-List";
import { newsList } from "./News-List";
import Images from "./Images";
import imgStory from "../assets/images/img-story.jpg";
import NewsSection from "./NewsSection";
import quoteMark from "../assets/images/quote-mark-icon.svg";
import starColored from "../assets/images/star-shape-colored.svg";

const Home = () => {
  const homeNews = newsList.homeNews;

  return (
    <>
      <div className="container">
        <div className="hero-sect">
          <div className="overlay"></div>
          <div className="hero-flex">
            <span>FRENCH RESTAURANT</span>
            <span>SINCE 1987</span>
          </div>
          <h1>FLAVO</h1>
        </div>
        <div className="second-sect">
          <div className="star-sect">
            <img src={star} alt="star shape" />
          </div>
          <div className="summary-sect">
            FLAVO is a french{" "}
            <span className="img-one">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>{" "}
            restaurant located in the west of the city. Our goal is to provide
            unique and tasty{" "}
            <span className="img-two">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{" "}
            experiences. Come with friends, family, co-workers and enjoy a
            memorable moment{" "}
            <span className="img-three">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </span>{" "}
            here.
          </div>
          <div className="btn-sect">
            <button className="btn btn-black">
              <div className="opaq"></div>
              <img className="star-left" alt="" src={starColored} />
              BOOK A TABLE
              <img className="star-right" alt="" src={starColored} />
            </button>
          </div>
        </div>
      </div>
      <div className="third-sect">
        <div className="imgss">
          <img className="imgtoo" src={oval} alt="oval line" />
        </div>
        <div className="th-sum">
          <h3>THE MENU</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <button className="btn btn-col">
            <div className="opaq-col"></div>
            <img className="star-left" alt="" src={star} />
            SEE THE FULL MENU
            <img className="star-right" alt="" src={star} />
          </button>
        </div>
      </div>
      <div className="fourth-sect">
        <div className="fourthp">
          <p>FLAVO in images</p>
        </div>
        <div>
          <button className="btn btn-black">SEE MORE</button>
        </div>
      </div>
      <div className="fifth-sect">
        {slideImages.map((image) => {
          return <Images key={image.id} {...image}></Images>;
        })}
      </div>
      <div className="container">
        <div className="sixth-sect">
          <div className="sixth-d">
            <img src={quoteMark} alt="" />
            <p>
              We created FLAVO to give joy through modern and tasty recipes.
              Enjoy a special moment with people you love. Discover new flavors,
              food and drinks. Have a seat, order and enjoy !
            </p>
            <button className="btn btn-black">READ OUR STORY</button>
          </div>
          <div className="sixth-d">
            <img className="img-six" src={imgStory} alt="" />
          </div>
        </div>
        <div className="seventh-sect">
          <h2>Latest news</h2>
          <div className="article-sect">
            {homeNews.map((news) => (
              <NewsSection key={news.id} {...news} />
            ))}
          </div>
          <div className="card-btn">
            <button className="btn btn-black">SEE ALL NEWS</button>
          </div>
        </div>
      </div>
      <div className="eigth-sect">
        <h2>Enjoy a special and tasty moment</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odio
          aliquam at. Ullam unde magnam porro magni, odit culpa ipsa nisi eaque
          ducimus autem neque excepturi doloremque provident, repudiandae
          laboriosam.
        </p>
        <button className="btn btn-col">
          <div className="opaq-col"></div>
          <img src={star} className="star-left" alt="" />
          BOOK A TABLE NOW
          <img src={star} className="star-right" alt="" />
        </button>
      </div>
    </>
  );
};

export default Home;
