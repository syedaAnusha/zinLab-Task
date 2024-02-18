import styles from "@/styles/carousel.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "./Card";
import { card } from "./index";
import CustomButtonArrowGroup from "./carousel components/CustomButtonArrowGroup";

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 769 },
    items: 3,
    // slidesToSlide: 1,
    // partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 768, min: 601 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 0,
  },
};
const CustomCarousel = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading2}>Convert from PDF</h2>

          <Carousel
            additionalTransfrom={0}
            responsive={responsive}
            centerMode={false}
            arrows={false}
            slidesToSlide={2}
            shouldResetAutoplay={true}
            customButtonGroup={<CustomButtonArrowGroup />}
            containerClass={styles.carousel__container}
            itemClass={styles.card__item}
          >
            {card.map((item) => (
              <Card
                key={crypto.randomUUID()}
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CustomCarousel;
