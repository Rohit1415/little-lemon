import { Carousel } from "react-bootstrap";

//images for Carousels
import item1 from "../images/carousels/item1.jpg";
import item2 from "../images/carousels/item2.jpg";
import item3 from "../images/carousels/item3.jpg";
import item4 from "../images/carousels/item4.jpg";
import item5 from "../images/carousels/item5.jpg";
import item6 from "../images/carousels/item6.jpg";
import item7 from "../images/carousels/item7.jpg";
import item8 from "../images/carousels/item8.jpg";
import item9 from "../images/carousels/item9.jpg";
// import { sliderTypes } from "../../models/model";

const Carousels = () => {
  let images = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
  return (
    <Carousel>
      {images.map((x) => {
        return (
          <Carousel.Item interval={500}>
            <img className="d-block w-100 h-50" src={x} alt="First slide" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Carousels;
