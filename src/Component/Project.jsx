import Card from "./Card";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import img1 from "./logooo/instagram.png";
import img2 from "./logooo/github.png";
import img3 from "./logooo/linkedin.png";
export const Project = () => {
  const marqeeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqeeRef.current, {
      x: "-50%",
      duration: 80, // Adjust speed (higher = slower)
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  const cardData = [
    {
      img: "https://i.pinimg.com/474x/a7/c2/e4/a7c2e4f230781661ac1a603fc768eddd.jpg",
      name: "Soon1",
    },
    {
      img: "https://i.pinimg.com/474x/45/cc/01/45cc01ba62395ec7c9006d4b26b3d25b.jpg",
      name: "Soon2",
    },
    {
      img: "https://i.pinimg.com/474x/6e/5b/f4/6e5bf45e0169fc93d736bb777bebc7fe.jpg",
      name: "Soon3",
    },
    {
      img: "https://i.pinimg.com/474x/ed/5f/3b/ed5f3b90205425f23f612ca2645e4e7a.jpg",
      name: "Soon4",
    },
    {
      img: "https://i.pinimg.com/474x/f3/8f/92/f38f926ce0dc09bd614aed085e522f2e.jpg",
      name: "Soon5",
    },
    {
      img: "https://i.pinimg.com/474x/95/e5/04/95e504808a81ce8410e4055cddfd0eed.jpg",
      name: "Soon6",
    },
  ];
  console.log(marqeeRef.current);
  return (
    <div className="h-screen w-full pprr">
      <div className=" h-screen w-full pprr justify-center flex flex-col  bg-black  ">
        <div className="h-80 px-11 flex justify-evenly items-center overflow-hidden   w-full ">
          <div className="flex gap-[8vw] px-11 " ref={marqeeRef}>
            {cardData.map((val, index) => (
              <Card key={index} imgSrc={val.img} name={val.name} />
            ))}
            {cardData.map((val, index) => (
              <Card key={index + 1} imgSrc={val.img} name={val.name} />
            ))}
          </div>
        </div>
        <div className=" socialMedia flex justify-center flex-col items-center  gap-6 w-full">
          <span className="text-[1vmax]  tracking-[1px] text-[#fffbfb86]">
            Skills,Passion,Creativity Dedication
          </span>
          <div className="flex gap-4">
            <img
              src={img1}
              className="w-10  hover:scale-150 transform transition-all duration-500"
            ></img>
            <img
              src={img2}
              className="w-10 hover:scale-110 transform transition-all duration-500"
            ></img>
            <img
              src={img3}
              className="w-10 hover:scale-150 transform  transition-all duration-500"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
