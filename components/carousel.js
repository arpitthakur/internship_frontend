import { Carousel } from "antd";

const carousel = () => (
  <Carousel autoplay>
    <div className="container">
      <img src="image_1.jpg" className="carousel_img" alt="carousel_image" />
    </div>
    <div>
      <img src="image_2.jpg" className="carousel_img" alt="carousel_image" />
    </div>
    <div>
      <img src="image_3.jpg" className="carousel_img" alt="carousel_image" />
    </div>
    <div>
      <img src="image_4.webp" className="carousel_img" alt="carousel_image" />
    </div>
  </Carousel>
);
export default carousel;
