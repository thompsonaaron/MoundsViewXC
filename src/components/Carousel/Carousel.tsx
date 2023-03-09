import Alexandria from "../../assets/img-4530_orig.jpg";
import SectionsTeam from "../../assets/img-3485_orig.jpg";
import State2018 from "../../assets/img-3753_orig.jpg";
import Rosemount2015 from "../../assets/img-2015-rosemount-start.jpg";
import SEC2015 from "../../assets/img-2015-cc-conference-walking.jpg";
// import AlexandriaFinish from "/img-4415_orig.jpg";
import Hugs from "../../assets/img-7128_orig.jpg";

import { useEffect, useState } from "preact/hooks";
import clsx from "clsx";

const imageList = [SEC2015, Rosemount2015, Hugs, State2018, Alexandria, SectionsTeam];
// const imageList = [Alexandria];

const Carousel = () => {
  const [imageNum, setImageNum] = useState(0);

  const imageSrcs = imageList.map((img, index) => (
    <img
      src={img}
      alt="team photo"
      style={{ maxWidth: "80%" }}
      class={clsx("transition-opacity duration-1000 ease-in-out mb-8 max-h-fit", {
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
          return currNum === imageSrcs.length - 1 ? 0 : currNum + 1;
        }),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative" }} class="justify-center flex w-full">
      <div style={{ position: "relative", top: "0", left: "0" }} class="flex justify-center w-full">
        {imageSrcs[0]}
      </div>
      {imageSrcs.map((img) => (
        <div
          style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0" }}
          class="flex justify-center w-full"
        >
          {img}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
