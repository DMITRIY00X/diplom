import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import "./Slider.css";
import data from "./data.json";


function Slider() {
    const collections = data.collections;
    return (
        <div className="Slider">
            <div className="image-gallery-wrapper">
                {
                    collections.map((obj, index) => (
                        <div className="collection" key={index}>
                            <h2>{obj.name}</h2>
                            <ImageGallery items={obj.photos} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider;