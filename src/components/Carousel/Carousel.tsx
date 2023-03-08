import Grant from "../../assets/homepage-image-cropped(2).jpg";
import Alexandria from "../../assets/dsc-4530_orig.jpg";
import { useEffect, useState } from "preact/hooks";
const images = [Alexandria, Grant, Grant];

const Carousel = () => {
  const [imageNum, setImageNum] = useState(0);

  console.log("loading carousel");

  useEffect(() => {
    console.log("component loaded");
    const interval = setInterval(
      () =>
        setImageNum((currNum) => {
          console.log(`currNum is ${currNum}`);
          return currNum >= images.length ? 0 : currNum++;
        }),
      1000
    );
    console.log("use effect hit");
    return () => clearInterval(interval);
  }, [imageNum]);

  return <img src={images[imageNum]} alt="some text" height="auto" width="50%" />;
};

export default Carousel;
