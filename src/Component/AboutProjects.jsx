import { use } from "react";
import { useState } from "react";
import sanchitImg from "./technologies/sanchit.png";
import img1 from "./logooo/instagram.png";
import img2 from "./logooo/github.png";
import img3 from "./logooo/linkedin.png";
export const AboutProject = () => {
  let [change, setChange] = useState(null);

  let CardData = [
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/a7/c2/e4/a7c2e4f230781661ac1a603fc768eddd.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/77/2f/9c/772f9cf4f60f80c49a61860b38c06c2d.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/7d/70/8d/7d708d8496d9581e0f769ea6c00cd476.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/d7/41/33/d74133d4e00a84694707e067add43450.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/00/8e/d3/008ed3ecc4859739a5c209dc36aa61a1.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/5b/b7/09/5bb70961c9fecf370e6aaa2ae3431e60.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/6e/5b/f4/6e5bf45e0169fc93d736bb777bebc7fe.jpg",
      projectName: "500 error",
    },
    {
      project: "Updated Soon",
      Image:
        "https://i.pinimg.com/474x/ae/0e/06/ae0e063890f9134561cc3b55334231e1.jpg",
      projectName: "500 error",
    },
  ];

  return (
    <div className="h-screen items-center justify-center flex  w-full select-none">
      <div className="bg-black h-[80vh] gap-5 flex items-center  w-full text-white">
        <div className="parent">
          {CardData.map((val, i) => (
            <div
              className="bg-gray-900 child h-[33vh] p-2"
              onMouseEnter={() => {
                setChange(i);
              }}
              onMouseLeave={() => {
                setChange(null);
              }}
              key={val}
            >
              {change === i ? (
                <div className="text-white text-center"> {val.project} </div>
              ) : (
                <div className="h-[100%] w-[100%] flex gap-4">
                  <img src={val.Image} className="h-[100%] w-[40%]"></img>
                  <div className="h-full w-full bg-gray-800 rounded-2xl p-3">
                    <span>{val.projectName}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" w-[20%] h-[90%] bg-gray-900 rounded-[10px] p-5  ">
          <div className="bg-gray-800 h-[60%]  rounded-full relative overflow-hidden">
            <img src={sanchitImg} className="absolute top-[8%]"></img>
          </div>
          <div className="h-[40%]  w-full flex flex-col justify-around items-center">
            <span className="text-[1vw]  font-extralight">
              Quality, transparency, and commitment—your project is in expert
              hands
            </span>
            <span className="text-[1vmax]  tracking-[-1px]  text-[#fffbfb86]">
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
    </div>
  );
};
