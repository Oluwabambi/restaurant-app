import { photos } from "./Gallery-List";

const Gallery = () => {
  
  return (
    <div className="gallery-sect">
      <div className="gallery-one">
        <h1>PHOTOS </h1>
        <h1>GALLERY</h1>
        <div id="line" className="g-line">
            <div className="g-dark-line"></div>
        </div>
      </div>
      <div id="images" className="gallery-imgs">
        <div className="imgs-wrapper">
            {photos.map( img => <img key={img.id} src={img.source} alt={`Meal ${img.id}`} className={`gallery-${img.id}` } /> )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
