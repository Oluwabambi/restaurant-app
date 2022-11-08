import storyIntroImg from "../assets/images/story-intro-img.jpg";
import imgStory from "../assets/images/img-story.jpg";
import quoteMark from "../assets/images/quote-mark-icon.svg";
import ValueSection from "./ValueSection";
import { values } from "./Values-List";
import { newsList } from "./News-List";
import NewsSection from "./NewsSection";
import star from "../assets/images/star-shape.svg";
import starColored from "../assets/images/star-shape-colored.svg";

const Story = () => {
  const storyNews = newsList.homeNews;

  return (
    <>
      <div className="container">
        <div className="story-sect">
          <div className="overlay"></div>
          <div className="story-flex">
            <span>THE STORY BEHIND THE PLATES</span>
          </div>
          <h1>OUR STORY</h1>
        </div>
        <div className="story-two">
          <div className="story-p">
            <p>
              Summer 1987, Michel and Maria, who just graduated from the
              culinary school, decide to buy an old warehouse, in the east of
              Paris. Their idea ? Renovate it and make one of the most iconic
              french restaurant, between tradition and innovation. That's how
              FLAVO was born
            </p>
          </div>
          <div className="story-img">
            <img src={storyIntroImg} alt="Story" />
            <div className="story-lower">
              <p>The premises of FLAVO, back in 1987</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="story-three">
          <p>
            + 30 years later, FLAVO is now one of the most <span>popular</span>{" "}
            restaurant of the <span>capital</span>.
          </p>
        </div>
        <div className="sixth-sect pb-5">
          <div className="sixth-d">
            <img src={quoteMark} alt="" />
            <p>
              We created FLAVO to give joy through modern and tasty recipes.
              Enjoy a special moment with people you love. Discover new flavors,
              food and drinks. Have a seat, order and enjoy !
            </p>
          </div>
          <div className="sixth-d">
            <img className="img-six" src={imgStory} alt="" />
            <div className="story-lower">
              <p>Michel ROCHET, Head chef and owner of FLAVO</p>
            </div>
          </div>
        </div>
        <div className="story-five">
          <h3>Our values</h3>
          {values.map((value) => (
            <ValueSection key={value.id} {...value} />
          ))}
        </div>
        <div className="seventh-sect">
          <h2>Latest news</h2>
          <div className="article-sect">
            {storyNews.map((news) => (
              <NewsSection key={news.id} {...news} />
            ))}
          </div>
          <div className="card-btn">
            <button className="btn btn-black">
              <div className="opaq"></div>
              <img className="star-left" alt="" src={starColored} />
              SEE ALL NEWS
              <img className="star-right" alt="" src={starColored} />
            </button>
          </div>
        </div>
        <div className="eigth-sect">
          <h2>Enjoy a special and tasty moment</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            odio aliquam at. Ullam unde magnam porro magni, odit culpa ipsa nisi
            eaque ducimus autem neque excepturi doloremque provident,
            repudiandae laboriosam.
          </p>
          <button className="btn btn-col">
            <div className="opaq-col"></div>
            <img src={star} className="star-left" alt="" />
            BOOK A TABLE NOW
            <img src={star} className="star-right" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Story;
