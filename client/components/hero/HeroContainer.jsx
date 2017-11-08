import React, { Component, PropTypes } from "react";

import { Carousel, CustomPrevArrow, CustomNextArrow } from "../carousel";

class HeroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const heroSettings = {
      height: 500,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      type: "hero",
      backgroundColor: "#545454"
    };

    const heroSlides = [
      {
        title: "Lightning Fast Lightning Cable",
        description: "The World's Most Durable Lightning Cable.",
        href: "#",
        src: 'images/carousel/slider-3.jpg',
        cta: "Shop Now"
      },
      {
        title: "Welcom to Smart Orange Life",
        description: "We are your source of all smart tech.",
        href: "#",
        src: 'images/carousel/slider-7.jpeg',
        cta: ""
      },
      {
        description: "Sign up for our Newsletter\n to receive the latest promo",
        href: "#",
        src: 'images/carousel/slider-9.jpeg',
        cta: "Sign Up Now"
      }
    ];

    return (
      <div className="carousel">
        <Carousel slides={heroSlides} settings={heroSettings} />
      </div>
    );
  }
}

export default HeroContainer;
