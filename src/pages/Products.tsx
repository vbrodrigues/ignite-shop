import { styled } from "../styles";
import { useKeenSlider } from "keen-slider/react";

import shirtImg from "../assets/Shirt.png";

import "keen-slider/keen-slider.min.css";

const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  // width: "100%",
  // maxWidth: "calc(100vw - ((100vw - 1180) / 2))",
  // marginLeft: "auto",
  height: 696,
});

const Product = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  // padding: "0.25rem",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 656,
  overflow: "hidden",

  img: {
    width: 520,
    height: 480,
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.8)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green500",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export function Products() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <img src={shirtImg} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <img src={shirtImg} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <img src={shirtImg} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <img src={shirtImg} alt="Camiseta" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
