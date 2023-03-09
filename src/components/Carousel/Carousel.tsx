import Grant from "../../assets/homepage-image-cropped(2).jpg";
import Alexandria from "../../assets/img-4530_orig.jpg";
import SectionsTeam from "../../assets/img-3485_orig.jpg";
import State2018 from "../../assets/img-3753_orig.jpg";
import AlexandriaFinish from "../../assets/img-4415_orig.jpg";
import Hugs from "../../assets/img-7128_orig.jpg";

import { useEffect, useState } from "preact/hooks";
import clsx from "clsx";

const imageList = [Hugs, State2018, Alexandria, SectionsTeam];

// const imageSrcs = imageList.map((img) => (
//   <img
//     class="transition duration-300 ease-in-out mb-8"
//     src={img}
//     alt="some text"
//     style={{ maxWidth: "50%" }}
//   />
// ));

const Carousel = () => {
  const [imageNum, setImageNum] = useState(0);

  const imageSrcs = imageList.map((img, index) => (
    <img
      //   class="transition duration-300 ease-in-out mb-8"
      src={img}
      alt="some text"
      style={{ maxWidth: "90%" }}
      class={clsx("transition-opacity duration-1000 ease-in-out mb-8", {
        "opacity-100": index === imageNum,
        "opacity-0": index !== imageNum,
        collapse: index !== imageNum,
        visible: index === imageNum,
      })}
    />
  ));

  useEffect(() => {
    const interval = setInterval(
      () =>
        setImageNum((currNum) => {
          const nextIndex = currNum === imageSrcs.length - 1 ? 0 : currNum + 1;
          //   setImages((prevImages) => {
          //     prevImages[currNum] = (
          //       <img
          //         class="transition-all duration-300 ease-in-out mb-8 opacity-0"
          //         src={imageList[currNum]}
          //         alt="some text"
          //         style={{ maxWidth: "50%" }}
          //       />
          //     );
          //     prevImages[nextIndex] = (
          //       <img
          //         class="transition-all duration-300 ease-in-out mb-8 opacity-100"
          //         src={imageList[nextIndex]}
          //         alt="some text"
          //         style={{ maxWidth: "50%" }}
          //       />
          //     );
          //     return prevImages;
          //   });

          //   console.log("way down here");
          return nextIndex;
        }),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  //   const getImages = () => {
  //     return imageList.map((image, index) => (
  //       <img
  //         src={image}
  //         alt="some text"
  //         style={{ maxWidth: "100%", position: "relative" }}
  //         width="100%"
  //         class={clsx("transition-opacity duration-500 ease-in-out mb-8", {
  //           "opacity-100": index === imageNum,
  //           "opacity-0": index !== imageNum,
  //           collapse: index !== imageNum,
  //           visible: index === imageNum,
  //         })}
  //       />
  //     ));
  //   };

  //   return imageSrcs[imageNum];
  return (
    <div style={{ position: "relative" }} class="justify-center flex w-full">
      <div style={{ position: "relative", top: "0", left: "0" }} class="flex justify-center w-full">
        {imageSrcs[0]}
      </div>
      {imageSrcs.map((img) => (
        <div style={{ position: "absolute" }} class="flex justify-center w-full">
          {img}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
