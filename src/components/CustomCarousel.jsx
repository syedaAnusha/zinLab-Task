import React from "react";
import styles from "@/styles/carousel.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { card } from "./index";
// import LeftArrow from "./carousel components/LeftArrow";

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 749 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 748, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const CustomCarousel = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.heading2}>Convert from PDF</h2>

          <Carousel
            responsive={responsive}
            swipeable
            centerMode={false}
            arrows
            renderArrowsWhenDisabled={true}
            containerClass={styles.carousel__container}
            itemClass={styles.card__item}
          >
            {card.map((item, index) => (
              <Card
                key={index}
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
