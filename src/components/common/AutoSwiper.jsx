import { Box } from "@mui/material";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper";

const AutoSwiper = ({ children }) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: {
            xs: "50%",
            sm: "35%",
            md: "25%",
            lg: "20.5%",
          },
        },
      }}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={50}
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
        modules={[Autoplay]}
        speed={5000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;
